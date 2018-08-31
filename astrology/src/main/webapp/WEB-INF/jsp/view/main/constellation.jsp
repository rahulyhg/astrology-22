<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" style="margin-bottom:50px" ng-controller="controller as ctrl">
	<h3 class="alert alert-primary heading text-center" style="font-size:30px;padding:.25rem 1rem">星座命盤分析</h3>
	<div class="form-group col-lg-5 offset-lg-4 col-md-10 offset-md-1">
		<label><span class="badge badge-pill badge-primary">第一步：</span>請輸入陽曆(國曆)西元出生時間</label>
		<div class="d-none d-sm-block">
		 	西元&nbsp;&nbsp;<input type="text" size="4" ng-model="year" valid-number/>年&nbsp;
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
				<td style="width:50%">
					西元&nbsp;&nbsp;<input type="text" size="4" ng-model="year" valid-number/>年&nbsp;
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
		<a href="javascript:void(0)" ng-click="chgInputSite()" style="margin-left:10px;font-size:0.8rem">{{!inputSite ? '輸入模式' : '清單模式'}}<i class="fas fa-exchange-alt" style="margin-left:2px"></i></a>
		
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
    			<span class="d-none d-sm-inline" style="font-size:0.8rem;color:blue">台灣地區實施日期為（1945-1979年之間）</span>
    			<span class="d-block d-sm-none" style="font-size:0.8rem;color:blue">台灣地區實施日期為（1945-1979年之間）</span>
  			</div>
		</div>
    </div>
    <div class="text-center">
		<button type="button" class="btn btn-outline-primary" ng-click="submit()">送出</button>
	</div>
	
	<section ng-show="result" style="margin-top:20px;margin-bottom:20px">
		<h4 id="resultAnchor" class="alert alert-success">
			星座命盤查詢結果<a style="font-size:0.8rem;margin-left:10px" href="javascript:location.href = '/constellation'">重新查詢<i class="fas fa-redo" style="margin-left:2px"></i></a>
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
  					<a class="nav-item nav-link active" href="javascript:void(0)" ng-click="chgNav($event,1)">行星位置</a>
  					<a class="nav-item nav-link" href="javascript:void(0)" ng-click="chgNav($event,2)">上升星座</a>
  					<a class="nav-item nav-link" href="javascript:void(0)" ng-click="chgNav($event,3)">星座比例</a>
				</nav>
				<table ng-show="showTab == 1" class="table text-center">
  					<thead>
    					<tr>
      						<th style="width:30%">行星</th>
      						<th style="width:35%">星座</th>
      						<th style="width:35%">宮位</th>
    					</tr>
  					</thead>
  					<tbody>
    					<tr ng-repeat="vo in dataList | orderBy : 'sortNo' | before:12">
      						<td ng-mousemove="hover(true,$event,vo,'planet',$index)"
      							ng-mouseleave="hover(false,$event,vo,'planet',$index)"
      							ng-class="$index % 2 == 0 ? 'table-danger' : 'table-info'" id="{{'planet' + $index}}">
      							<div class="tooltip_table">{{vo.planet}}<div class="tooltiptext">{{vo.planet}}</div></div>
      						</td>
      						<td ng-mousemove="hover(true,$event,vo,'planet',$index)"
      							ng-mouseleave="hover(false,$event,vo,'planet',$index)"
      							ng-class="$index % 2 == 0 ? 'table-danger' : 'table-info'">
      							<div class="tooltip_table">{{vo.constellation}}<div class="tooltiptext"></div></div>
      						</td>
      						<td ng-mousemove="hover(true,$event,vo,'house',$index)"
      							ng-mouseleave="hover(false,$event,vo,'house',$index)"
      							ng-class="'table-warning'" id="{{'house' + $index}}">
      							<div class="tooltip_table">{{'第' + vo.house + '宮'}}<div class="tooltiptext"></div></div>
      						</td>
    					</tr>
  					</tbody>
				</table>
				<table ng-show="showTab == 2" class="table text-center">
  					<thead>
    					<tr>
      						<th style="width:50%">四大尖軸</th>
      						<th>星座位置</th>
    					</tr>
  					</thead>
  					<tbody>
    					<tr ng-repeat="vo in dataList | orderBy : 'sortNo' | after:11"
    						ng-class="$index % 2 == 0 ? 'table-success' : 'table-warning'">
      						<td ng-bind="vo.planet"></td>
      						<td ng-bind="vo.constellation"></td>
    					</tr>
  					</tbody>
				</table>
				<table ng-show="showTab == 3" class="table text-center">
  					<thead>
    					<tr>
      						<th style="width:50%">星座四象</th>
      						<th>星座比例</th>
    					</tr>
  					</thead>
  					<tbody>
    					<tr ng-repeat="vo in data1List | orderBy : 'sortNo'"
    						ng-class="vo.style">
      						<td ng-bind="vo.planet"></td>
      						<td>{{vo.rate + '%'}}</td>
    					</tr>
  					</tbody>
				</table>
			</section>
		</div>
	</section>
</main>