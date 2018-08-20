<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<!DOCTYPE html>

<html>
	<head>
		<tiles:insertAttribute name="head" />
		<title>星座解析</title>
		<tiles:insertAttribute name="script-common" />
	</head>
	<body ng-app="myApp" ng-controller="controller as ctrl">
		<tiles:insertAttribute name="header" />
		<tiles:insertAttribute name="body" />
		<tiles:insertAttribute name="footer" />
		
		<tiles:insertAttribute name="script" />
	</body>
</html>
