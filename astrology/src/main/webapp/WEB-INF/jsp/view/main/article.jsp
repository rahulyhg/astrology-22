<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" ng-controller="controller as ctrl">
<h3 class="alert alert-primary heading text-center" style="font-size: 2rem; padding: .25rem 1rem">文章分享</h3>
<div class="row">
	<article class="col-md-9 p-3">
		<div class="blog-post" id={{articleModel.articleId}} ng-repeat="articleModel in articleList | orderBy: '-articleTime'">
			<h2 class="blog-post-title">{{articleModel.articleTitle}}</h2>
			<div class="row">
				<div class="col-6">
					<div class="blog-post-meta">{{articleModel.articleTime | date : "y/MM/dd"}}&nbsp;&nbsp;by 李探長</div>
				</div>
				<div class="col-6">
					<div class="blog-post-meta text-right">瀏覽次數：{{articleModel.articleReviews}}</div>
				</div>
				<div class="col-12 blog-post-outline" ng-bind-html="articleModel.articleContent">
				</div>
				<div class="col-12">
					<a ng-click="watchDetail(articleModel)" data-toggle="false" data-target="#articleDetailModal" href="javascript:void(0)">繼續閱讀...</a>
				</div>
				<div class="col-12" style="margin-top: 10px">
					<div class="fb-like" data-href="{{articleModel.fbLink}}" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
				</div>
			</div>
			<hr>
		</div>
		<div class="fb-comments" data-href="{{lineUrl}}" data-numposts="5" data-width="100%"></div>
	</article>
	<aside class="col-md-3 p-3">
		<div class="alert alert-success text-center" role="alert" style="font-weight:bold;font-size:1.3rem;margin-bottom:auto">文章回顧</div>
		<div class="list-group">
  			<a href="#" class="list-group-item list-group-item-action" style="color:blue"
  			   ng-repeat="articleModel in articleList | orderBy: '-articleTime'"
  			   ng-click="goArticle(articleModel.articleId)">{{articleModel.articleTitle}}
  			</a>
		</div>
		
	</aside>
</div>
<div class="row">
	<jsp:include page="../branch/articleDetail.jsp" flush="true"/>
</div>
</main>