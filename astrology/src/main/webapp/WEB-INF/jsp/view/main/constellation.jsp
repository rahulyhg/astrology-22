<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" style="margin-bottom:50px">
	<h3 class="alert alert-primary heading text-center" style="font-size:30px;padding:.25rem 1rem">星座命盤分析</h3>
	<div class="form-group col-md-4 offset-md-4 col-sm-10 offset-sm-1">
		<label>請選擇陽曆(國曆)出生時間</label>
        <input type="text" id="timepicker" class="form-control" placeholder="請選擇陽曆(國曆)出生時間" />
    </div>
    <div class="form-group col-md-4 offset-md-4 col-sm-10 offset-sm-1">
		<label>請選擇sidereal mode</label>
        <select ng-model="sidereal" ng-options="m for m in siderealList" ng-init="sidereal = siderealList[0]"
        		class="form-control">
		</select>
    </div>
    <div class="form-group col-md-4 offset-md-4 col-sm-10 offset-sm-1">
		<label>請設定出生地點</label>
		<a href="javascript:void(0)" ng-click="chgInputSite()" style="margin-left:10px;font-size:8px">{{!inputSite ? '切換輸入模式' : '切換選擇模式'}}</a>
		<select ng-show="!inputSite"
				ng-model="city" ng-options="m.latlng as m.city for m in cityList" ng-init="city = cityList[1].latlng"
        		class="form-control">
		</select>
        <input ng-show="inputSite" 
        	   ng-model="addr" type="text" class="form-control" placeholder="請輸入出生地點"  />
    </div>
    <div class="text-center">
		<button type="button" class="btn btn-outline-primary" ng-click="submit()">送出</button>
	</div>
	
	<section ng-show="result" style="margin-bottom:20px">
		<h4 id="resultAnchor" class="alert alert-success" role="alert">星座命盤查詢結果</h4>
		<div class="row">
			<section class="col-md-6 col-sm-12">
				<ul style="background-color:oldlace">
    				<li ng-repeat="vo in data.cusps">
        				<span>{{vo}}</span>
    				</li>
				</ul>
				<div id="chart"></div>
			</section>
			<table class="table table-hover col-md-6 col-sm-12" style="background-color:oldlace">
  				<thead>
    				<tr>
      					<th>行星</th>
      					<th>星座</th>
      					<th>宮位</th>
    				</tr>
  				</thead>
  				<tbody>
    				<tr ng-repeat="(key, value) in data.planets">
      					<td>{{key}}</td>
      					<td><span style="color:red">{{value[0]}}</span>~~~~~~<span style="color:green">{{value[1]}}</span></td>
      					<td></td>
    				</tr>
  				</tbody>
			</table>
		</div>
	</section>
</main>