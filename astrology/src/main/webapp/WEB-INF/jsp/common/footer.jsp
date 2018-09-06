<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<section class="footer-top pt-5" style="cursor:default">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<input type="email" placeholder="請輸入您的email..." email ng-model="email_reserve">
				<input type="submit" value="我要預約諮詢" ng-click="feedback('reserve')">
			</div>
			<div class="col-lg-6">
				<input type="email" placeholder="請輸入您的email..." email ng-model="email_system">
				<input type="submit" value="系統問題反應" id="footer_submit" ng-click="feedback('system')">
			</div>
		</div>
	</div>
</section>
<section class="agile-footer middle w3ls-section" style="cursor:default">
	<div class="container">
		<div class="agileits_w3layouts-footer-bottom">
			<div class="row w3_agile-footer-grids py-5">
				<div class="col-lg-2 col-sm-3 mb-sm-0 mb-4 px-sm-0 px-4 w3_agile-footer1">	
					<h5 class="mb-3">網站連結</h5>
					<ul class="w3ls-footer-bottom-list">
						<li><a href="/constellation">星座命盤</a></li>
						<li><a href="/article">時上專欄</a></li>
						<li><a href="/shop">商城小物</a></li>
						<li><a href="/contact">聯絡我們</a></li>
					</ul>
				</div>
				<div class="col-lg-5 col-sm-6 mb-sm-0 mb-4 px-sm-0 px-4 row w3_agile-footer1">
					<div class="col-lg-10 col-sm-10  mb-sm-0 mb-4 inner-li">
						<h5 class="mb-3">聯絡方式</h5>
						<ul class="w3ls-footer-bottom-list">
							<li> <span class="fab fa-line"></span> Line：
								<span style="padding-left:initial;color:#e2b13c;cursor:text">cynthianini</span> 
								<div class="line-it-button" data-lang="zh_Hant" data-type="friend" data-lineid="@cynthianini" style="display: none;"></div>
							</li>
							<li> <span class="fab fa-line"></span> AI占星機器人：
								<span style="padding-left:initial;color:#e2b13c;cursor:text">@eau2284w</span> 
								<div class="line-it-button" data-lang="zh_Hant" data-type="friend" data-lineid="@eau2284w" style="display: none;"></div>
							</li>
							<li> <span class="fab fa-weixin"></span> WeChat：
								<span style="padding-left:initial;color:#e2b13c;cursor:text">ninicynthia</span> 
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-5 col-sm-3 mb-sm-0 mb-4 px-sm-0 px-4 w3_agile-footer1">	
					<h5 class="mb-3">來訪次數</h5>
					<ul class="w3ls-footer-bottom-list">
						<li>您是第<span style="padding-left:initial;color:#e2b13c;margin:.5rem">{{viewer}}</span>位訪客。</li>
						<li><div class="line-it-button" data-lang="zh_Hant" data-type="like" data-url="{{lineUrl}}" data-share="true" style="display: none;"></div></li>
						<li><div class="fb-like" data-href="{{lineUrl}}" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="copyright py-4">
	<div class="agileits_w3layouts-copyright text-center">
		<p>
			Astrology © 2018 Copyright. All Rights Reserved
		</p>
	</div>
</section>