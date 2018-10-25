<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<section class="footer-top pt-5" style="cursor:default">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<input type="text" placeholder="請輸入可以聯絡的方式" 
					   ng-model="contact_reserve">
				<input type="submit" value="我要預約諮詢"  data-toggle="false" data-target="#feedbackModal"
					   ng-click="feedback('reserve')">
			</div>
			<div class="col-lg-6">
				<input type="text" placeholder="請輸入可以聯絡的方式" 
					   ng-model="contact_system">
				<input type="submit" value="系統問題反應" data-toggle="false" data-target="#feedbackModal" id="footer_submit"
					   ng-click="feedback('system')">
			</div>
		</div>
	</div>
</section>
<jsp:include page="../view/branch/feedback.jsp" flush="true"/>

<section class="agile-footer" style="cursor:default">
	<div class="container">
		<div class="row py-5">
			<div class="col-lg-2 col-sm-3 mb-sm-0 mb-4 px-sm-0 px-4 agile-footer1">	
				<h5 class="mb-3">網站連結</h5>
				<ul class="footer-bottom-list">
					<li><a href="/constellation">星座命盤</a></li>
					<li><a href="/article">時上專欄</a></li>
					<li><a href="/contact">聯絡我們</a></li>
				</ul>
			</div>
			<div class="col-lg-5 col-sm-6 mb-sm-0 mb-4 px-sm-0 px-4 row agile-footer1">
				<div class="col-lg-10 col-sm-10  mb-sm-0 mb-4">
					<h5 class="mb-3">聯絡方式</h5>
					<ul class="footer-bottom-list">
						<li> <span class="fab fa-line"></span> Line：
							<span style="padding-left:initial;color:#00FFFF;cursor:text">@cze5294u</span><br>
							<div class="line-it-button" data-lang="zh_Hant" data-type="friend" data-lineid="@cze5294u" style="display: none;"></div>
						</li>
						<li> <span class="fab fa-line"></span> AI占星機器人：
							<span style="padding-left:initial;color:#00FFFF;cursor:text">@eau2284w</span><br>
							<div class="line-it-button" data-lang="zh_Hant" data-type="friend" data-lineid="@eau2284w" style="display: none;"></div>
						</li>
						<li> <span class="fab fa-weixin"></span> WeChat：
							<span style="padding-left:initial;color:#00FFFF;cursor:text">ninicynthia</span> 
						</li>
					</ul>
				</div>
			</div>
			<div class="col-lg-5 col-sm-3 mb-sm-0 mb-4 px-sm-0 px-4 agile-footer1">	
				<h5 class="mb-3">社群分享</h5>
				<ul class="footer-bottom-list">
					<li><div class="line-it-button" data-lang="zh_Hant" data-type="like" data-url="{{lineUrl}}" data-share="true" style="display: none;"></div></li>
					<li><img src="../images/Linesocial.png" ng-click="lineShare('https://social-plugins.line.me/lineit/share?url=')" style="width:6rem"></li>
					<li><div class="fb-like" data-href="{{lineUrl}}" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div></li>
					<li>
						<iframe src="https://platform.twitter.com/widgets/tweet_button.html?size=l&url=https://astrology-213903.appspot.com/&related=twitterapi%2Ctwitter&text=李探長塔羅占星事務所&hashtags=astrology%2C占星"
 									scrolling="no" frameborder="0" allowtransparency="true" title="Twitter Tweet Button">
						</iframe>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="copyright py-4 text-center">
	<p>
		Astrology © 2018 Copyright. All Rights Reserved
	</p>
</section>