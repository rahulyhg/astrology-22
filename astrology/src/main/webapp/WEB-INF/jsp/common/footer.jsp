<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<section class="footer-top pt-5" style="cursor:default">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<input type="email" placeholder="請輸入您的email..." email ng-model="email">
				<input type="submit" value="我要預約諮詢" style="cursor:pointer" ng-click="reserve()">
			</div>
			<div class="col-lg-6 social-icon mt-lg-0 mt-3 footer">
				<div class="icon-social">
					<h3>社群聯絡</h3>
					<a href="#" class="button-footr">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a href="#" class="button-footr">
						<i class="fab fa-line"></i>
					</a>
					<a href="#" class="button-footr">
						<i class="fab fa-instagram"></i>
					</a>
				</div>
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
							<li> <span class="fas fa-envelope"></span> <a href="mailto:nanwork0914@gmail.com"> nanwork0914@gmail.com</a></li>
							<li> <span class="fas fa-phone"></span> 0980129134 </li>
							<li> <span class="fas fa-clock"></span> 營業時間 : 10:00 a.m - 12:00 p.m</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-5 col-sm-3 mb-sm-0 mb-4 px-sm-0 px-4 w3_agile-footer1">	
					<h5 class="mb-3">來訪次數</h5>
					<ul class="w3ls-footer-bottom-list">
						<li>您是第{{viewer}}位訪客。</li>
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