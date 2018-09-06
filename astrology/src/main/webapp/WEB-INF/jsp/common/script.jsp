<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<script src="//code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.5/sweetalert2.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-filter/0.5.17/angular-filter.min.js"></script>
	<script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>
	<script src="js/easing.js"></script>
	<script src="js/easy-responsive-tabs.js"></script>
	<script src="js/JiSlider.js"></script>
	<script src="js/jquery.picEyes.js"></script>
	<script src="js/move-top.js"></script>
	<script src="js/owl.carousel.js"></script>
	<script src="js/SmoothScroll.min.js"></script>
	<script src="js/angularConfig.js"></script>
	<div id="fb-root"></div>
	<script>
		(function(d, s, id) {
  			var js, fjs = d.getElementsByTagName(s)[0];
  			if (d.getElementById(id)) return;
  			js = d.createElement(s); js.id = id;
  			js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.1';
  			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>

	<script type="text/javascript">
		app.controller('mainController', function ($scope, $http) {
			$scope.lineUrl = location.href;
			
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
			});
			
			$().UItoTop({ easingType: 'easeOutQuart' });
			
			if (!location.pathname.replace('/','')) {
				$("#home").addClass('active');
			} else {
				$(".navbar-nav li").each(function() {
					$(this).removeClass('active');
					var id = $(this)[0].id;
					if (location.pathname.replace('/','') == id) {
						$(this).addClass('active');
					}
				});
			}
			
			$scope.viewer = 1;
			$http.get("/getWebsiteViwerCount")
		    .then(function(response) {
		    	$scope.viewer = response.data;
		    }, function(response) {
		    	swal({
					  type: 'error',
					  title: '錯誤',
					  text: '系統發生錯誤!'
					});
		    });
			
			$scope.feedback = function(type) {
				if (type == 'reserve' ) {
					if (!$scope.email_reserve) {
						return swal({
							  type: 'error',
							  title: '錯誤',
							  text: '請輸入您的email!'
							});
					}
				} else {
					if (!$scope.email_system) {
						return swal({
							  type: 'error',
							  title: '錯誤',
							  text: '請輸入您的email!'
							});
					}
				}
			}
			
			
			
			
			
			
			
			
			
		});
	</script>