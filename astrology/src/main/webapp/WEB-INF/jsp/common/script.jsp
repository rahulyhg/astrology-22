<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<script src="//code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.6.5/sweetalert2.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-filter/0.5.17/angular-filter.min.js"></script>
	<script src="js/easing.js"></script>
	<script src="js/easy-responsive-tabs.js"></script>
	<script src="js/JiSlider.js"></script>
	<script src="js/jquery.picEyes.js"></script>
	<script src="js/move-top.js"></script>
	<script src="js/owl.carousel.js"></script>
	<script src="js/SmoothScroll.min.js"></script>
	<script>
		var app = angular.module("myApp", ['angular.filter']);
		app.directive('validNumber', function() {
		    return {
		        require: '?ngModel',
		        link: function(scope, element, attrs, ngModelCtrl) {
		          if (!ngModelCtrl) return; 

		          ngModelCtrl.$parsers.push(function(val) {
		            if (angular.isUndefined(val))
		                val = '';
		            
		            var clean = val.replace(/[^-0-9\.]/g, '');
		            var negativeCheck = clean.split('-');
		            var decimalCheck = clean.split('.');
		            if(!angular.isUndefined(negativeCheck[1])) {
		                negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
		                clean =negativeCheck[0] + '-' + negativeCheck[1];
		                if(negativeCheck[0].length > 0) {
		                	clean =negativeCheck[0];
		                }
		                
		            }
		              
		            if(!angular.isUndefined(decimalCheck[1])) {
		                decimalCheck[1] = decimalCheck[1].slice(0,2);
		                clean =decimalCheck[0] + '.' + decimalCheck[1];
		            }

		            if (val !== clean) {
		              ngModelCtrl.$setViewValue(clean);
		              ngModelCtrl.$render();
		            }
		            return clean;
		          });

		          element.bind('keypress', function(event) {
		            if(event.keyCode === 32) {
		              event.preventDefault();
		            }
		          });
		        }
		      };
		  });
		app.directive('email', function() {
			var INTEGER_REGEXP = new RegExp('^\\w+((-\\w+)|(\\.\\w+))*\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z]+$');
			return {
		        require: 'ngModel',
		        link: function (scope, elm, attrs, ctrl) {
		        	elm.on('blur', function() {
		        		if(!!ctrl.$viewValue){
		        			if (INTEGER_REGEXP.test(ctrl.$viewValue)) {
		        				return ctrl.$viewValue;
		        			} else {
		        				alert('Email格式錯誤!');
		        				ctrl.$setViewValue('');
		        				ctrl.$render();
		        				return '';
		        			}
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
		});
	</script>
	<script>
		
	</script>