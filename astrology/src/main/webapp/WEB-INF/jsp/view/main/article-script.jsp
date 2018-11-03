<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	app.controller('controller', function ($scope, $http) {
		
		$http.get("/getArticleList/1")
	    .then(function(response) {
	    	$scope.articleList = response.data;
	    	angular.forEach($scope.articleList, function(articleModel) {
				articleModel.articleTime = new Date(articleModel.articleTime);
			});
	    }, function(response) {
	    	swal({
				  type: 'error',
				  title: '錯誤',
				  text: '系統發生錯誤!'
				});
	    });
		
		$scope.goArticle = function(articleId) {
			location.href = '../articleDetail/' + articleId;
		}
		
	});
</script>