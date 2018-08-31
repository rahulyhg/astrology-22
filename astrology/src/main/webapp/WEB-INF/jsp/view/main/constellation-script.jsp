<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="js/astrochart.js"></script>
<script src="//d3js.org/d3.v3.min.js"></script>
<script src="js/d3-tip-v4.js"></script>
<script type="text/javascript">
	app.controller('controller', function ($scope, $http, anchorSmoothScroll, $timeout, $window) {
		$scope.result = false;
		$scope.inputSite = false;
		$scope.timezoneList = [];
		for (var i = 24; i > 0; i--) {
			if ((i - 13) >= 0) {
				$scope.timezoneList.push({'timezone': i - 13,'timename':"GMT+" + (i - 13) + ":00"});
			} else {
				$scope.timezoneList.push({'timezone': i - 13,'timename':"GMT" + (i - 13) + ":00"});
			}
		}
		$scope.cityList = [{'lnglat':[121.733, 25.133], 'city':'基隆'}, {'lnglat':[121.5, 25.05], 'city':'台北'}, {'lnglat':[121.3, 24.983], 'city':'桃園'}, {'lnglat':[120.966, 24.8], 'city':'新竹'},
			{'lnglat':[120.816, 24.55], 'city':'苗栗'}, {'lnglat':[120.066, 24.15], 'city':'台中'}, {'lnglat':[120.533, 24.066], 'city':'彰化'}, {'lnglat':[120.683, 23.9], 'city':'南投'},
			{'lnglat':[120.533, 23.7], 'city':'雲林'}, {'lnglat':[120.45, 23.483], 'city':'嘉義'}, {'lnglat':[120.2, 23], 'city':'台南'}, {'lnglat':[120.283, 22.633], 'city':'高雄'},
			{'lnglat':[120.483, 22.066], 'city':'屏東'}, {'lnglat':[121.15, 22.75], 'city':'台東'}, {'lnglat':[121.6, 23.983], 'city':'花蓮'}, {'lnglat':[121.75, 24.766], 'city':'宜蘭'},
			{'lnglat':[119.55, 23.566], 'city':'澎湖'}, {'lnglat':[118.416, 24.05], 'city':'金門'}];
		$scope.monthList = [];
		for (var i = 1; i < 13; i++) {
			$scope.monthList.push(i);
		}
		$scope.dateList = [];
		for (var i = 1; i < 32; i++) {
			$scope.dateList.push(i);
		}
		$scope.hourList = [];
		for (var i = 0; i < 24; i++) {
			$scope.hourList.push(i);
		}
		$scope.minList = [];
		for (var i = 0; i < 60; i++) {
			$scope.minList.push(i);
		}
		var date = new Date();
		$scope.year = date.getFullYear();
		$scope.month = date.getMonth() + 1;
		$scope.date = date.getDate();
		$scope.hour = date.getHours();
		$scope.min = date.getMinutes();
		
		//tip init 
		var tip_chart = d3.tip().attr('class', 'd3-tip')
						.offset(function() {return [-5, 5];})
						.html(function(data) {
							return translateChinese(data);
						});
		
		//chart init
		var settings = {
				SYMBOL_SCALE : $window.innerWidth < 400 ? 0.9 : $window.innerWidth < 500 ? 1 : 1.1,
				SYMBOL_SCALE1 : $window.innerWidth < 500 ? 0.8 : 1,
				DIGNITIES_RULERSHIP : "",
				DIGNITIES_DETRIMENT : "",
				DIGNITIES_EXALTATION : "",
				DIGNITIES_EXACT_EXALTATION : "",
				DIGNITIES_FALL : "",
				TIP : tip_chart
				};
		var chart;
		if ($window.innerWidth < 400) {
			chart = new astrology.Chart("chart", 380, 380, settings);
		} else if ($window.innerWidth < 500) {
			chart = new astrology.Chart("chart", 400, 400, settings);
		} else {
			chart = new astrology.Chart("chart", 500, 500, settings);
		}
		
		
		$scope.submit = function() {
			var inputTime;
			if (!$scope.year) {
				$scope.result = false;
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請選擇日期!'
					});
			} else if ($scope.inputSite && !$scope.addr) {
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請輸入地點!'
					});
			} else {
				var month;
				var date;
				var hour;
				var min;
				if ($scope.month < 10) {
					month = "0" + $scope.month;
				} else {
					month = $scope.month;
				}
				if ($scope.date < 10) {
					date = "0" + $scope.date;
				} else {
					date = $scope.date;
				}
				if ($scope.hour < 10) {
					hour = "0" + $scope.hour;
				} else {
					hour = $scope.hour;
				}
				if ($scope.min < 10) {
					min = "0" + $scope.min;
				} else {
					min = $scope.min;
				}
				inputTime = $scope.year + "-" +month + "-" + date + " " +hour + ":" + min;
			}
			var addr = "";
			if ($scope.inputSite) {
				addr = $scope.addr;
			} else {
				addr = "!" + $scope.city[0] + "-" + $scope.city[1];
				$scope.timezone = 8;
				$scope.savelight = false;
			}
			$http.get("/getChartData/" + inputTime + "/" + $scope.timezone + "/" + addr + "/" + $scope.savelight)
		    .then(function(response) {
		        if (response.data.resMessage) {
		        	swal({
						  type: 'error',
						  title: '錯誤',
						  text: response.data.resMessage
						});
		        } else {
		        	$scope.result = true;
		        	chart.radix(response.data).aspects();
		        	$scope.dataList = [];
		        	$scope.data1List = [];
		        	getPlanetPosition(response.data);
		        	getFourQuadrant();
		        	
		        	angular.forEach(angular.element("#planetAnalyze a"), function(value, key){
					     angular.element(value).removeClass("active");
					});
		        	angular.element("#planetAnalyze a").first().addClass("active");
		        	$scope.showTab = 1;
		        	$timeout(function() {
			            anchorSmoothScroll.scrollTo("resultAnchor");
			            d3.select("#astrology").call(tip_chart);
			            if ($window.innerWidth >= 768 && $window.innerWidth < 1024) {
			            	d3.select("#astrology").attr("transform","translate(100,0)");
			            	d3.select("svg").attr("width","600")
			            } else {
			            	d3.select("#astrology").attr("transform","translate(-10,0)");
			            }
		        	}, 100);
		        }
		    }, function(response) {
		    	swal({
					  type: 'error',
					  title: '錯誤',
					  text: '系統發生錯誤!'
					});
		    });
		}
		
		$scope.chgInputSite = function() {
			if (!$scope.inputSite) {
				$scope.inputSite = true;
				$scope.city = $scope.cityList[1].lnglat;
			} else {
				$scope.inputSite = false;
				$scope.addr = null; 
			}
		}
		
		$scope.hover = function(isHover, e, vo, type, index) {
			if (isHover) {
				angular.element(e.target).closest("tr").css({'color':'red','font-weight':'bold'});
				angular.element("#astrology-radix-planets-" + vo.planetEname).children().css({'stroke':'red'});
				angular.element("#astrology-radix-cusps-" + vo.house).children().css({'stroke':'red'});
				angular.element("#" + type + index + " > div > .tooltiptext").css({'visibility':'visible'});
			} else {
				angular.element(e.target).closest("tr").css({'color':'black','font-weight':'normal'});
				angular.element("#astrology-radix-planets-" + vo.planetEname).children().css({'stroke':'#000'});
				angular.element("#astrology-radix-cusps-" + vo.house).children().css({'stroke':'#000'});
				angular.element("#" + type + index + " > div > .tooltiptext").css({'visibility':'hidden'});
			}
		}
		
		$scope.chgNav = function(e,tag) {
			angular.forEach(angular.element("#planetAnalyze a"), function(value, key){
			     angular.element(value).removeClass("active");
			});
			angular.element(e.target).addClass("active");
			$scope.showTab = tag;
		}
		
		function getDegree(position) {
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
		}
		
		function getPlanetPosition(data) {
			angular.forEach(data.planets, function(vo, key) {
        		var index = Math.floor(vo[0] / 30) + 1;
        		var sortNo;
        		var constellation;
        		if (key == 'Saturn') {
        			sortNo = 6;
        		} else if (key == 'Moon') {
        			sortNo = 1;
        		} else if (key == 'Uranus') {
        			sortNo = 7;
        		} else if (key == 'Sun') {
        			sortNo = 0;
        		} else if (key == 'Pluto') {
        			sortNo = 9;
        		} else if (key == 'Mars') {
        			sortNo = 4;
        		} else if (key == 'Neptune') {
        			sortNo = 8;
        		} else if (key == 'Jupiter') {
        			sortNo = 5;
        		} else if (key == 'Venus') {
        			sortNo = 3;
        		} else if (key == 'Mercury') {
        			sortNo = 2;
        		} else if (key == 'NNode') {
        			sortNo = 10;
        		} else if (key == 'Asc') {
        			sortNo = 11;
        		} else if (key == 'Des') {
        			sortNo = 12;
        		} else if (key == 'Mc') {
        			sortNo = 13;
        		} else if (key == 'Ic') {
        			sortNo = 14;
        		}
        		if (index == 1) {
        			constellation = '牧羊座';
        		} else if (index == 2) {
        			constellation = '金牛座';
        		} else if (index == 3) {
        			constellation = '雙子座';
        		} else if (index == 4) {
        			constellation = '巨蟹座';
        		} else if (index == 5) {
        			constellation = '獅子座';
        		} else if (index == 6) {
        			constellation = '處女座';
        		} else if (index == 7) {
        			constellation = '天秤座';
        		} else if (index == 8) {
        			constellation = '天蠍座';
        		} else if (index == 9) {
        			constellation = '射手座';
        		} else if (index == 10) {
        			constellation = '魔羯座';
        		} else if (index == 11) {
        			constellation = '水瓶座';
        		} else if (index == 12) {
        			constellation = '雙魚座';
        		}
        		$scope.dataList.push({'constellation':constellation + " " + getDegree(vo[0]),
        			'planet':translateChinese(key),'planetEname':key,'sortNo':sortNo,'position':vo[0],'house':null});
        	});
			
			var max = _.max(data.cusps);
			var max_index;
			angular.forEach(data.cusps, function(cusp, index) {
				if (cusp == max) {
					max_index = index;
				}
			});
			angular.forEach(data.cusps, function(cusp, index) {
				angular.forEach($scope.dataList, function(planetVO) {
					if (!planetVO.house) {
						var target = planetVO.position;
						if ((index + 1) == data.cusps.length) {
							if (data.cusps[index] > target) {
								planetVO.house = index;
							} else {
								planetVO.house = (index + 1);
							}
						} else {
							if (data.cusps[index + 1] - data.cusps[index] < 0) {
								if (target > data.cusps[index]) {
									planetVO.house = (index + 1);
								} else if (target <= data.cusps[index + 1]) {
									planetVO.house = (index + 1);
								}
							} else if (data.cusps[index] < target && target <= data.cusps[index + 1]) {
								planetVO.house = (index + 1);
							}
						}
					}
				});
			});
		}
		
		function translateChinese(origin) {
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
		}
		
		function getFourQuadrant() {
			var fire = 0;
			var land = 0;
			var wind = 0;
			var water = 0;
			var fireArr = ['牧羊','獅子','射手'];
			var landArr = ['金牛','處女','魔羯'];
			var windArr = ['雙子','天秤','水瓶'];
			var waterArr = ['巨蟹','天蠍','雙魚'];
			var planetArr = ['太陽','月亮','水星','金星','火星','木星','土星','天王星','海王星','冥王星'];
			angular.forEach($scope.dataList, function(vo, key){
				if (_.find(planetArr, function(planet) { return vo.planet == planet; })) {
					var constellation = vo.constellation.substring(0,2);
					if (_.find(fireArr, function(str) { return str == constellation; })) {
						fire++;
					} else if (_.find(landArr, function(str) { return str == constellation; })) {
						land++;
					} else if (_.find(windArr, function(str) { return str == constellation; })) {
						wind++;
					} else if (_.find(waterArr, function(str) { return str == constellation; })) {
						water++;
					}
				}
			});
			$scope.data1List.push({'planet':'火象星座','rate':(fire/10)*100,'sortNo':0,'style':'table-danger'});
			$scope.data1List.push({'planet':'土象星座','rate':(land/10)*100,'sortNo':1,'style':'table-warning'});
			$scope.data1List.push({'planet':'風象星座','rate':(wind/10)*100,'sortNo':2,'style':'table-primary'});
			$scope.data1List.push({'planet':'水象星座','rate':(water/10)*100,'sortNo':3,'style':'table-info'});
		}
		
 	});
</script>