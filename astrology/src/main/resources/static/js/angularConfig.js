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
			name = '上升點 (Asc)';
		} else if (origin == 'Des') {
			name = '下降點 (Des)';
		} else if (origin == 'Mc') {
			name = '天頂 (Mc)';
		} else if (origin == 'Ic') {
			name = '天底 (Ic)';
		} else if (origin == 'NNode') {
			name = '北交點';
		}
		return name;
	};
	
    this.analyzeInterplay = function (planetEname,constellation,house) {
		var answer = []; //[0][1] for planet , [2] for house
		if (planetEname == 'Moon') {
			if (constellation == '牧羊') {
				answer[0] = '反應迅速，急於維護他人，對危險有種直覺，對和自己有親密關係的人有強烈的領域觀';
				answer[1] = '可能喜歡插嘴，情緒容易不耐煩，有時候喜歡用操控的方式主導一切';
			} else if (constellation == '金牛') {
				answer[0] = '實事求是，情緒平靜，很會存錢，做事不疾不徐';
				answer[1] = '過於物質主義，太過保守，懶散，不喜歡改變';
			} else if (constellation == '雙子') {
				answer[0] = '適應性強，善於應變，喜歡閱讀或是上網求新知。活潑伶俐';
				answer[1] = '情緒多變，注意力不容易集中，很難付出承諾，猶豫不決';
			} else if (constellation == '巨蟹') {
				answer[0] = '可以用直覺知道如何安慰他人或體會他人感覺，善於烹飪，對於歷史與文化有特殊的研究才能';
				answer[1] = '容易害羞，執著於過去或是熟悉的事物，或是陷入過去創傷，情緒化';
			} else if (constellation == '獅子') {
				answer[0] = '比較慷慨，寬宏大量，具有高尚的氣度';
				answer[1] = '喜歡誇大自己情緒，玻璃心，愛炫耀，自以為是，愛表現喜歡搶鋒頭';
			} else if (constellation == '處女') {
				answer[0] = '表現溫和謙虛，樂於助人，渴望服務他人，可以瞭解事物的精確性';
				answer[1] = '比較容易擔憂神經緊張，吹毛求疵，自我懷疑批判性強';
			} else if (constellation == '天秤') {
				answer[0] = 'ＥＱ好，社交技巧佳，舉止優雅，善於仲介與溝通協調';
				answer[1] = '猶豫不決，沒有辦法直接表達自己的感覺或是容易流於取悅他人，易有阿諛奉承的態度';
			} else if (constellation == '天蠍') {
				answer[0] = '對於家、土地、國家有強烈的佔有慾和忠誠的態度，善於保守秘密';
				answer[1] = '過度的佔有慾、報復心、嫉妒心，缺乏客觀。可能有童年創傷';
			} else if (constellation == '射手') {
				answer[0] = '溫暖活潑，心胸開闊，富有幽默感，有自信心';
				answer[1] = '不夠謹慎小心，具有狂放性格，情緒起伏落差極大';
			} else if (constellation == '魔羯') {
				answer[0] = '謹慎，善於管理自己情緒，實事求是，組織能力強，結構感好';
				answer[1] = '過度嚴肅，自我孤立，對自己嚴苛，不容易對他人敞開心扉';
			} else if (constellation == '水瓶') {
				answer[0] = '在情感上獨立自在，喜歡追求真理或做出理性的決定，有同情心，對電腦或科技的直覺力強';
				answer[1] = '容易抽離，冷淡，情緒無法連結，可能很冷酷，有時可能會有自閉症';
			} else if (constellation == '雙魚') {
				answer[0] = '豐富的想像力，浪漫，具有慈悲心、同理心，甚至可能有通靈的能力';
				answer[1] = '優柔寡斷，逃避行為，糊塗，缺乏自信，可能會沈溺於酒精或藥物';
			}
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
		} else if (planetEname == 'Mars') {
			if (constellation == '牧羊') {
				answer[0] = '有勇氣、力量、膽識、果敢、行動判斷快速、獨立';
				answer[1] = '衝動，易怒，缺乏毅力，三分鐘熱度';
			} else if (constellation == '金牛') {
				answer[0] = '火星在金牛弱勢；安全感遭到挑戰時或是被迫改變時，很容易產生憤怒;對於伴侶有強烈的佔有慾';
				answer[1] = '';
			} else if (constellation == '雙子') {
				answer[0] = '隨機應變，手眼協調好，善於辯論';
				answer[1] = '學習沒有耐心，說話快速急躁，有時言語帶有挑釁意味';
			} else if (constellation == '巨蟹') {
				answer[0] = '火星在巨蟹失勢；過度維護自己，過於敏感易怒';
				answer[1] = '';
			} else if (constellation == '獅子') {
				answer[0] = '有勇氣，會為了榮譽而奮戰，運動表現不錯';
				answer[1] = '當面子受到質疑時容易抓狂，好鬥，不服輸。炫耀，虛張聲勢，驕縱';
			} else if (constellation == '處女') {
				answer[0] = '善於處理細節能力，做事積極喜歡協助他人';
				answer[1] = '吹毛求疵，易怒撈叨，容易為了小事生氣';
			} else if (constellation == '天秤') {
				answer[0] = '火星天秤為弱勢位子；容易自認為遭到不公平對待而跟人起衝突。容易把火氣發生在別人身上';
				answer[1] = '';
			} else if (constellation == '天蠍') {
				answer[0] = '會以沈著隱密的方式完成任務，喜歡祕密行動丶驚人的毅力';
				answer[1] = '有報復心態，十分善妒，不生氣則已，一生氣則一鳴驚人。有些許被害妄想症';
			} else if (constellation == '射手') {
				answer[0] = '對於宗教、教育狂熱，喜愛冒險，喜歡戶外活動';
				answer[1] = '少根筋，容易出包，粗心大意。不安於室';
			} else if (constellation == '魔羯') {
				answer[0] = '自制能力好，善於管理，有責任感，工作努力，注意力集中';
				answer[1] = '過於嚴厲嚴肅，極富野心，沒有人情味，冷酷';
			} else if (constellation == '水瓶') {
				answer[0] = '會去爭取眾人的自由平等，有開放寬大的實驗精神';
				answer[1] = '不受控，愛好自由，不受拘束，冷淡抽離';
			} else if (constellation == '雙魚') {
				answer[0] = '以逃避幻想的方式來自我保護，有可能對酒精藥物上癮';
				answer[1] = '';
			}
		} else if (planetEname == 'Venus') {
			if (constellation == '牧羊') {
				answer[0] = '在情感跟金錢上的態度過於衝動，在協調仲介方面過於自我。不願妥協，自我中心';
				answer[1] = '';
			} else if (constellation == '金牛') {
				answer[0] = '對於紡織品、各種事物很有鑑賞能力，對於愛情忠誠(在金星沒有受剋的狀態下）';
				answer[1] = '';
			} else if (constellation == '雙子') {
				answer[0] = '幽默，談話技巧佳，對文學有鑑賞力，懂得甜言蜜語';
				answer[1] = '多情，幹話王，會用言語吸引人，光說不練';
			} else if (constellation == '巨蟹') {
				answer[0] = '熱愛古董歷史，珍惜老舊事物，會把錢花在美化家庭上（在沒有受剋的情況下）';
				answer[1] = '';
			} else if (constellation == '獅子') {
				answer[0] = '善於美化自己外表，富創意，魅力，愛小孩（在金星沒有受剋的情況下）';
				answer[1] = '愛炫耀，愛慕虛榮，喜歡被人奉承，喜歡浮誇受人矚目';
			} else if (constellation == '處女') {
				answer[0] = '各種品味的辨識力不錯，不喜歡太浮誇，不愛炫耀，喜歡小動物';
				answer[1] = '小氣，用錢價值觀過於謹慎，會計較錢';
			} else if (constellation == '天秤') {
				answer[0] = '審美觀不錯，愛好和平，善於解決衝突，外交手腕協商才能強，懂得用體面的話語撫慰人心';
				answer[1] = '怕孤獨，把伴侶婚姻關係太理想化所以容易失望，在選擇伴侶方面容易猶豫不決';
			} else if (constellation == '天蠍') {
				answer[0] = '金星落入天蠍是個弱勢的位子，對於金錢與愛有強烈的佔有慾，不懂得學習分享。較容易跟兄弟姐妹朋友產生競爭關係';
				answer[1] = '';
			} else if (constellation == '射手') {
				answer[0] = '慷慨，對於金錢與愛情都保持著樂觀的態度，容易被宗教、哲學吸引';
				answer[1] = '花錢太過於大方，不輕易付出承諾，對於愛情比較不易忠誠（金星射手喜歡探索冒險的愛情）';
			} else if (constellation == '魔羯') {
				answer[0] = '高尚，泰然自若，通常金星摩羯也是位專業人士，懂得自制，看待愛情較為實在（在金星未受剋的狀態下）';
				answer[1] = '';
			} else if (constellation == '水瓶') {
				answer[0] = '友善丶喜歡社交，審美觀標新立異，交朋友不在乎膚色、階級、信仰、收入';
				answer[1] = '在親密關係下容易，感到疏離感，審美觀怪異';
			} else if (constellation == '雙魚') {
				answer[0] = '浪漫，具有藝術細胞，人緣好';
				answer[1] = '容易在愛情裡迷失自己，立場不果決，很難在情感上付出承諾，愛亂花錢尤其是買鞋子';
			}
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
		if (answer[1]) {
			answer[0] = "優點＊" + answer[0];
			answer[1] = "缺點＊" + answer[1];
		} else {
			answer[1] = '';
			if (!answer[0]) {
				answer[0] = '外行星＊作用於集體世代的影響';
			}
		}
		
		if (house == 1) {
			answer[2] = '命宮＊代表命主的外型、行為模式、人格面具、早年狀態';
		} else if (house == 2) {
			answer[2] = '財帛宮＊代表ㄧ個人的理財觀念、價值觀、賺錢的方式、財務狀況';
		} else if (house == 3) {
			answer[2] = '學習宮＊也代表和兄弟姐妹的關係、以及交友關係，3c產品、文書、鄰居、交通狀況也與此宮有觀';
		} else if (house == 4) {
			answer[2] = '家庭宮＊代表和家人相處的情形、父母的關係、一個人的內在領域、也象徵命主的財庫';
		} else if (house == 5) {
			answer[2] = '快樂宮＊代表戀愛運、子女運，以及代表人生舞台、有沒有創作天份';
		} else if (house == 6) {
			answer[2] = '工作宮＊代表工作運以及健康狀況和寵物關係，同時也象徵命主為他人義務服務的狀況';
		} else if (house == 7) {
			answer[2] = '婚姻宮＊同時也是伴侶/閨蜜宮、或和合作對象/競爭對手的關係也與此人生領域有關；此人生領域也象徵官司/合約訴訟的狀況';
		} else if (house == 8) {
			answer[2] = '玄秘宮＊這是每個人的地下室/秘密（情慾）所在、也代表和他人合作的財運狀況，或是負債情形';
		} else if (house == 9) {
			answer[2] = '遷移宮＊代表命主的出國運或高中以上的學習狀況或人生理想也包含了宗教信仰';
		} else if (house == 10) {
			answer[2] = '事業宮＊代表命主的事業狀況或是事業企圖心、社會成就與長官緣';
		} else if (house == 11) {
			answer[2] = '群體宮＊代表社群關係、交友狀況';
		} else {
			answer[2] = '福德宮＊代表一個人有沒有福報，也代表這人的休息睡眠狀況、心理狀態、無意識狀態';
		}
		
		return answer;
	};
});	