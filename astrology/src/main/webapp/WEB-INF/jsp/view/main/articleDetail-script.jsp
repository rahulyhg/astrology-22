<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	app.controller('controller', function ($scope, $http) {
		$scope.linkUrl = location.href;
		$scope.articleModel = ${articleVO};
		$scope.articleList = ${articleList};
		
		$scope.articleModel.articleTime = new Date($scope.articleModel.articleTime);
		angular.forEach($scope.articleList, function(articleModel) {
			articleModel.articleTime = new Date(articleModel.articleTime);
		});
		
		$scope.goArticle = function(articleId) {
			location.href = '../articleDetail/' + articleId;
		}
		
		$scope.back = function(articleId) {
			location.href = '../article';
		}
	});
</script>