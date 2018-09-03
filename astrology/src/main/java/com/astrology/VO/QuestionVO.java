package com.astrology.VO;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;

public class QuestionVO {
	@Id
	private String questionId;
	private String questionTitle;
	private String questionContent;
	private String questionAuthor;
	private boolean privateQA;
	private String privatePwd;
	private Date questionTime;
	private List<ChatVO> chatList;
	
	public String getQuestionId() {
		return questionId;
	}
	public void setQuestionId(String questionId) {
		this.questionId = questionId;
	}
	public String getQuestionTitle() {
		return questionTitle;
	}
	public void setQuestionTitle(String questionTitle) {
		this.questionTitle = questionTitle;
	}
	public String getQuestionContent() {
		return questionContent;
	}
	public void setQuestionContent(String questionContent) {
		this.questionContent = questionContent;
	}
	public String getQuestionAuthor() {
		return questionAuthor;
	}
	public void setQuestionAuthor(String questionAuthor) {
		this.questionAuthor = questionAuthor;
	}
	public boolean isPrivateQA() {
		return privateQA;
	}
	public void setPrivateQA(boolean privateQA) {
		this.privateQA = privateQA;
	}
	public String getPrivatePwd() {
		return privatePwd;
	}
	public void setPrivatePwd(String privatePwd) {
		this.privatePwd = privatePwd;
	}
	public Date getQuestionTime() {
		return questionTime;
	}
	public void setQuestionTime(Date questionTime) {
		this.questionTime = questionTime;
	}
	public List<ChatVO> getChatList() {
		return chatList;
	}
	public void setChatList(List<ChatVO> chatList) {
		this.chatList = chatList;
	}
	
}
