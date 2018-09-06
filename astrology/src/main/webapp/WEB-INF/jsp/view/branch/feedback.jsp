<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" style="margin-top:50px" ng-controller="feedbackController as ctrl">

<div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">{{modal.feedbackType}}</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
        		</button>
      		</div>
      		<div class="modal-body">
      			<div class="form-group">
    				<label>姓名</label>
    				<input type="text" class="form-control" ng-model="modal.name" placeholder="請輸入姓名">
  				</div>
  				<div class="form-group">
    				<label>電話</label>
    				<input type="text" class="form-control" ng-model="modal.phone" placeholder="請輸入電話">
  				</div>
  				<div class="form-group">
    				<label>預約日期</label>
    				<input type="text" class="form-control" ng-model="modal.contactTime" placeholder="請輸入姓名">
  				</div>
  				<div class="form-group">
    				<label>方便聯絡之時間</label>
    				<input type="text" class="form-control" ng-model="modal.contactTime" placeholder="請輸入姓名">
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
<jsp:include page="../branch/feedback-script.jsp" flush="true"/>