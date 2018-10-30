package com.astrology.UIController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UIController {
	
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
	
}
