var app = angular.module("myApp", ['angular.filter', 'ngSanitize']);
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
	
    this.analyzeInterplay = function (planetEname,constellation,house) {
		var answer = []; //[0][1] for planet , [2][3] for house
		if (planetEname == 'Saturn') {
			
		} else if (planetEname == 'Moon') {
			
		} else if (planetEname == 'Uranus') {
			
		} else if (planetEname == 'Sun') {
			if (constellation == '牧羊') {
				answer[0] = '率真、單純丶勇敢丶有效率';
				answer[1] = '衝動、虎頭蛇尾、自私、沒有耐心';
			} else if (constellation == '金牛') {
				answer[0] = '有耐心、淡定、穩重丶中時';
				answer[1] = '固執、慢動作、物質主義、慵懶';
			} else if (constellation == '雙子') {
				answer[0] = '多才多藝、反應快、風趣、隨機應變';
				answer[1] = '善變、不專心、膚淺、多學不專';
			} else if (constellation == '巨蟹') {
				answer[0] = '溫暖、記憶強、體貼、重視家庭';
				answer[1] = '情緒化、拐彎抹角、防衛心強丶懦弱';
			} else if (constellation == '獅子') {
				answer[0] = '熱情、富有創造力、光明正派、開朗';
				answer[1] = '愛面子、愛炫耀、自大、高傲';
			} else if (constellation == '處女') {
				answer[0] = '勤勞、愛乾淨、善於分析、細心';
				answer[1] = '碎唸王丶挑剔丶龜毛丶小家子氣';
			} else if (constellation == '天秤') {
				answer[0] = '善於交際、優雅丶中庸丶客觀';
				answer[1] = '缺乏主見丶偽善丶猶豫不決、騎牆派';
			} else if (constellation == '天蠍') {
				answer[0] = '有恩報恩丶意志堅定丶洞察力強丶愛恨分明';
				answer[1] = '善妒丶消極負面丶有仇報仇丶偏執狂';
			} else if (constellation == '射手') {
				answer[0] = '慷慨大方丶樂觀丶有遠見丶大智若愚';
				answer[1] = '粗枝大葉丶眼高手低丶狂放不羈丶自我放縱';
			} else if (constellation == '魔羯') {
				answer[0] = '有紀律丶邏輯強丶刻苦耐勞丶有骨氣';
				answer[1] = '壓抑丶嚴肅丶一板一眼、現實主義';
			} else if (constellation == '水瓶') {
				answer[0] = '創新與衆不同丶獨立丶人道主義丶有科學研究精神';
				answer[1] = '叛逆丶想法做法古怪丶冷淡孤僻丶狂妄';
			} else if (constellation == '雙魚') {
				answer[0] = '善解人意丶無私大愛丶浪漫有想像力丶同理心強';
				answer[1] = '意志薄弱丶不切實際丶迷糊丶容易鬆懈';
			}
		} else if (planetEname == 'Pluto') {
			
		} else if (planetEname == 'Mars') {
			
		} else if (planetEname == 'Neptune') {
			
		} else if (planetEname == 'Jupiter') {
			
		} else if (planetEname == 'Venus') {
			
		} else if (planetEname == 'Mercury') {
			if (constellation == '牧羊') {
				answer[0] = '表達直接，直線思考，思想單純，直言敢言';
				answer[1] = '說話太過衝動容易得罪人，講話急躁，想法自私，思想單蠢';
			} else if (constellation == '金牛') {
				answer[0] = '說話誠懇，思想善良穩重，對於數字觀念敏感';
				answer[1] = '想法固執，現實，講話吞吞吐吐，反應緩慢';
			} else if (constellation == '雙子') {
				answer[0] = '思緒靈活，擅長交友，反應敏捷，點子王';
				answer[1] = '想法膚淺，不夠實際，不守承諾，學習沒有耐心';
			} else if (constellation == '巨蟹') {
				answer[0] = '善於關心人，記憶力佳，喜歡保護朋友';
				answer[1] = '過於鄉愿，想法迂迴，容易陷於過去記憶當中，想法容易負面敏感';
			} else if (constellation == '獅子') {
				answer[0] = '富有創意的頭腦，為朋友兩肋插刀，說話充滿自信';
				answer[1] = '想法自以中心，不願認錯，怕被別人佔便宜，自大狂妄';
			} else if (constellation == '處女') {
				answer[0] = '想法清晰、邏輯分析強，心思細膩，常義務助人';
				answer[1] = '愛鑽牛角尖，愛碎念，吹毛求疵';
			} else if (constellation == '天秤') {
				answer[0] = '擅於社交，說話優雅圓融，善於聆聽';
				answer[1] = '虛偽不誠懇，太過於在意公平性，深怕自已吃虧，缺乏主見';
			} else if (constellation == '天蠍') {
				answer[0] = '偵探思維，易於發覺隱藏性問題，懂得察言觀色，洞察人心';
				answer[1] = '喜歡蒐集八卦，想法太過負面，說話丶思想易過於偏激';
			} else if (constellation == '射手') {
				answer[0] = '開朗樂觀，愛交朋友，喜歡學習異國文學，愛旅遊';
				answer[1] = '說話愛畫大餅，想法過於樂觀，粗心大意';
			} else if (constellation == '魔羯') {
				answer[0] = '思想縝密，喜歡計畫性學習，想法成熟，有企圖心';
				answer[1] = '想法太過固執保守封閉，說話嚴肅，不懂變通，思想現實';
			} else if (constellation == '水瓶') {
				answer[0] = '思想創新，與眾不同，獨立丶跳耀性思考';
				answer[1] = '言語具有疏離感，外星人思維與現實脫離，想法易改變';
			} else if (constellation == '雙魚') {
				answer[0] = '具憐憫、同情、包容心，對待友人善良丶善解人意';
				answer[1] = '表達曖昧不明、不清不楚，學習不容易專注，想法易受人影響，數字觀念、方向感不好';
			}
		}
		if (!answer[0]) {
			answer[0] = '';
		}
		if (!answer[1]) {
			answer[1] = '';
		}
		answer[0] = "優點：" + answer[0];
		answer[1] = "缺點：" + answer[1];
		
		if (house == 1) {
			answer[2] = '命宮～代表命主的外型、行為模式、人格面具、早年狀態';
		} else if (house == 2) {
			answer[2] = '財帛宮～代表ㄧ個人的理財觀念、價值觀、賺錢的方式、財務狀況';
		} else if (house == 3) {
			answer[2] = '學習宮～也代表和兄弟姐妹的關係、以及交友關係，3c產品、文書、鄰居、交通狀況也與此宮有觀';
		} else if (house == 4) {
			answer[2] = '家庭宮～代表和家人相處的情形、父母的關係、一個人的內在領域、也象徵命主的財庫';
		} else if (house == 5) {
			answer[2] = '快樂宮～代表戀愛運、子女運，以及代表人生舞台、有沒有創作天份';
		} else if (house == 6) {
			answer[2] = '工作宮～代表工作運以及健康狀況和寵物關係，同時也象徵命主為他人義務服務的狀況';
		} else if (house == 7) {
			answer[2] = '婚姻宮～同時也是伴侶/閨蜜宮、或和合作對象/競爭對手的關係也與此人生領域有關；此人生領域也象徵官司/合約訴訟的狀況';
		} else if (house == 8) {
			answer[2] = '玄秘宮～這是每個人的地下室/秘密（情慾）所在、也代表和他人合作的財運狀況，或是負債情形';
		} else if (house == 9) {
			answer[2] = '遷移宮～代表命主的出國運或高中以上的學習狀況或人生理想也包含了宗教信仰';
		} else if (house == 10) {
			answer[2] = '事業宮～代表命主的事業狀況或是事業企圖心、社會成就與長官緣';
		} else if (house == 11) {
			answer[2] = '群體宮～代表社群關係、交友狀況';
		} else {
			answer[2] = '福德宮～代表一個人有沒有福報，也代表這人的休息睡眠狀況、心理狀態、無意識狀態';
		}
		
		return answer;
	};
});	