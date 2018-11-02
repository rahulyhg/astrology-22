<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" ng-controller="controller as ctrl">
	<h3 class="alert alert-primary heading text-center" style="font-size: 2rem; padding: .25rem 1rem">星座介紹</h3>
	<div class="container-fluid">
		<div class="agile_gallery_grids row">
			<div class="col-xl-4 col-lg-6 d-lg-block d-none">
				<h3>當月星座運勢</h3>
				<br><br><br><br><br>
				<p ng-if="isBigResolution" ng-bind-html="content"></p>
			</div>
			<ul class="demo col-xl-8 col-lg-6 col-12">
				<li ng-repeat="vo in constellationList">
					<div class="gallery-grid1">
						<img src="{{'images/constellation/' + vo.constellation + '.jpg'}}" id="{{vo.constellation}}" ng-mouseover="react(vo.constellation)" ng-click="react(vo.constellation)"/>
						<div class="p-mask">
							<h3>{{vo.chName}}</h3>
							<p>{{vo.timeInterval}}</p>
							<p ng-if="!isBigResolution" ng-bind-html="content"></p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</main>