<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" ng-controller="controller as ctrl">
<h3 class="alert alert-primary heading text-center" style="font-size: 2rem; padding: .25rem 1rem">文章分享</h3>
<button type="button" class="btn btn-outline-dark" ng-click="back()">回文章列表</button>
<div class="row">
	<article class="col-md-9 p-3">
		<div class="blog-post">
			<h2 class="blog-post-title">{{articleModel.articleTitle}}</h2>
			<div class="row">
				<div class="col-md-7 col-12">
					<div class="blog-post-meta">{{articleModel.articleTime | date : "y/MM/dd"}}&nbsp;&nbsp;by {{articleModel.articleAuthor}}</div>
				</div>
				<div class="col-md-5 col-12">
					<div class="blog-post-meta text-right">瀏覽次數：{{articleModel.articleReviews}}</div>
				</div>
				<div class="col-12 mt-3" ng-bind-html="articleModel.articleContent">
				</div>
				<div class="col-12" style="margin-top: 10px">
					<div class="fb-like" data-href="{{linkUrl}}" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
				</div>
				<div class="col-12" style="margin-top: 10px">
					<div class="fb-comments" data-href="{{linkUrl}}" data-numposts="5" data-width="100%"></div>
				</div>
			</div>
			<hr>
		</div>
	</article>
	<aside class="col-md-3 p-3">
		<div class="alert alert-success text-center" role="alert" style="font-weight:bold;font-size:1.3rem;margin-bottom:auto">文章回顧</div>
		<div class="list-group">
  			<a href="javascript:void(0)" class="list-group-item list-group-item-action" style="color:blue"
  			   ng-repeat="articleVO in articleList | orderBy: '-articleTime'"
  			   ng-click="goArticle(articleVO.articleId)">{{articleVO.articleTitle}}
  			</a>
		</div>
	</aside>
</div>

</main>