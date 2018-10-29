<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" ng-controller="controller as ctrl">
	<h3 class="alert alert-primary heading text-center" style="font-size:2rem;padding:.25rem 1rem">星座命盤分析</h3>
	<div class="form-group col-lg-5 offset-lg-4 col-md-10 offset-md-1">
		<label><span class="badge badge-pill badge-primary">第一步：</span>請選擇國歷西元出生日期與時間</label>
		<input type="text" class="form-control" id="datepicker" placeholder="請選擇出生日期" />
		<input type="text" class="form-control" id="timepicker" placeholder="請選擇出生時間" />
    </div>
    <div class="form-group col-lg-5 offset-lg-4 col-md-10 offset-md-1">
		<label><span class="badge badge-pill badge-primary">第二步：</span>請設定出生地點</label>
		<a href="javascript:void(0)" ng-click="chgInputSite()" style="margin-left:10px;font-size:0.8rem">
			{{!inputSite ? '輸入模式' : '清單模式'}}<i class="fas fa-exchange-alt" style="margin-left:2px"></i>
		</a>
		<div ng-if="!inputSite" style="font-size:0.8rem"><i class="fas fa-edit"></i>切換至輸入模式可以輸入出生地和選擇時區</div>
		
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
    <div class="form-group col-lg-5 offset-lg-4 col-md-10 offset-md-1">
		<label><span class="badge badge-pill badge-primary">選填：</span>請選擇性別</label>
		<div class="center-block">
			<div class="custom-control custom-radio custom-control-inline">
  				<input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input"
  				   	   ng-model="gender" value="1">
  				<label class="custom-control-label" for="customRadioInline1">男生</label>
			</div>
			<div class="custom-control custom-radio custom-control-inline">
  				<input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input"
  				      ng-model="gender" value="2">
  				<label class="custom-control-label" for="customRadioInline2">女生</label>
			</div>
			<div class="custom-control custom-radio custom-control-inline">
  				<input type="radio" id="customRadioInline3" name="customRadioInline" class="custom-control-input"
  				      ng-model="gender" value="0">
  				<label class="custom-control-label" for="customRadioInline3">多元</label>
			</div>
		</div>
    </div>
    <div class="text-center">
		<button type="button" class="btn btn-outline-primary" ng-click="submit()">送出</button>
	</div>
	
	<section ng-show="result" style="margin-top:20px;margin-bottom:20px">
		<h3 id="resultAnchor" class="alert alert-success text-center">
			<span style="font-weight:900">星座命盤查詢結果</span>
			<a style="font-size:0.8rem" href="javascript:location.href = '/constellation'">重新查詢<i class="fas fa-redo" style="margin-left:2px"></i></a>
		</h3>
		<div class="row">
			<section class="col-lg-6 col-md-12">
				<div class="col-lg-10 offset-lg-1 col-md-10 offset-md-2 col-12" style="font-size:14px;color:blue">
					<img src="../images/blub.png" style="vertical-align:bottom">移動鼠標至<span style="color:red">星座圖之行星、星座符號</span>，可以顯示該中文標示。
				</div>
				<div class="col-lg-10 offset-lg-1 col-md-10 offset-md-2 col-12" style="font-size:14px;color:blue">
					<img src="../images/blub.png" style="vertical-align:bottom">移動鼠標至<span style="color:red">表格之行星細項</span>，可以顯示星座圖該行星對應位置。
				</div>
				<div id="chart"></div>
			</section>
			<section class="col-lg-6 col-md-12">
				<div class="col-12" style="font-size:14px;color:blue">
					<img src="../images/blub.png" style="vertical-align:bottom"><span style="color:red">太陽丶月亮丶水星丶金星丶火星</span>為個人行星，影響個人最為明顯。
				</div>
				<div class="col-12" style="font-size:14px;color:blue">
					<img src="../images/blub.png" style="vertical-align:bottom"><span style="color:red">木星丶土星丶天王星丶海王星丶冥王星</span>為外行星，對集體世代的普遍影響較為明顯，所以僅列出個人行星供參考。
				</div>
				<nav class="nav nav-pills nav-justified" id="planetAnalyze">
  					<a class="nav-item nav-link active" href="javascript:void(0)" ng-click="chgNav($event,1)">行星位置</a>
  					<a class="nav-item nav-link" href="javascript:void(0)" ng-click="chgNav($event,2)">上升星座</a>
  					<a class="nav-item nav-link" href="javascript:void(0)" ng-click="chgNav($event,3)">星座比例</a>
				</nav>
				<table ng-show="showTab == 1" class="table text-center">
  					<thead>
    					<tr>
      						<th style="width:28%">行星</th>
      						<th style="width:44%">星座</th>
      						<th style="width:28%">宮位</th>
    					</tr>
  					</thead>
  					<tbody>
    					<tr ng-repeat="vo in dataList | orderBy : 'sortNo' | before:11">
      						<td ng-mousemove="hover(true,$event,vo,'planet',$index)"
      							ng-mouseleave="hover(false,$event,vo,'planet',$index)"
      							ng-class="$index % 2 == 0 ? 'table-danger' : 'table-info'" id="{{'planet' + $index}}">
      							<div class="tooltip_table">{{vo.planet}}<div class="tooltiptext"></div></div>
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
    					<tr ng-repeat="vo in dataList | orderBy : 'sortNo' | after:10"
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
	
	<jsp:include page="../branch/discuss.jsp" flush="true"/>
</main>