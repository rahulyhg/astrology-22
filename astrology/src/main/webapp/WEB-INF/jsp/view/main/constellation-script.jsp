<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="js/astrochart.js"></script>

<script type="text/javascript">
	app.controller('controller', function ($scope, $http, $location, anchorSmoothScroll, $timeout) {
		$scope.inputTime = "1991-08-25 01:00"
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
		$scope.cityList = [{'lnglat':[121.733, 25.133], 'city':'基隆'}, {'lnglat':[121.05, 25.05], 'city':'台北'}, {'lnglat':[121.3, 24.983], 'city':'桃園'}, {'lnglat':[120.966, 24.8], 'city':'新竹'},
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
		
		//chart init
		var settings = {
				SYMBOL_SCALE : 1.1,
				DIGNITIES_RULERSHIP : "",
				DIGNITIES_DETRIMENT : "",
				DIGNITIES_EXALTATION : "",
				DIGNITIES_EXACT_EXALTATION : "",
				DIGNITIES_FALL : "",
				};
		var chart = new astrology.Chart("chart", 500, 500, settings);
		
		
		$scope.submit = function() {
			var inputTime;
			if (!$scope.year) {
				$scope.result = false;
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請選擇日期!'
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
			}
			$http.get("/astrology/getChartData/" + inputTime + "/" + $scope.timezone + "/" + addr)
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
		        	calculatePosition(response.data.planets);
		        	$timeout(function() {
		        		$location.hash("top");
			            anchorSmoothScroll.scrollTo("resultAnchor");
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
				$scope.city = $scope.cityList[1].latlng;
			} else {
				$scope.inputSite = false;
				$scope.addr = null; 
			}
		}
		
		$scope.hover = function(isHover,e) {
			var element = e.target;
			if (isHover) {
				angular.element(element).parent().css({'color':'red','font-weight':'bold'});
			} else {
				angular.element(element).parent().css({'color':'black','font-weight':'normal'});
			}
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
		
		function calculatePosition(data) {
			angular.forEach(data,function(vo, key) {
        		var index = Math.floor(vo[0] / 30) + 1;
        		var planet;
        		var sortNo;
        		var constellation;
        		if (key == 'Saturn') {
        			planet = '土星';
        			sortNo = 6;
        		} else if (key == 'Moon') {
        			planet = '月亮';
        			sortNo = 1;
        		} else if (key == 'Uranus') {
        			planet = '天王星';
        			sortNo = 7;
        		} else if (key == 'Sun') {
        			planet = '太陽';
        			sortNo = 0;
        		} else if (key == 'Pluto') {
        			planet = '冥王星';
        			sortNo = 9;
        		} else if (key == 'Mars') {
        			planet = '火星';
        			sortNo = 4;
        		} else if (key == 'Neptune') {
        			planet = '海王星';
        			sortNo = 8;
        		} else if (key == 'Jupiter') {
        			planet = '木星';
        			sortNo = 5;
        		} else if (key == 'Venus') {
        			planet = '金星';
        			sortNo = 3;
        		} else if (key == 'Mercury') {
        			planet = '水星';
        			sortNo = 2;
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
        		$scope.dataList.push({'constellation':constellation + " " + getDegree(vo[0]),'planet':planet,'sortNo':sortNo});
        	});
		}
		
 	});
</script>