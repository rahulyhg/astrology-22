<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="js/astrochart.js"></script>
<script src="//d3js.org/d3.v3.min.js"></script>
<script src="js/d3-tip-v4.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
<script src="js/bootstrap-datetimepicker.min.js"></script>
<script src="js/moment-zh-tw.js"></script>
<script type="text/javascript">
	app.controller('controller', function ($scope, $http, anchorSmoothScroll, $timeout, $window, constellationService) {
		$('#datepicker').datetimepicker({
            format: 'LD',
            locale: 'zh-tw',
            format: 'YYYY/MM/DD',
            defaultDate:new Date()
        });
		$('#timepicker').datetimepicker({
            format: 'LT',
            locale: 'zh-tw',
            showClose: true,
            defaultDate:new Date()
        });
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
		
		//tip init 
		var tip_chart = d3.tip().attr('class', 'd3-tip')
						.offset(function() {return [-5, 5];})
						.html(function(data) {
							return constellationService.translateChinese(data);
						});
		
		//chart init
		var settings = {
				SYMBOL_SCALE : $window.innerWidth < 400 ? 0.9 : $window.innerWidth < 500 ? 1 : 1.1,
				SYMBOL_SCALE1 : $window.innerWidth < 500 ? 0.8 : 1,
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
			var date = $("#datepicker").data("DateTimePicker").date();
			var time = $("#timepicker").data("DateTimePicker").date();
			
			var inputTime;
			if (!date || !time) {
				$scope.result = false;
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請選擇出生日期與出生時間!'
					});
			} else if ($scope.inputSite && !$scope.addr) {
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請輸入地點!'
					});
			} else {
				var dateTemp = new Date(date._d);
				var timeTemp = new Date(time._d);
				var dateTemp_month = dateTemp.getMonth() + 1;
				dateTemp_month = dateTemp_month < 10 ? "0" + dateTemp_month : dateTemp_month;
				
				var dateTemp_date = dateTemp.getDate();
				dateTemp_date = dateTemp_date < 10 ? "0" + dateTemp_date : dateTemp_date;
				
				var timeTemp_hour = timeTemp.getHours();
				timeTemp_hour = timeTemp_hour < 10 ? "0" + timeTemp_hour : timeTemp_hour;
				
				var timeTemp_min = timeTemp.getMinutes();
				timeTemp_min = timeTemp_min < 10 ? "0" + timeTemp_min : timeTemp_min;
				inputTime = dateTemp.getFullYear() + "-" + dateTemp_month + "-" + dateTemp_date + " " + timeTemp_hour + ":" + timeTemp_min;
			}
			var addr = "";
			if ($scope.inputSite) {
				addr = $scope.addr;
			} else {
				var cityVO = _.find($scope.cityList, function(o) { return o.lnglat[0] == $scope.city[0]; })
				addr = "!" + $scope.city[0] + "-" + $scope.city[1] + "-" + cityVO.city;
				$scope.timezone = 8;
				$scope.savelight = false;
			}
			$http.get("/getChartData/" + inputTime + "/" + $scope.timezone + "/" + addr + "/" + $scope.savelight + "/" + $scope.gender)
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
				var textArr = constellationService.analyzeInterplay(vo.planetEname,vo.constellation.substring(0,2),vo.house);
				var text;
				var row = 0;
				if (type == 'planet') {
					if (textArr[1]) {
						if ($window.innerWidth < 700) {
							row = Math.ceil(textArr[0].length / 17);
							row += Math.ceil(textArr[1].length / 17);
						} else {
							row = Math.ceil(textArr[0].length / 19);
							row += Math.ceil(textArr[1].length / 19);
						}
						textArr[0] = '<span style="color:#00FFFF">' + textArr[0].split("＊")[0] + '：</span>' + textArr[0].split("＊")[1];
						textArr[1] = '<span style="color:#00FFFF">' + textArr[1].split("＊")[0] + '：</span>' + textArr[1].split("＊")[1];
						text = textArr[0] + '<br>' + textArr[1];
					} else {
						text = textArr[0];
						if ($window.innerWidth < 700) {
							row = Math.ceil(text.length / 17);
						} else {
							row = Math.ceil(text.length / 19);
						}
						if (text.indexOf("＊") > -1) {
							text = '<span style="color:#00FFFF">' + text.split("＊")[0] + '：</span>' + text.split("＊")[1];
						}
					}
				} else {
					text = textArr[2];
					if ($window.innerWidth < 700) {
						row = Math.ceil(text.length / 17);
					} else {
						row = Math.ceil(text.length / 19);
					}
					text = '<span style="color:#00FFFF">' + text.split("＊")[0] + '：</span>' + text.split("＊")[1];
				}
				var hoverCss = (type == 'planet') ? '140px' : '-260px';
				if ($window.innerWidth < 768 && (type == 'planet')) {
					hoverCss = '70px';
				} else if ($window.innerWidth < 768 && (type == 'house')) {
					hoverCss = '-230px';
				} else if (type == 'planet') {
					hoverCss = '140px';
				} else {
					hoverCss = '-260px';
				}
				angular.element(e.target).closest("tr").css({'color':'red','font-weight':'bold'});
				angular.element("#astrology-radix-planets-" + vo.planetEname).children().css({'stroke':'red'});
				angular.element("#astrology-radix-cusps-" + vo.house).children().css({'stroke':'red'});
				angular.element("#" + type + index + " > div > .tooltiptext")
					.html(text)
					.css({'visibility':'visible','left':hoverCss,'height':(row * 22.5) + "px"});
			} else {
				angular.element(e.target).closest("tr").css({'color':'black','font-weight':'normal'});
				angular.element("#astrology-radix-planets-" + vo.planetEname).children().css({'stroke':'#000'});
				angular.element("#astrology-radix-cusps-" + vo.house).children().css({'stroke':'#000'});
				angular.element("#" + type + index + " > div > .tooltiptext")
					.html('')
					.css({'visibility':'hidden'});
			}
		}
		
		$scope.chgNav = function(e,tag) {
			angular.forEach(angular.element("#planetAnalyze a"), function(value, key){
			     angular.element(value).removeClass("active");
			});
			angular.element(e.target).addClass("active");
			$scope.showTab = tag;
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
        		$scope.dataList.push({'constellation':constellation + " " + constellationService.getDegree(vo[0]),
        			'planet':constellationService.translateChinese(key),'planetEname':key,'sortNo':sortNo,'position':vo[0],'house':null});
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