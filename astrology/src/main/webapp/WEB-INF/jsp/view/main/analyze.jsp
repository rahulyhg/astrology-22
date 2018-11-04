<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" ng-controller="controller as ctrl" id="taiwanMapContainer">
<h3 class="alert alert-primary heading text-center" style="font-size: 2rem; padding: .25rem 1rem">十二星座當月數據統計</h3>
	<div class="col-lg-3 d-lg-inline-block d-none">
		<svg ng-if="isBigResolution" id="map" viewBox="40 -350 750 1600" style="width:100%">
			<g id="pathCanvas"></g>
		</svg>
		<svg ng-if="!isBigResolution" id="map" viewBox="150 -300 650 1900" style="width:100%">
			<g id="pathCanvas"></g>
		</svg>
	</div>
	<div class="col-lg-8 d-lg-inline-block col-12">
		<div class="d-block d-lg-none" style="padding-top:5px">
			<select class="form-control ng-pristine ng-untouched ng-valid" style="width:250px;margin:0 auto" ng-init="region = regionArr[2]"
					ng-model="region" ng-change="changeRegion()" ng-options="vo for vo in regionArr">
			</select>
			<div class="col-12" style="font-size:14px;color:blue;margin-bottom:10px">
				<img src="../images/blub.png" style="vertical-align:bottom">手機版請橫躺擺向，以獲得最佳圖表視野。<br>
				<img src="../images/blub.png" style="vertical-align:bottom">電腦版另有小彩蛋。<br>
				<img src="../images/blub.png" style="vertical-align:bottom">可點擊該星座長條圖區塊，以得知各性別查詢次數。
			</div>
		</div>
		<div style="width:100%">
			<div id="mixChart" style="height: 600px;"></div>
		</div>
	</div>
</main>