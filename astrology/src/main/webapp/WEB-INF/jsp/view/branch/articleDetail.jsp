<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="modal fade" id="articleDetailModal" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<div class="modal-title">
					<div class="blog-post-title">{{articleDetailModel.articleTitle}}</div>
					<div class="blog-post-meta">{{articleDetailModel.articleTime | date : "y/MM/dd"}}&nbsp;&nbsp;by {{articleDetailModel.articleAuthor}}</div>
				</div>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
        		</button>
      		</div>
      		<div class="modal-body">
      			<div class="blog-post" ng-bind-html="articleDetailModel.articleContent">
				</div>
      		</div>
      		<div class="modal-footer">
        		<button type="button" class="btn btn-secondary" data-dismiss="modal">離開</button>
      		</div>
   		</div>
  	</div>
</div>