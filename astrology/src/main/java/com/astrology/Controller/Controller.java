package com.astrology.Controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.astrology.VO.MessageVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@RestController
@CrossOrigin
public class Controller {
	private final Logger logger = LoggerFactory.getLogger("logs");
	
	@Autowired
	private ApplicationContext context;
	
	private static Gson gson = new GsonBuilder().create();
	private static MessageVO messageVO = new MessageVO();
	
	@RequestMapping(value = "/test", produces = "application/json;charset=UTF-8")
	@ResponseBody
	public String test() {
		//OpenData openData = context.getBean(OpenData.class);
		try {
			
		} catch (Exception e) {
			messageVO.setResMessage("發生錯誤:" + e.getMessage());
			logger.error(e.getMessage());
			return gson.toJson(messageVO);
		}
		return gson.toJson("");
	}
}
