<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="//cdn.ckeditor.com/4.10.1/full/ckeditor.js"></script>

<script type="text/javascript">
	app.controller('administerController', function ($scope, $http, $timeout, $q) {
		CKEDITOR.replace('articleContent', {
			height: 400,
		});
		CKEDITOR.instances['articleContent'].setData('');
		
		$scope.articleList = [];
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
						$scope.chatList = result.chatList;
						$('#collapse' + questionVO.questionId).collapse('show');
						$scope.collapseIdTemp = questionVO.questionId;
					}
				});
			}
		}
		
		function getChatData(questionVO,method) {
			var promise = $q(function(resolve, reject) {
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
		
		$scope.submitArticle = function(method) {
			var articleContent = CKEDITOR.instances.articleContent.getData();
			if (!$scope.articleTitle || !articleContent) {
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請輸入文章標題與文章內容'
					});
			} else if ($scope.articleTitle && $scope.articleTitle.length > 17) {
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '文章標題字數不可超過17個字'
					});
			}
			$http.post("/" + method, {'articleTitle':$scope.articleTitle, 'articleContent':articleContent, 'articleId':$scope.articleId})
			  .then(function(response) {
				  if (response.data.resMessage) {
			          swal({
						  type: 'error',
						  title: '錯誤',
						  text: response.data.resMessage
						});
			      } else {
			    	  var text = method == 'addArticle' ? '文章新增成功' : '文章修改成功';
			    	  alert($scope.articleTitle + '		' + text);
			    	  location.reload();
			      }
			  }, function(response) {
				  swal({
					  type: 'error',
					  title: '錯誤',
					  text: '系統發生錯誤!'
					});
			  });
		}
		
		$scope.chgNavEvent = function(navEvent) {
			$scope.event = navEvent;
			if ($scope.articleList.length == 0 && $scope.event == 'updateArticle') {
				$http.get("/getArticleList")
			    .then(function(response) {
			    	$scope.articleList = response.data;
			    }, function(response) {
			    	swal({
						  type: 'error',
						  title: '錯誤',
						  text: '系統發生錯誤!'
						});
			    });
			} else if ($scope.event == 'addArticle') {
				$scope.articleTitle = null;
				$scope.articleId = null;
				CKEDITOR.instances['articleContent'].setData('');
				CKEDITOR.instances['articleContent'].updateElement();
			}
		}
		
		$scope.clickArticleList = function(articleModel,event) {
			angular.forEach(angular.element('.list-group-item'),function(vo) {
				angular.element(vo).removeClass('active');
			});
			angular.element(event.target).addClass('active');
			$scope.articleTitle = articleModel.articleTitle;
			$scope.articleId = articleModel.articleId;
			CKEDITOR.instances['articleContent'].setData(articleModel.articleContent);
			CKEDITOR.instances['articleContent'].updateElement();
		}
	});
</script>