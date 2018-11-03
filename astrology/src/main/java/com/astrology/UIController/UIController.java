package com.astrology.UIController;

import java.util.List;
import java.util.logging.Logger;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.astrology.DAO.MongoDBDao;
import com.astrology.VO.ArticleVO;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Controller
public class UIController {
	private static final Logger log = Logger.getLogger(UIController.class.getName());
	
	@Autowired
	MongoDBDao mongoDBDao;
	
	private static Gson gson = new GsonBuilder().create();
	
	@RequestMapping("/")
	public ModelAndView home() {
		return new ModelAndView("/main/home");
	}
	
	@RequestMapping("/constellation")
	public ModelAndView constellation() {
		return new ModelAndView("/main/constellation");
	}
	
	@RequestMapping("/analyze")
	public ModelAndView analyze() {
		return new ModelAndView("/main/analyze");
	}
	
	@RequestMapping("/article")
	public ModelAndView article() {
		return new ModelAndView("/main/article");
	}
	
	@RequestMapping("/introduce")
	public ModelAndView introduce() {
		return new ModelAndView("/main/introduce");
	}
	
	@RequestMapping("/contact")
	public ModelAndView contact() {
		return new ModelAndView("/main/contact");
	}
	
	@RequestMapping("/administer")
	public ModelAndView administer() {
		return new ModelAndView("/main/administer");
	}
	
	@RequestMapping("/articleDetail/{articleId}")
	public ModelAndView articleDetail(@PathVariable("articleId") String articleId) {
		try {
			if (StringUtils.isNotBlank(articleId)) {
				mongoDBDao.updateArticleReviewsById(articleId);
				ArticleVO articleVO = mongoDBDao.getArticleVOById(articleId);
				if (articleVO != null) {
					List<ArticleVO> articleList = mongoDBDao.getArticleList(1);
					
					ModelAndView modelView = new ModelAndView("/main/articleDetail");
					modelView.addObject("articleVO", gson.toJson(articleVO));
					modelView.addObject("articleList", gson.toJson(articleList));
					return modelView;
				}
			}
		} catch (Exception e) {
			log.info(e.getMessage());
		}
		return new ModelAndView("/main/article");
	}
	
}
