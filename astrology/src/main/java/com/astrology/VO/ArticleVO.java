package com.astrology.VO;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class ArticleVO {
	@Id
	private String articleId;
	private String articleTitle;
	private Date articleTime;
	private int articleReviews;
	private String articleContent;
	private String articleAuthor;
	
	public String getArticleId() {
		return articleId;
	}
	public void setArticleId(String articleId) {
		this.articleId = articleId;
	}
	public String getArticleTitle() {
		return articleTitle;
	}
	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}
	public Date getArticleTime() {
		return articleTime;
	}
	public void setArticleTime(Date articleTime) {
		this.articleTime = articleTime;
	}
	public int getArticleReviews() {
		return articleReviews;
	}
	public void setArticleReviews(int articleReviews) {
		this.articleReviews = articleReviews;
	}
	public String getArticleContent() {
		return articleContent;
	}
	public void setArticleContent(String articleContent) {
		this.articleContent = articleContent;
	}
	public String getArticleAuthor() {
		return articleAuthor;
	}
	public void setArticleAuthor(String articleAuthor) {
		this.articleAuthor = articleAuthor;
	}
	
	
}
