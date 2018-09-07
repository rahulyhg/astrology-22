<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	app.controller('feedbackController', function ($scope, $http) {
		$scope.modal = {};
		
		$scope.$on("goFeedback", function(event, obj){ 
			$scope.feedbackType = obj.feedbackType;
			$scope.feedbackEmail = obj.feedbackEmail;
	    });
		
		$scope.submit = function() {
			if ($scope.feedbackType == 'reserve') {
				if (!$scope.modal.name) {
					return swal({
							  type: 'error',
							  title: '錯誤',
							  text: '請輸入姓名'
							});
				} else if (!$scope.modal.phone) {
					return swal({
						  type: 'error',
						  title: '錯誤',
						  text: '請輸入電話'
						});
				}
			} else {
				if (!$scope.modal.suggestion) {
					return swal({
							  type: 'error',
							  title: '錯誤',
							  text: '請輸入問題內容'
							});
				}
			}
			
			$scope.modal.feedbackType = $scope.feedbackType;
			$scope.modal.feedbackEmail = $scope.feedbackEmail;
			$http.post("/feedback",$scope.modal)
		    .then(function(response) {
		        if (response.data.resMessage) {
		        	swal({
						  type: 'error',
						  title: '錯誤',
						  text: response.data.resMessage
						});
		        } else {
		        	swal({
						  type: 'success',
						  title: '成功',
						  text: '成功送出'
						});
		        	$scope.$root.$broadcast("afterSubmit");
		        	$scope.modal = {};
					angular.element('#feedbackModal').modal('hide');
		        }
		    }, function(response) {
		    	swal({
					  type: 'error',
					  title: '錯誤',
					  text: '系統發生錯誤!'
					});
		    });
		}
	});
</script>