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
        				swal({
  						  type: 'error',
  						  title: '錯誤',
  						  text: 'Email格式錯誤!'
  						});
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
app.service('constellationService', function() {
	
	this.getDegree = function(position) {
		var lon = position % 30;
		var lon2 = lon % 1;
	    var lon1 = lon - lon2;
	    lon2 *= 60;
	    var lon3 = lon2 % 1;
	    lon2 = lon2 - lon3;
	    lon3 *= 60;
	    lon3 = lon3.toString().split(".")[0];
	    
	    if (lon2.toString().length == 1) {
	    	lon2 = " " + lon2;
	    }
	    if (lon3.length == 1) {
	    	lon3 = " " + lon3;
	    }
	    return lon1 + "°" + lon2 + "'" + lon3 + "\"";
	};
    
	this.translateChinese = function(origin) {
		var name = '';
		if (origin == 'Saturn') {
			name = '土星';
		} else if (origin == 'Moon') {
			name = '月亮';
		} else if (origin == 'Uranus') {
			name = '天王星';
		} else if (origin == 'Sun') {
			name = '太陽';
		} else if (origin == 'Pluto') {
			name = '冥王星';
		} else if (origin == 'Mars') {
			name = '火星';
		} else if (origin == 'Neptune') {
			name = '海王星';
		} else if (origin == 'Jupiter') {
			name = '木星';
		} else if (origin == 'Venus') {
			name = '金星';
		} else if (origin == 'Mercury') {
			name = '水星';
		} else if (origin == 'Aries') {
			name = '牧羊座';
		} else if (origin == 'Taurus') {
			name = '金牛座';
		} else if (origin == 'Gemini') {
			name = '雙子座';
		} else if (origin == 'Cancer') {
			name = '巨蟹座';
		} else if (origin == 'Leo') {
			name = '獅子座';
		} else if (origin == 'Virgo') {
			name = '處女座';
		} else if (origin == 'Libra') {
			name = '天秤座';
		} else if (origin == 'Scorpio') {
			name = '天蠍座';
		} else if (origin == 'Sagittarius') {
			name = '射手座';
		} else if (origin == 'Capricorn') {
			name = '摩羯座';
		} else if (origin == 'Aquarius') {
			name = '水瓶座';
		} else if (origin == 'Pisces') {
			name = '雙魚座';
		} else if (origin == 'Asc') {
			name = '上升星座 (Asc)';
		} else if (origin == 'Des') {
			name = '下降星座 (Des)';
		} else if (origin == 'Mc') {
			name = '天頂星座 (Mc)';
		} else if (origin == 'Ic') {
			name = '天底星座 (Ic)';
		} else if (origin == 'NNode') {
			name = '北交點';
		}
		return name;
	};
	
    this.analyzeInterplay = function (planetEname,constellation) {
		var answer = []; //[0][1] for planet , [2][3] for house
		if (planetEname == 'Saturn') {
			
		} else if (planetEname == 'Moon') {
			
		} else if (planetEname == 'Uranus') {
			
		} else if (planetEname == 'Sun') {
			if (constellation == '牧羊') {
				answer[0] = '率真、單純丶勇敢丶有效率';
				answer[1] = '衝動、虎頭蛇尾、自私、沒有耐心';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '金牛') {
				answer[0] = '有耐心、淡定、穩重丶中時';
				answer[1] = '固執、慢動作、物質主義、慵懶';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '雙子') {
				answer[0] = '多才多藝、反應快、風趣、隨機應變';
				answer[1] = '善變、不專心、膚淺、多學不專';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '巨蟹') {
				answer[0] = '溫暖、記憶強、體貼、重視家庭';
				answer[1] = '情緒化、拐彎抹角、防衛心強丶懦弱';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '獅子') {
				answer[0] = '熱情、富有創造力、光明正派、開朗';
				answer[1] = '愛面子、愛炫耀、自大、高傲';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '處女') {
				answer[0] = '勤勞、愛乾淨、善於分析、細心';
				answer[1] = '碎唸王丶挑剔丶龜毛丶小家子氣';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '天秤') {
				answer[0] = '善於交際、優雅丶中庸丶客觀';
				answer[1] = '缺乏主見丶偽善丶猶豫不決、騎牆派';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '天蠍') {
				answer[0] = '有恩報恩丶意志堅定丶洞察力強丶愛恨分明';
				answer[1] = '善妒丶消極負面丶有仇報仇丶偏執狂';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '射手') {
				answer[0] = '慷慨大方丶樂觀丶有遠見丶大智若愚';
				answer[1] = '粗枝大葉丶眼高手低丶狂放不羈丶自我放縱';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '魔羯') {
				answer[0] = '有紀律丶邏輯強丶刻苦耐勞丶有骨氣';
				answer[1] = '壓抑丶嚴肅丶一板一眼、現實主義';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '水瓶') {
				answer[0] = '創新與衆不同丶獨立丶人道主義丶有科學研究精神';
				answer[1] = '叛逆丶想法做法古怪丶冷淡孤僻丶狂妄';
				answer[2] = '';
				answer[3] = '';
			} else if (constellation == '雙魚') {
				answer[0] = '善解人意丶無私大愛丶浪漫有想像力丶同理心強';
				answer[1] = '意志薄弱丶不切實際丶迷糊丶容易鬆懈';
				answer[2] = '';
				answer[3] = '';
			}
		} else if (planetEname == 'Pluto') {
			
		} else if (planetEname == 'Mars') {
			
		} else if (planetEname == 'Neptune') {
			
		} else if (planetEname == 'Jupiter') {
			
		} else if (planetEname == 'Venus') {
			
		} else if (planetEname == 'Mercury') {
			
		}
		
		answer[0] = "優點：" + answer[0];
		answer[1] = "缺點：" + answer[1];
		answer[2] = "優點：" + answer[2];
		answer[3] = "缺點：" + answer[3];
		return answer;
	};
});	