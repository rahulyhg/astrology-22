package com.astrology.DAO;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Field;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import com.astrology.Util.DateUtil;
import com.astrology.VO.QuestionVO;
import com.astrology.VO.StatisticalViwerVO;


@Component
public class MongoDBDao {
	
	@Resource
    private MongoTemplate mongoTemplate;
	
	public int getSumByCountType(String countType) {
        AggregationOperation group = Aggregation.group("countType").sum("countNumber").as("countNumber");
        AggregationOperation match = Aggregation.match(Criteria.where("countType").is(countType));
        Aggregation aggregation = Aggregation.newAggregation(match,group);
        AggregationResults<StatisticalViwerVO> results =  mongoTemplate.aggregate(aggregation, "StatisticalViwer", StatisticalViwerVO.class);
        
        if (CollectionUtils.isEmpty(results.getMappedResults())) {
        	return 1;
        } else {
        	return results.getMappedResults().get(0).getCountNumber();
        }
	}
	
	public int updateByCountType(String countType, int currentViwer) {
		Criteria criteria = new Criteria().andOperator(
				Criteria.where("countType").is(countType), 
				Criteria.where("countDate").is(DateUtil.getTwToday(false)));
		if (mongoTemplate.exists(new Query(criteria), "StatisticalViwer")) {
			mongoTemplate.updateFirst(new Query(criteria), new Update().set("countNumber", currentViwer), "StatisticalViwer");
		} else {
			StatisticalViwerVO vo = new StatisticalViwerVO();
			vo.setCountType(countType);
			vo.setCountDate(DateUtil.getTwToday(false));
			vo.setCountNumber(currentViwer);
			mongoTemplate.insert(vo, "StatisticalViwer");
		}
		return this.getSumByCountType("websiteView");
	}
	
	public void insertQuestion(QuestionVO questionVO) {
		mongoTemplate.insert(questionVO, "QuestionContent");
	}
	
	public List<QuestionVO> getQuestionList() {
		Query query = new Query(Criteria.where("questionId").exists(true));
		Field field = query.fields();
		field.include("questionId");
		field.include("questionTitle");
		field.include("questionAuthor");
		field.include("privateQA");
		field.include("questionTime");
		return mongoTemplate.find(query, QuestionVO.class, "QuestionContent");
	}
	
	public QuestionVO getQuestionVOById(String questionId) {
		QuestionVO questionVO = mongoTemplate.findById(questionId, QuestionVO.class, "QuestionContent");
		return questionVO;
	}
}
