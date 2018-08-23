<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.5/sweetalert2.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js"></script>
	<script src="js/easing.js"></script>
	<script src="js/easy-responsive-tabs.js"></script>
	<script src="js/JiSlider.js"></script>
	<script src="js/jquery.picEyes.js"></script>
	<script src="js/move-top.js"></script>
	<script src="js/owl.carousel.js"></script>
	<script src="js/SmoothScroll.min.js"></script>
	<script>
		var app = angular.module("myApp", []);
		app.directive('blur', function () {
		    return {
		        require: '?ngModel',
		        link: function (scope, elem, attrs, ctrl) {
		            if (!ctrl) return;
		           
		            elem.on('blur', function() {
		            	var val = elem[0].value;
		            	if (!!val && val < 1) {
		            		swal('錯誤','輸入數字不可小於1','error');
		            		ctrl.$setViewValue('');
			                ctrl.$render();
			                return '';
		            	}
		            });
		        }
		    };
		});
		app.service('anchorSmoothScroll', function(){
		    
		    this.scrollTo = function(eID) {

		        // This scrolling function 
		        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
		        
		        var startY = currentYPosition();
		        var stopY = elmYPosition(eID);
		        var distance = stopY > startY ? stopY - startY : startY - stopY;
		        if (distance < 100) {
		            scrollTo(0, stopY); return;
		        }
		        var speed = Math.round(distance / 100);
		        if (speed >= 20) speed = 20;
		        var step = Math.round(distance / 25);
		        var leapY = stopY > startY ? startY + step : startY - step;
		        var timer = 0;
		        if (stopY > startY) {
		            for ( var i=startY; i<stopY; i+=step ) {
		                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
		            } return;
		        }
		        for ( var i=startY; i>stopY; i-=step ) {
		            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		        }
		        
		        function currentYPosition() {
		            // Firefox, Chrome, Opera, Safari
		            if (self.pageYOffset) return self.pageYOffset;
		            // Internet Explorer 6 - standards mode
		            if (document.documentElement && document.documentElement.scrollTop)
		                return document.documentElement.scrollTop;
		            // Internet Explorer 6, 7 and 8
		            if (document.body.scrollTop) return document.body.scrollTop;
		            return 0;
		        }
		        
		        function elmYPosition(eID) {
		            var elm = document.getElementById(eID);
		            var y = elm.offsetTop;
		            var node = elm;
		            while (node.offsetParent && node.offsetParent != document.body) {
		                node = node.offsetParent;
		                y += node.offsetTop;
		            } return y;
		        }

		    };
		    
		});
	</script>
	<script>
		$(document).ready(function () {
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
			});
			
			$().UItoTop({ easingType: 'easeOutQuart' });
			
			$(".navbar-nav li").each(function() {
				$(this).removeClass('active');
				var id = $(this)[0].id;
				if (location.pathname.replace('/astrology/', '') == id) {
					$(this).addClass('active');
				} else if (!location.pathname.replace('/astrology/', '')) {
					$("#home").addClass('active');
				}
			});
			
			$("#googlemap").click(function(){		
				window.open("http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=" + encodeURIComponent("台北市信義區松德路8號1樓"))
			});
		});
	</script>
	<script>
		
	</script>