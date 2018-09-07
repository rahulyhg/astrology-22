<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" style="margin-top:50px" ng-controller="discussController as ctrl">
	<h3 class="alert alert-info heading text-center" style="font-size:30px;padding:.25rem 1rem">問答專區</h3>
<!-- 	清單明細區 -->
	<div>
		<button type="button" class="btn btn-outline-primary float-right" data-toggle="modal" data-target="#questionModal" data-backdrop="static">我要發問</button><p style="clear:right;margin-bottom:5px">
		<div id="accordion">
			<div class="card">
    			<div class="card-header card-discuss" id="{{'heading' + questionVO.questionId}}"
    				 ng-repeat-start="questionVO in questionList | orderBy: 'questionId'"
    				 ng-click="clickList(questionVO)">
      				<div class="float-left" style="margin:.9rem .9rem;font-weight:bold"
      					 data-toggle="toggle" data-target="{{'#collapse' + questionVO.questionId}}" aria-expanded="true" aria-controls="{{'collapse' + questionVO.questionId}}">
          				{{questionVO.questionTitle}}
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
    </div>
<!-- 	modal區 --> 
    <div class="modal fade" id="questionModal" tabindex="-1" role="dialog" aria-hidden="true">
  		<div class="modal-dialog" role="document">
    		<div class="modal-content">
      			<div class="modal-header">
        			<h5 class="modal-title">新增問題</h5>
        			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
          				<span aria-hidden="true">&times;</span>
        			</button>
      			</div>
      			<div class="modal-body">
      				<div class="form-group">
    					<label>問題主旨</label>
    					<input type="text" class="form-control" ng-model="modal.questionTitle" placeholder="請輸入問題主旨">
  					</div>
  					<div class="form-group">
    					<label>問題內容</label>
    					<textarea class="form-control" ng-model="modal.questionContent" rows="2" placeholder="請輸入問題內容"></textarea>
  					</div>
  					<div class="form-group">
    					<label>發問人暱稱</label>
    					<input type="text" class="form-control" ng-model="modal.questionAuthor" placeholder="請輸入發問人暱稱">
  					</div>
  					<div class="custom-control custom-checkbox">
    					<input ng-model="modal.privateQA" ng-init="modal.privateQA = false" type="checkbox" class="custom-control-input" id="customControlInlineModal">
    					<label class="custom-control-label" for="customControlInlineModal">不開放問題內容</label>
  					</div>
  					<div class="form-group" ng-if="modal.privateQA">
    					<label>設定隱藏密碼</label>
    					<input type="password" class="form-control" ng-model="modal.privatePwd">
  					</div>
  					<div class="form-group" ng-if="modal.privateQA">
    					<label>再次確認隱藏密碼</label>
    					<input type="password" class="form-control" ng-model="modal.privatePwd1">
  					</div>
      			</div>
      			<div class="modal-footer">
      				<button type="button" class="btn btn-primary" ng-click="addQuestion()">確認送出</button>
      				<button type="button" class="btn btn-danger" ng-click="modal = {}">清空</button>
        			<button type="button" class="btn btn-secondary" data-dismiss="modal">離開</button>
      			</div>
   			 </div>
  		</div>
	</div>
    
</main>
<jsp:include page="../branch/discuss-script.jsp" flush="true"/>