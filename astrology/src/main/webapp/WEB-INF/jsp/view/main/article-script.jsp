<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	app.controller('controller', function ($scope, $http, anchorSmoothScroll, $location) {
		$scope.lineUrl = "https://astrology-213903.appspot.com/article";
		var absUrl = $location.absUrl();
		if (absUrl.split("?")[1]) {
			var parameter = absUrl.split("?")[1];
			parameter = parameter.split("seq=")[1];
			if (parameter) {
				anchorSmoothScroll.scrollTo(parameter);
			}
		}
		
		$http.get("/getArticleList")
	    .then(function(response) {
	    	$scope.articleList = response.data;
	    	angular.forEach($scope.articleList, function(articleModel) {
				articleModel.fbLink = $scope.lineUrl + '?seq=' + articleModel.articleId;
				articleModel.articleTime = new Date(articleModel.articleTime);
			});
	    }, function(response) {
	    	swal({
				  type: 'error',
				  title: '錯誤',
				  text: '系統發生錯誤!'
				});
	    });
		
		$scope.goArticle = function(id) {
			anchorSmoothScroll.scrollTo(id);
		}
		
		$scope.watchDetail = function(articleModel) {
			articleModel.articleReviews += 1;
			$http.get("/updateArticleReviews/" + articleModel.articleId);
			$scope.articleDetailModel = {};
			$scope.articleDetailModel = articleModel;
			angular.element('#articleDetailModal').modal({backdrop:'static'});
			angular.element('#articleDetailModal').modal('show');
		}
		
	});
</script>