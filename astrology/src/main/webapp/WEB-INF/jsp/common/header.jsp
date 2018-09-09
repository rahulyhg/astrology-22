<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<header style="margin-bottom:20px">
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light">
			<a class="navbar-brand col-12 col-lg-5" href="/" >
				<img src="../images/header.jpg" style="width:100%"/>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="d-block d-lg-none">您是第<span style="color:blue;margin:.5rem;font-weight:bold">{{viewer}}</span>位訪客。</div>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mx-auto text-center">
					<li class="nav-item active  mr-lg-3" id="home">
						<a class="nav-link" href="/">首頁
							<span class="sr-only"></span>
						</a>
					</li>
					<li class="nav-item  mr-lg-3" id="constellation">
						<a class="nav-link" href="/constellation">星座命盤</a>
					</li>
					<li class="nav-item  mr-lg-3" id="article">
						<a class="nav-link" href="/article">時上專欄</a>
					</li>
					<li class="nav-item" id="contact">
						<a class="nav-link" href="/contact">聯絡我們</a>
					</li>
				</ul>
				<div class="d-none d-xl-block">您是第<span style="color:blue;margin:.5rem;font-weight:bold">{{viewer}}</span>位訪客。</div>
			</div>
		</nav>
		<div class="d-none d-lg-block d-xl-none text-right">您是第<span style="color:blue;margin:.5rem;font-weight:bold">{{viewer}}</span>位訪客。</div>
	</div>
</header>