package com.astrology.Controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.astrology.VO.MessageVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import cz.kibo.api.astrology.builder.CuspBuilder;
import cz.kibo.api.astrology.builder.PlanetBuilder;
import cz.kibo.api.astrology.domain.Cusp;
import cz.kibo.api.astrology.domain.Planet;

@RestController
@CrossOrigin
public class Controller {
	private final Logger logger = LoggerFactory.getLogger("logs");

//	@Autowired
//	private ApplicationContext context;

	private static Gson gson = new GsonBuilder().create();
	private static MessageVO messageVO = new MessageVO();
	private DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

	@GetMapping(value = "/getChartData/{inputTime}/{sidereal}/{addr}", produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String getChartData(@PathVariable("inputTime") String inputTime, @PathVariable("sidereal") String sidereal, @PathVariable("addr") String addr) {
		Map<String, Object> resultMap = new HashMap<>();
		try {
			double latitude = 25.03;
			double longitude = 121.3;
			if (StringUtils.isNotBlank(addr)) {
				if (StringUtils.startsWith(addr, "!")) {
					addr = addr.substring(1, addr.length());
					latitude = Double.parseDouble(addr.split("-")[1]);
					longitude = Double.parseDouble(addr.split("-")[0]);
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
			inputTime += ":00";
			
			Cusp cuspEphemeris = new CuspBuilder(LocalDateTime.parse(inputTime, format))
					.houses("Placidus")
					.topo(latitude, longitude, 0)
					.zodiac(sidereal)
					.build();
			resultMap.put("cusps", cuspEphemeris.getCusps());
			
			Planet planetEphemeris = new PlanetBuilder(LocalDateTime.parse(inputTime, format))
					.planet("Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Chiron, Lilith, NNode")
					.topo(latitude, longitude, 0)
					.zodiac(sidereal)
					.build();
			resultMap.put("planets", planetEphemeris.getPlanets());
		} catch (Exception e) {
			messageVO.setResMessage("發生錯誤:" + e.getMessage());
			logger.error(e.getMessage());
			return gson.toJson(messageVO);
		}
		return gson.toJson(resultMap);
	}
}
