package com.astrology.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.astrology.DAO.MongoDBDao;

@Component
public class OpenData {
	
	@Autowired
	MongoDBDao mongoDBDao;
	
}
