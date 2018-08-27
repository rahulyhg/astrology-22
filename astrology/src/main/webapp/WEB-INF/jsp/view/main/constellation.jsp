<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" style="margin-bottom:50px">
	<h3 class="alert alert-primary heading text-center" style="font-size:30px;padding:.25rem 1rem">星座命盤分析</h3>
	<div class="form-group col-md-5 offset-md-4 col-sm-10 offset-sm-1">
		<label>請輸入陽曆(國曆)西元出生時間</label><br>
       	 西元<input type="text" size="4" ng-model="year"/>年
       	 <select ng-model="month" ng-options="m for m in monthList">
		 </select>月
		 <select ng-model="date" ng-options="m for m in dateList">
		 </select>日
		 <select ng-model="hour" ng-options="m for m in hourList">
		 </select>時
		 <select ng-model="min" ng-options="m for m in minList">
		 </select>分
    </div>
    <div class="form-group col-md-5 offset-md-4 col-sm-10 offset-sm-1">
		<label>請設定出生地點</label>
		<a href="javascript:void(0)" ng-click="chgInputSite()" style="margin-left:10px;font-size:8px">{{!inputSite ? '切換輸入模式' : '切換選擇模式'}}</a>
		<select ng-show="!inputSite"
				ng-model="city" ng-options="m.lnglat as m.city for m in cityList" ng-init="city = cityList[1].lnglat"
        		class="form-control">
		</select>
		
		<input ng-show="inputSite" 
        	   ng-model="addr" type="text" class="form-control" placeholder="請輸入出生地點"  />
    	<label ng-show="inputSite">請選擇時區</label>
        <select ng-show="inputSite"
        		ng-model="timezone" ng-options="m.timezone as m.timename for m in timezoneList" ng-init="timezone = timezoneList[3].timezone"
        		class="form-control">
		</select>
    </div>
    <div class="text-center">
		<button type="button" class="btn btn-outline-primary" ng-click="submit()">送出</button>
	</div>
	
	<section ng-show="result" style="margin-bottom:20px">
		<h4 id="resultAnchor" class="alert alert-success" role="alert">星座命盤查詢結果</h4>
		<div class="row">
			<section class="col-md-6 col-sm-12">
				<div id="chart"></div>
			</section>
			<table class="table col-md-6 col-sm-12">
  				<thead>
    				<tr>
      					<th style="width:35%">行星</th>
      					<th>星座</th>
    				</tr>
  				</thead>
  				<tbody>
    				<tr ng-repeat="vo in dataList | orderBy : 'sortNo'"
    					ng-class="$index % 2 == 0 ? 'table-warning' : 'table-info'"
    					ng-mousemove="hover(true,$event)"
    					ng-mouseleave="hover(false,$event)">
      					<td ng-bind="vo.planet"></td>
      					<td ng-bind="vo.constellation"></td>
    				</tr>
  				</tbody>
			</table>
		</div>
	</section>
</main>