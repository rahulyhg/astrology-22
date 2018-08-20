<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<main class="container" style="margin-bottom:50px">
	<div class="alert alert-primary text-center" role="alert">星座命盤分析</div>
	<div class="form-group col-md-4 offset-md-4 col-sm-10 offset-sm-1">
		<label>請選擇陽曆(國曆)出生時間</label>
        <input type="text" id="timepicker" class="form-control" placeholder="請選擇陽曆(國曆)出生時間" />
    </div>
    <div class="text-center">
		<button type="button" class="btn btn-outline-primary" ng-click="submit()">送出</button>
	</div>
	
	<section ng-if="result">
		<h4>星座命盤查詢結果</h4>
		<div class="row">
			<img class="col-md-5 col-sm-12" src="images/test.png">
			<table class="table table-hover col-md-7 col-sm-12">
  				<thead>
    			<tr style="background-color: palegreen">
      				<th>行星</th>
      				<th>星座</th>
      				<th>宮位</th>
    			</tr>
  				</thead>
  				<tbody>
    			<tr>
      				<td>太陽</td>
      				<td>處女座</td>
      				<td>不知道</td>
    			</tr>
  				</tbody>
			</table>
		</div>
	</section>
</main>