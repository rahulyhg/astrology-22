package com.astrology.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesConfigurer;
import org.springframework.web.servlet.view.tiles3.TilesView;
import org.springframework.web.servlet.view.tiles3.TilesViewResolver;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	
	/** 存放css/js等在resources/static內*/
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
	}
	
	/** 設置tiles*/
	@Bean
	public TilesConfigurer tilesConfigurer() {
		final TilesConfigurer configurer = new TilesConfigurer();
		configurer.setDefinitions(new String[] { "/WEB-INF/tiles.xml" });
		configurer.setCheckRefresh(true);
		return configurer;
	}
	
	/** 設置tiles*/
	@Bean
	public TilesViewResolver tilesViewResolver() {
		final TilesViewResolver resolver = new TilesViewResolver();
		resolver.setViewClass(TilesView.class);
		return resolver;
	}
}
