package com.astrology.DAO;

import javax.annotation.Resource;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;


@Component
public class MongoDBDao {
	
	@Resource
    private MongoTemplate mongoTemplate;
	
	public void test() {
		//return mongoTemplate.findAll(StockVO.class);
	}
}
