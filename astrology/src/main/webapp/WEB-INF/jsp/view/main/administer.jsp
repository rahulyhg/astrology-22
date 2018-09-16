<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" ng-controller="administerController as ctrl" style="margin-bottom:50px">
	<h3 class="alert alert-info heading text-center" style="font-size:30px;padding:.25rem 1rem">管理員專區</h3>
	<nav class="nav nav-pills nav-fill">
  		<a class="nav-item nav-link" href="#" ng-class="event == 'responseQuestion' ? 'active' : ''" ng-click="chgNavEvent('responseQuestion')">回覆問題</a>
  		<a class="nav-item nav-link" href="#" ng-class="event == 'addArticle' ? 'active' : ''" ng-click="chgNavEvent('addArticle')">新增文章</a>
  		<a class="nav-item nav-link" href="#" ng-class="event == 'updateArticle' ? 'active' : ''" ng-click="chgNavEvent('updateArticle')">修改文章</a>
	</nav>
	
	<div id="accordion" ng-show="event == 'responseQuestion'">
		<div class="card">
   			<div class="card-header card-discuss" id="{{'heading' + questionVO.questionId}}"
   				 ng-repeat-start="questionVO in questionList | orderBy: 'questionId'"
   				 ng-click="clickList(questionVO)">
     				<div class="float-left" style="margin:.9rem .9rem;font-weight:bold"
     					 data-toggle="toggle" data-target="{{'#collapse' + questionVO.questionId}}" aria-expanded="true" aria-controls="{{'collapse' + questionVO.questionId}}">
         				{{questionVO.questionTitle}}<i ng-if="questionVO.privateQA" class="fas fa-exclamation-circle" style="color:red"></i>
       			</div>
       			<div class="float-right" style="font-size:.7rem;margin-top:2rem;color:#666">
       				{{questionVO.questionAuthor}} 於 {{questionVO.questionTime | date : "MM/dd HH:mm"}} 發問
       			</div>
   			</div>

   			<div id="{{'collapse' + questionVO.questionId}}" class="collapse" aria-labelledby="{{'heading' + questionVO.questionId}}" data-parent="#accordion" ng-repeat-end>
     				<div class="card-body">
       					<div style="overflow-y:scroll;height:350px" id="msg-group">
       						<div class="card" ng-repeat="chatVO in chatList | orderBy: 'chatMessageTime'">
       							<div class="card-body">
       								<h6 class="card-subtitle mb-2 text-muted" ng-class="chatVO.chatResponse ? 'text-left' : 'text-right'">{{chatVO.chatAuthor}}</h6>
       								<div class="d-inline card-text" ng-class="chatVO.chatResponse ? 'float-left' : 'float-right'">
       									<div ng-show="!chatVO.chatResponse" class="d-inline" style="font-size:.5rem;margin:.2rem">{{chatVO.chatMessageTime | date : "MM/dd HH:mm"}}</div>
       										{{chatVO.chatMessage}}
       									<div ng-show="chatVO.chatResponse" class="d-inline" style="font-size:.5rem;margin:.2rem">{{chatVO.chatMessageTime | date : "MM/dd HH:mm" }}</div>
       								</div>
       							</div>
       						</div>
       					</div>
       				
						<div class="input-group">
							<textarea ng-model="questionVO.message" class="form-control" rows="1" placeholder="請輸入文字"></textarea>
							<span class="input-group-btn">
        							<button class="btn btn-secondary" type="button" ng-click="sendMessage(questionVO)">送出</button>
      						</span>
						</div>
     				</div>
   			</div>
   			
 			</div>
	</div>
	
	<div ng-show="event != 'responseQuestion'">
		<div class="list-group" ng-if="articleList.length > 0 && event == 'updateArticle'" style="margin:20px;">
  			<a href="#" class="list-group-item list-group-item-action"
  			   ng-repeat="articleModel in articleList | orderBy: '-articleTime'"
  			   ng-click="clickArticleList(articleModel,$event)">{{articleModel.articleTitle}}
  			</a>
		</div>
		<div class="form-group">
    		<label>文章標題</label>
    		<input type="text" class="form-control" placeholder="請輸入文章標題"
    			   ng-model="articleTitle">
  		</div>
  		<div class="form-group">
    		<label>文章內容</label>
    		<textarea name="articleContent" class="form-control" rows="5" placeholder="請輸入文章內容"></textarea>
  		</div>
  		<div style="text-align:center">
  			<button class="btn btn-info" type="button" 
  				    ng-if="event == 'addArticle'" ng-click="submitArticle('addArticle')">新增文章</button>
  			<button class="btn btn-info" type="button" 
  				    ng-if="event == 'updateArticle'" ng-click="submitArticle('updateArticle')">修改文章</button>
  		</div>
	</div>
</main>