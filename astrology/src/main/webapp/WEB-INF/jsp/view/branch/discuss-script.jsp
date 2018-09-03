<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	app.controller('discussController', function ($scope, $http, $timeout) {
		$scope.modal = {};
		
		$http.get("/getQuestionList")
	    .then(function(response) {
	    	$scope.questionList = response.data;
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
			} else if (!questionVO.privateQA) {
				var promise = getChatData(questionVO,'getChatList');
				promise.then(function(result) {
					if (result) {
						$scope.$apply(function() {
							$scope.chatList = result.chatList;
							angular.forEach($scope.chatList,function(vo) {
								vo.chatMessageTime = new Date(vo.chatMessageTime);
							});
							$('#collapse' + questionVO.questionId).collapse('show');
							$scope.collapseIdTemp = questionVO.questionId;
						});
					}
				});
			} else {
				swal({
					  title: '請輸入隱藏密碼',
					  input: 'password',
					  inputPlaceholder: '請輸入隱藏密碼',
					  showCancelButton: true,
					  confirmButtonText: '送出',
					  showLoaderOnConfirm: true,
					  allowOutsideClick: function() {
						  swal.isLoading();
					  },
					  preConfirm: function(parameter) {
						  return new Promise(function(resolve, reject) {
							  questionVO.privatePwd = parameter;
							  var promise = getChatData(questionVO,'confirmPassword');
							  promise.then(function(result) {
									if (result.resMessage) {
										$('#collapse' + questionVO.questionId).collapse('hide');
										  reject(result.resMessage);
									} else if (result) {
										resolve(result);
									} else {
										 $('#collapse' + questionVO.questionId).collapse('hide');
										  reject('系統發生錯誤!');
									}
								});
					      });
					  }
				}).then(function(data) {
					$scope.$apply(function() {
						$scope.chatList = data.chatList;
						angular.forEach($scope.chatList,function(vo) {
							vo.chatMessageTime = new Date(vo.chatMessageTime);
						});
						$('#collapse' + questionVO.questionId).collapse('show');
						$scope.collapseIdTemp = questionVO.questionId;
					});
				}).catch(function() {
					$('#collapse' + questionVO.questionId).collapse('hide');
				});
			}
		}
		
		function getChatData(questionVO,method) {
			questionVO.questionTime = new Date(questionVO.questionTime);
			var promise = new Promise(function(resolve, reject) {
				$http.post("/" + method,questionVO)
				  .then(function(response) {
				      resolve(response.data);
				  }, function(response) {
					  reject();
				  });
			});
			return promise;
		}
		
		$scope.addQuestion = function() {
			var errMsg = null;
			if (!$scope.modal.questionTitle) {
				errMsg = '請輸入問題主旨'
			} else if (!$scope.modal.questionContent) {
				errMsg = '請輸入問題內容'
			} else if (!$scope.modal.questionAuthor) {
				errMsg = '請輸入發問人暱稱'
			}
			if ($scope.modal.privateQA) {
				if (!$scope.modal.privatePwd || !$scope.modal.privatePwd1) {
					errMsg = '請輸入隱藏密碼'
				} else if ($scope.modal.privatePwd != $scope.modal.privatePwd1) {
					errMsg = '請確認隱藏密碼是否輸入正確'
				}
			}
			if (errMsg) {
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: errMsg
					});
			} else {
				$http.post("/addQuestion",$scope.modal)
			    .then(function(response) {
			        if (response.data.resMessage) {
			        	swal({
							  type: 'error',
							  title: '錯誤',
							  text: response.data.resMessage
							});
			        } else {
			        	$scope.questionList = response.data;
			        	$scope.modal = {};
						angular.element('#questionModal').modal('hide');
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
		
		$scope.chgBox = function(event) {
			if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
				$scope.sendMessage();
            }
		}
		
		$scope.sendMessage = function() {
			var message = $scope.message;
			if (message && message.length > 0) {
				message = message.trim();
				message = message.replace('\r\n', '<br>');
	            message = message.replace('\n', '<br>');
	            message = message.replace('\r', '<br>');
				$scope.msgList.push({'author':$scope.author,'isResponse':false,'msgTime':new Date(),'msg':message});
				$scope.message = null;
				$timeout(function() {
					angular.element("#msg-group").scrollTop(angular.element("#msg-group")[0].scrollHeight);
	        	}, 100);
            }
		}
	});
</script>