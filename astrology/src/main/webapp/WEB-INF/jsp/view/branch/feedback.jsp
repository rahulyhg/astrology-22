<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main ng-controller="feedbackController as ctrl">

<div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">{{feedbackType == 'reserve' ? '我要預約':'問題反應'}}</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
        		</button>
      		</div>
      		<div class="modal-body" ng-if="feedbackType == 'reserve'">
      			<div class="form-group">
    				<label>您留下的聯絡方式</label>
    				<input type="text" class="form-control" ng-model="feedbackContact" ng-readonly="true">
  				</div>
      			<div class="form-group">
    				<label>暱稱</label>
    				<input type="text" class="form-control" ng-model="modal.name" placeholder="請輸入姓名">
  				</div>
  				<div class="form-group">
    				<label>預約日期</label>
    				<input type="text" class="form-control" ng-model="modal.contactDate" placeholder="請輸入日期">
  				</div>
  				<div class="form-group">
    				<label>方便聯絡之時段</label><br>
    				<div class="custom-control custom-radio custom-control-inline">
  						<input type="radio" id="customRadioInline1" class="custom-control-input"
  							   ng-model="modal.contactTime" value="上午">
  						<label class="custom-control-label" for="customRadioInline1">上午</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
  						<input type="radio" id="customRadioInline2" class="custom-control-input"
  							   ng-model="modal.contactTime" value="下午">
  						<label class="custom-control-label" for="customRadioInline2">下午</label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
  						<input type="radio" id="customRadioInline3" class="custom-control-input"
  							   ng-model="modal.contactTime" value="晚上">
  						<label class="custom-control-label" for="customRadioInline3">晚上</label>
					</div>
  				</div>
      		</div>
      		<div class="modal-body" ng-if="feedbackType == 'system'">
      			<div class="form-group">
    				<label>您留下的聯絡方式</label>
    				<input type="text" class="form-control" ng-model="feedbackContact" ng-readonly="true">
  				</div>
      			<div class="form-group">
    				<label>問題內容</label>
    				<textarea class="form-control" ng-model="modal.suggestion" rows="3" placeholder="請輸入問題內容"></textarea>
  				</div>
      		</div>
      		<div class="modal-footer">
      			<button type="button" class="btn btn-primary" ng-click="submit()">確認送出</button>
      			<button type="button" class="btn btn-danger" ng-click="modal = {}">清空</button>
        		<button type="button" class="btn btn-secondary" data-dismiss="modal">離開</button>
      		</div>
   		</div>
  	</div>
</div>
    
</main>
<jsp:include page="../branch/feedback-script.jsp" flush="true"/>