package com.astrology.VO;

import java.util.Date;

public class ChatVO {
	private String chatAuthor;
	private boolean chatResponse;
	private Date chatMessageTime;
	private String chatMessage;
	
	public String getChatAuthor() {
		return chatAuthor;
	}
	public void setChatAuthor(String chatAuthor) {
		this.chatAuthor = chatAuthor;
	}
	public boolean isChatResponse() {
		return chatResponse;
	}
	public void setChatResponse(boolean chatResponse) {
		this.chatResponse = chatResponse;
	}
	public Date getChatMessageTime() {
		return chatMessageTime;
	}
	public void setChatMessageTime(Date chatMessageTime) {
		this.chatMessageTime = chatMessageTime;
	}
	public String getChatMessage() {
		return chatMessage;
	}
	public void setChatMessage(String chatMessage) {
		this.chatMessage = chatMessage;
	}
	
	
	
}
