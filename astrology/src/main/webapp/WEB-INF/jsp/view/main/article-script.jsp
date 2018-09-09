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
		
		$scope.goArticle = function(id) {
			anchorSmoothScroll.scrollTo(id);
		}
	});
</script>