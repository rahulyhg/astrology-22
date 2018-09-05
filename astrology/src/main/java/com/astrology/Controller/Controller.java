package com.astrology.Controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.astrology.DAO.MongoDBDao;
import com.astrology.VO.ChatVO;
import com.astrology.VO.MessageVO;
import com.astrology.VO.QuestionVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

import cz.kibo.api.astrology.builder.CuspBuilder;
import cz.kibo.api.astrology.builder.PlanetBuilder;
import cz.kibo.api.astrology.domain.Cusp;
import cz.kibo.api.astrology.domain.Planet;

@RestController
public class Controller {
	private static final Logger log = Logger.getLogger(Controller.class.getName());

	@Autowired
	MongoDBDao mongoDBDao;

	private static Gson gson = new GsonBuilder().create();
	private static MessageVO messageVO = new MessageVO();
	private DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
	private static int currentViwer = 1;
	
	@GetMapping(value = "/getChartData/{inputTime}/{timezone}/{addr}/{savelight}", produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getChartData(@PathVariable("inputTime") String inputTime, @PathVariable("timezone") int timezone
			, @PathVariable("addr") String addr, @PathVariable("savelight") boolean savelight) {
		Map<String, Object> resultMap = new HashMap<>();
		try {
			double latitude = 25.03;
			double longitude = 121.3;
			if (StringUtils.isNotBlank(addr)) {
				if (StringUtils.startsWith(addr, "!")) {
					addr = addr.substring(1, addr.length());
					longitude = Double.parseDouble(addr.split("-")[0]);
					latitude = Double.parseDouble(addr.split("-")[1]);
				} else {
					CloseableHttpClient httpclient = HttpClients.createDefault();
					HttpGet httpget = new HttpGet("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC1iYs4jh9N5Mz6ZkFPHkVJbWjqQhW-fjg&address=" + addr);
					CloseableHttpResponse response = httpclient.execute(httpget);
					HttpEntity entity = response.getEntity();
					if (entity != null) {
						String googleLocationData = "";
						BufferedReader in = new BufferedReader(new InputStreamReader(entity.getContent()));
						String line = null;
						while ((line = in.readLine()) != null) {
							googleLocationData += line;
						}
						JSONObject jsonObj = new JSONObject(googleLocationData);
						if (StringUtils.equals(jsonObj.getString("status"), "OK")) {
							JSONObject resultObj = new JSONObject(jsonObj.getJSONArray("results").get(0).toString());
							latitude = resultObj.getJSONObject("geometry").getJSONObject("location").getDouble("lat");
							longitude = resultObj.getJSONObject("geometry").getJSONObject("location").getDouble("lng");
						}
					}
				}
			}
			
			LocalDateTime time = LocalDateTime.parse(inputTime, format).minusHours(timezone);
			if (savelight) {
				time = time.plusHours(1);
			}
			Cusp cuspEphemeris = new CuspBuilder(time)
					.topo(longitude, latitude, 0)
					.build();
			resultMap.put("cusps", cuspEphemeris.getCusps());
			
			Planet planetEphemeris = new PlanetBuilder(time)
					.planets()
					.topo(longitude, latitude, 0)
					.build();
			Map<String, List<Double>> planetMap = planetEphemeris.getPlanets();
			planetMap.remove("Chiron");
			planetMap.remove("Lilith");
			planetMap.values().forEach(planetList -> {
				planetList.remove(1);
			});
			resultMap.put("planets", planetMap);
		} catch (Exception e) {
			messageVO.setResMessage("發生錯誤:" + e.getMessage());
			log.info(e.getMessage());
			return gson.toJson(messageVO);
		}
		return gson.toJson(resultMap);
	}
	
	@GetMapping(value = "/getWebsiteViwerCount", produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getWebsiteViwerCount() {
		if (currentViwer == 1) {
			currentViwer = mongoDBDao.getSumByCountType("websiteView");
		} else {
			currentViwer += 1;
		}
		return gson.toJson(currentViwer);
	}
	
	@GetMapping(value = "/updateWebsiteViwerCountTask")
	public void updateWebsiteViwerCountTask() {
		currentViwer = mongoDBDao.updateByCountType("websiteView", currentViwer);
	}
	
	@GetMapping(value = "/getQuestionList")
	public String getQuestionList() {
		List<QuestionVO> questionList = mongoDBDao.getQuestionList();
		return gson.toJson(questionList);
	}
	
	@PostMapping(value = "/addQuestion", produces = "application/json;charset=UTF-8")
	public String addQuestion(@RequestBody QuestionVO questionVO) {
		List<QuestionVO> questionList = null;
		try {
			Date date = new Date();
			List<ChatVO> chatList = new ArrayList<>();
			ChatVO chatVO = new ChatVO();
			chatVO.setChatAuthor(questionVO.getQuestionAuthor());
			chatVO.setChatMessage(questionVO.getQuestionContent());
			chatVO.setChatMessageTime(date);
			chatVO.setChatResponse(false);
			chatList.add(chatVO);
			
			questionVO.setChatList(chatList);
			questionVO.setQuestionTime(date);
			questionVO.setQuestionId(String.valueOf(date.getTime()));
			mongoDBDao.insertQuestion(questionVO);
			questionList = mongoDBDao.getQuestionList();
		} catch (Exception e) {
			messageVO.setResMessage("發生錯誤:" + e.getMessage());
			log.info(e.getMessage());
			return gson.toJson(messageVO);
		}
		return gson.toJson(questionList);
	}
	
	@PostMapping(value = "/confirmPassword", produces = "application/json;charset=UTF-8")
	public String confirmPassword(@RequestBody QuestionVO sourceVO) {
		try {
			QuestionVO questionVO = mongoDBDao.getQuestionVOById(sourceVO.getQuestionId());
			if (questionVO == null) {
				messageVO.setResMessage("查詢失敗，此問題不存在");
				return gson.toJson(messageVO);
			} else if (StringUtils.equals(questionVO.getPrivatePwd(), sourceVO.getPrivatePwd())) {
				return gson.toJson(questionVO);
			} else {
				messageVO.setResMessage("密碼錯誤，請重新輸入");
				return gson.toJson(messageVO);
			}
		} catch (Exception e) {
			messageVO.setResMessage("發生錯誤:" + e.getMessage());
			log.info(e.getMessage());
			return gson.toJson(messageVO);
		}
	}
	
	@PostMapping(value = "/getChatList", produces = "application/json;charset=UTF-8")
	public String getChatList(@RequestBody QuestionVO sourceVO) {
		try {
			QuestionVO questionVO = mongoDBDao.getQuestionVOById(sourceVO.getQuestionId());
			return gson.toJson(questionVO);
		} catch (Exception e) {
			messageVO.setResMessage("發生錯誤:" + e.getMessage());
			log.info(e.getMessage());
			return gson.toJson(messageVO);
		}
	}
	
	@PostMapping(value = "/sendMessage", produces = "application/json;charset=UTF-8")
	public String sendMessage(@RequestBody String postPayload) {
		try {
			Map<String, String> payload = gson.fromJson(postPayload, new TypeToken<Map<String, String>>(){}.getType());
			String chatAuthor = payload.get("chatAuthor");
			boolean chatResponse = Boolean.valueOf(payload.get("chatResponse"));
			Date chatMessageTime = new Date();
			chatMessageTime.setTime(Long.valueOf(payload.get("chatMessageTime")));
			String chatMessage = payload.get("chatMessage");
			String questionId = payload.get("questionId");
			mongoDBDao.updateChartById(chatAuthor, chatResponse, chatMessageTime, chatMessage, questionId);
			
			QuestionVO questionVO = mongoDBDao.getQuestionVOById(questionId);
			return gson.toJson(questionVO);
		} catch (Exception e) {
			messageVO.setResMessage("發生錯誤:" + e.getMessage());
			log.info(e.getMessage());
			return gson.toJson(messageVO);
		}
	}
}
