<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" ng-controller="controller as ctrl">
	<h3 class="alert alert-primary heading text-center" style="font-size: 2rem; padding: .25rem 1rem">星座介紹</h3>
	<div class="container-fluid">
		<div class="agile_gallery_grids row" ng-repeat="vo in constellationList">
			<div ng-if="isBigResolution && $odd" ng-class="vo.borderClass" class="card" style="width:{{vo.styleWidth}}">
  				<div ng-class="vo.textClass" class="card-body">
    				<h5 class="card-title">{{vo.chName}}  {{vo.timeInterval}}</h5>
    				<p ng-bind-html="vo.content" class="card-text" style="font-size:.8rem"></p>
  				</div>
			</div>
			<div class="card text-white">
				<div class="gallery-grid1">
					<img class="card-img" ng-src="{{vo.src}}" id="{{vo.constellation}}" 
  				     	 ng-mouseover="react(vo.constellation)" ng-click="react(vo.constellation)">
  					<div class="p-mask">
    					<h3 class="card-title">{{vo.chName}}</h3>
    					<p class="card-text">{{vo.timeInterval}}</p>
  					</div>
				</div>
			</div>
			<div ng-if="(isBigResolution && $even) || !isBigResolution" ng-class="vo.borderClass" class="card" style="width:{{vo.styleWidth}}">
  				<div ng-class="vo.textClass" class="card-body">
    				<h5 class="card-title">{{vo.chName}}  {{vo.timeInterval}}</h5>
    				<p ng-bind-html="vo.content" class="card-text" style="font-size:.8rem"></p>
  				</div>
			</div>
		</div>
	</div>
</main>