<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" style="margin-bottom:50px">
	<h3 class="alert alert-primary heading text-center" style="font-size:30px;padding:.25rem 1rem">星座命盤分析</h3>
	<div class="form-group col-lg-5 offset-lg-4 col-md-10 offset-md-1">
		<label><span class="badge badge-pill badge-primary">第一步：</span>請輸入陽曆(國曆)西元出生時間</label>
		<div class="d-none d-sm-block">
		 	西元&nbsp;&nbsp;<input type="text" size="4" ng-model="year"/>年&nbsp;
      	 	<select ng-model="month" ng-options="m for m in monthList">
	 		</select>月&nbsp;
	 		<select ng-model="date" ng-options="m for m in dateList">
	 		</select>日&nbsp;
	 		<select ng-model="hour" ng-options="m for m in hourList">
	 		</select>時&nbsp;
	 		<select ng-model="min" ng-options="m for m in minList">
	 		</select>分
		</div>
		<table class="d-block d-sm-none">
			<tr>
				<td style="width:55%">
					西元&nbsp;&nbsp;<input type="text" size="4" ng-model="year"/>年&nbsp;
				</td>
				<td>
					<select ng-model="month" ng-options="m for m in monthList">
 					</select>月&nbsp;
 					<select ng-model="date" ng-options="m for m in dateList">
 					</select>日&nbsp;
				</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<select ng-model="hour" ng-options="m for m in hourList">
 					</select>時&nbsp;
 					<select ng-model="min" ng-options="m for m in minList">
 					</select>分
				</td>
			</tr>
		</table>
    </div>
    <div class="form-group col-lg-5 offset-lg-4 col-md-10 offset-md-1">
		<label><span class="badge badge-pill badge-primary">第二步：</span>請設定出生地點</label>
		<a href="javascript:void(0)" ng-click="chgInputSite()" style="margin-left:10px;font-size:8px">{{!inputSite ? '輸入模式' : '清單模式'}}</a>
		
		<select ng-show="!inputSite"
				ng-model="city" ng-options="m.lnglat as m.city for m in cityList" ng-init="city = cityList[1].lnglat"
        		class="form-control">
		</select>
		<div ng-show="inputSite">
			<input ng-model="addr" type="text" class="form-control" placeholder="請輸入出生地點"  />
    		<label><span class="badge badge-pill badge-primary">第三步：</span>請選擇時區</label>
        	<select ng-model="timezone" ng-options="m.timezone as m.timename for m in timezoneList" ng-init="timezone = timezoneList[3].timezone"
        			class="form-control">
			</select>
			<div class="custom-control custom-checkbox">
    			<input ng-model="savelight" ng-init="savelight = false" type="checkbox" class="custom-control-input" id="customControlInline">
    			<label class="custom-control-label" for="customControlInline">日光節約時間</label>
    			<span class="d-none d-sm-inline" style="font-size:8px;color:blue">台灣地區實施日期為（1945-1979年之間）</span>
    			<span class="d-block d-sm-none" style="font-size:8px;color:blue">台灣地區實施日期為（1945-1979年之間）</span>
  			</div>
		</div>
    </div>
    <div class="text-center">
		<button type="button" class="btn btn-outline-primary" ng-click="submit()">送出</button>
	</div>
	
	<section ng-show="result" style="margin-top:20px;margin-bottom:20px">
		<h4 id="resultAnchor" class="alert alert-success">
			星座命盤查詢結果<a style="font-size:13px;margin-left:10px" href="javascript:location.href = '/constellation'">重新查詢</a>
		</h4>
		<div class="row">
			<section class="col-lg-6 col-md-12">
				<div class="col-lg-10 offset-lg-1 col-md-10 offset-md-2 col-12" style="font-size:14px;color:blue">
					＊移動鼠標至<span style="color:red">星座圖之行星、星座符號</span>，可以顯示該中文標示。
				</div>
				<div class="col-lg-10 offset-lg-1 col-md-10 offset-md-2 col-12" style="font-size:14px;color:blue">
					＊移動鼠標至<span style="color:red">表格之行星細項</span>，可以顯示星座圖該行星對應之位置。
				</div>
				<div id="chart"></div>
			</section>
			<section class="col-lg-6 col-md-12">
				<nav class="nav nav-pills nav-justified" id="planetAnalyze">
  					<a class="nav-item nav-link active" href="javascript:void(0)" ng-click="chgNav($event,'V1')">行星位置</a>
  					<a class="nav-item nav-link" href="javascript:void(0)" ng-click="chgNav($event,'V2')">上升星座</a>
				</nav>
				<table ng-show="showV1" class="table text-center">
  					<thead>
    					<tr>
      						<th style="width:50%">行星</th>
      						<th>星座</th>
    					</tr>
  					</thead>
  					<tbody>
    					<tr ng-repeat="vo in data1List | orderBy : 'sortNo'"
    						ng-class="$index % 2 == 0 ? 'table-danger' : 'table-info'"
    						ng-mousemove="hover(true,$event,vo.planetEname)"
    						ng-mouseleave="hover(false,$event,vo.planetEname)">
      						<td ng-bind="vo.planet"></td>
      						<td ng-bind="vo.constellation"></td>
    					</tr>
  					</tbody>
				</table>
				<table ng-show="!showV1" class="table text-center">
  					<thead>
    					<tr>
      						<th style="width:50%">四大尖軸</th>
      						<th>星座位置</th>
    					</tr>
  					</thead>
  					<tbody>
    					<tr ng-repeat="vo in data2List | orderBy : 'sortNo'"
    						ng-class="$index % 2 == 0 ? 'table-success' : 'table-warning'">
      						<td ng-bind="vo.planet"></td>
      						<td ng-bind="vo.constellation"></td>
    					</tr>
  					</tbody>
				</table>
			</section>
		</div>
	</section>
</main>