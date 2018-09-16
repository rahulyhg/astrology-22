package com.astrology.DAO;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

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
import com.astrology.VO.ArticleVO;
import com.astrology.VO.ChatVO;
import com.astrology.VO.FeedbackVO;
import com.astrology.VO.QuestionVO;
import com.astrology.VO.StatisticalViwerVO;


@Component
public class MongoDBDao {
	
	@Resource
    private MongoTemplate mongoTemplate;
	
	public int getSumByCountType(String countType) {
        AggregationOperation group = Aggregation.group("countType").sum("countNumber").as("totalNumber");
        AggregationOperation match = Aggregation.match(Criteria.where("countType").is(countType));
        Aggregation aggregation = Aggregation.newAggregation(match,group);
        AggregationResults<StatisticalViwerVO> results =  mongoTemplate.aggregate(aggregation, "StatisticalViwer", StatisticalViwerVO.class);
        
        if (CollectionUtils.isEmpty(results.getMappedResults())) {
        	return 1;
        } else {
        	return results.getMappedResults().get(0).getTotalNumber();
        }
	}
	
	public int updateByCountType(String countType, int currentViwer) {
		Criteria criteriaByPrevious = new Criteria().andOperator(
				Criteria.where("countType").is(countType), 
				Criteria.where("countDate").ne(DateUtil.getTwToday(false)));
		AggregationOperation group = Aggregation.group("countType").sum("countNumber").as("totalNumber");
        AggregationOperation match = Aggregation.match(criteriaByPrevious);
        Aggregation aggregation = Aggregation.newAggregation(match,group);
        AggregationResults<StatisticalViwerVO> results =  mongoTemplate.aggregate(aggregation, "StatisticalViwer", StatisticalViwerVO.class);
		int sumOfPrevious = results.getMappedResults().get(0).getTotalNumber();
		
		
		
		Criteria criteriaByPresent = new Criteria().andOperator(
				Criteria.where("countType").is(countType), 
				Criteria.where("countDate").is(DateUtil.getTwToday(false)));
		if (mongoTemplate.exists(new Query(criteriaByPresent), "StatisticalViwer")) {
			int count = (currentViwer - sumOfPrevious);
			if (count > 0) {
				mongoTemplate.updateFirst(new Query(criteriaByPresent), 
						new Update().set("countNumber", count), "StatisticalViwer");
			}
		} else {
			StatisticalViwerVO vo = new StatisticalViwerVO();
			vo.setCountType(countType);
			vo.setCountDate(DateUtil.getTwToday(false));
			vo.setCountNumber(0);
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
	
	public void updateChatById(String chatAuthor, boolean chatResponse, Date chatMessageTime, String chatMessage, String questionId) {
		QuestionVO questionVO = this.getQuestionVOById(questionId);
		List<ChatVO> chatList = questionVO.getChatList();
		ChatVO chatVO = new ChatVO();
		chatVO.setChatAuthor(chatAuthor);
		chatVO.setChatResponse(chatResponse);
		chatVO.setChatMessageTime(chatMessageTime);
		chatVO.setChatMessage(chatMessage);
		chatList.add(chatVO);
		
		mongoTemplate.updateFirst(new Query(Criteria.where("questionId").is(questionId)), 
				new Update().set("chatList", chatList), QuestionVO.class, "QuestionContent");
	}
	
	public void insertFeedback(FeedbackVO feedbackVO) {
		mongoTemplate.insert(feedbackVO, "FeedbackContent");
	}
	
	public List<ArticleVO> getArticleList() {
		Query query = new Query(Criteria.where("articleId").exists(true));
		return mongoTemplate.find(query, ArticleVO.class, "ArticleContent");
	}
	
	public void insertArticle(ArticleVO articleVO) {
		mongoTemplate.insert(articleVO, "ArticleContent");
	}
	
	public void updateArticle(ArticleVO articleVO) {
		mongoTemplate.updateFirst(new Query(Criteria.where("articleId").is(articleVO.getArticleId())), 
				new Update()
				.set("articleTitle", articleVO.getArticleTitle())
				.set("articleContent", articleVO.getArticleContent())
				, ArticleVO.class, "ArticleContent");
	}
	
	public ArticleVO getArticleVOById(String articleId) {
		ArticleVO articleVO = mongoTemplate.findById(articleId, ArticleVO.class, "ArticleContent");
		return articleVO;
	}
	
	public void updateArticleReviewsById(String articleId) {
		ArticleVO articleVO = this.getArticleVOById(articleId);
		mongoTemplate.updateFirst(new Query(Criteria.where("articleId").is(articleId)), 
				new Update().set("articleReviews", articleVO.getArticleReviews() + 1), ArticleVO.class, "ArticleContent");
	}
	
	
}
