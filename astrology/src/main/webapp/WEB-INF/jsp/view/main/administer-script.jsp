<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	app.controller('administerController', function ($scope, $http, $timeout) {
		$scope.event = 'responseQuestion';
		
		$http.get("/getQuestionList")
	    .then(function(response) {
	    	$scope.questionList = response.data;
	    	angular.forEach($scope.questionList,function(vo) {
				vo.questionTime = new Date(vo.questionTime);
			});
	    }, function(response) {
	    	swal({
				  type: 'error',
				  title: '錯誤',
				  text: '系統發生錯誤!'
				});
	    });
		
		// 事件處理------------------------------------------------
		$scope.clickList = function(questionVO) {
			if (questionVO.questionId == $scope.collapseIdTemp) {
				$('#collapse' + questionVO.questionId).collapse('hide');
				$scope.collapseIdTemp = null;
			} else {
				var promise = getChatData(questionVO,'getChatList');
				promise.then(function(result) {
					if (result) {
						$scope.$apply(function() {
							$scope.chatList = result.chatList;
							$('#collapse' + questionVO.questionId).collapse('show');
							$scope.collapseIdTemp = questionVO.questionId;
						});
					}
				});
			}
		}
		
		function getChatData(questionVO,method) {
			var promise = new Promise(function(resolve, reject) {
				$http.post("/" + method,questionVO)
				  .then(function(response) {
					  angular.forEach(response.data.chatList,function(vo) {
						  vo.chatMessageTime = new Date(vo.chatMessageTime);
					  });
				      resolve(response.data);
				  }, function(response) {
					  reject();
				  });
			});
			return promise;
		}
		
		$scope.sendMessage = function(questionVO) {
			var message = questionVO.message;
			if (message && message.length > 0) {
				message = message.trim();
				message = message.replace('\r\n', '<br>');
	            message = message.replace('\n', '<br>');
	            message = message.replace('\r', '<br>');
	            
				$http.post("/sendMessage",{'chatAuthor':'Poa','chatResponse':true,'chatMessageTime':Date.now(),'chatMessage':message,'questionId':questionVO.questionId})
			    .then(function(response) {
			        if (response.data.resMessage) {
			        	swal({
							  type: 'error',
							  title: '錯誤',
							  text: response.data.resMessage
							});
			        } else {
			        	$scope.chatList = response.data.chatList;
			        	angular.forEach($scope.chatList,function(vo) {
							  vo.chatMessageTime = new Date(vo.chatMessageTime);
						});
			        	questionVO.message = null;
			        	$timeout(function() {
							angular.element("#msg-group").scrollTop(angular.element("#msg-group")[0].scrollHeight);
			        	}, 100);
			        }
			    }, function(response) {
			    	swal({
						  type: 'error',
						  title: '錯誤',
						  text: '系統發生錯誤!'
						});
			    });
            }
		}
		
		$scope.addArticle = function() {
			if (!$scope.articleTitle || !$scope.articleContent) {
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請輸入文章標題與文章內容'
					});
			}
			$http.post("/addArticle", {'articleTitle':$scope.articleTitle, 'articleContent':$scope.articleContent.trim()})
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
						  text: '文章新增成功'
						});
			    	  $scope.articleTitle = null;
			    	  $scope.articleContent = null;
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