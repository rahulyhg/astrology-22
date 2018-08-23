<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="js/datepicker.min.js"></script>
<script src="js/datepicker.zh.js"></script>
<script src="js/astrochart.min.js"></script>

<script type="text/javascript">
	app.controller('controller', function ($scope, $http, $location, anchorSmoothScroll, $timeout) {
		$scope.result = false;
		$scope.inputSite = false;
		$scope.siderealList = ['Fagan Bradley', 'Lahiri, Deluce', 'Ramanb', 'Ushashashi', 'Krishnamurti', 'Djwhal Khul',
			'Yukteshwar', 'Jn Bhasin', 'Babyl Kugler 1', 'Babyl Kugler 2', 'Babyl Kugler 3', 'Babyl Huber', 'Babyl Etpsc', 'Aldebaran 10Tau', 'Hipparchos', 'Sassanian'];
		$scope.cityList = [{'latlng':[121.42, 25.06], 'city':'基隆'}, {'latlng':[121.33, 25.05], 'city':'台北'}, {'latlng':[121.13, 24.56], 'city':'桃園'}, {'latlng':[120.57, 24.48], 'city':'新竹'},
			{'latlng':[120.56, 24.29], 'city':'苗栗'}, {'latlng':[120.38, 24.09], 'city':'台中'}, {'latlng':[120.28, 23.59], 'city':'彰化'}, {'latlng':[120.59, 23.50], 'city':'南投'},
			{'latlng':[120.23, 23.45], 'city':'雲林'}, {'latlng':[120.26, 23.28], 'city':'嘉義'}, {'latlng':[120.10, 23.00], 'city':'台南'}, {'latlng':[120.18, 22.37], 'city':'高雄'},
			{'latlng':[120.37, 22.32], 'city':'屏東'}, {'latlng':[120.59, 22.59], 'city':'台東'}, {'latlng':[121.21, 23.45], 'city':'花蓮'}, {'latlng':[121.43, 24.41], 'city':'宜蘭'},
			{'latlng':[119.36, 23.33], 'city':'澎湖'}, {'latlng':[121.25, 24.59], 'city':'金門'}];
		
		//AIR DATEPICKER
		$('#timepicker').datepicker({
	        timepicker: true,
	        language: 'zh',
	        clearButton: true,
	        onSelect: function(inputTime) {
	            $scope.inputTime = inputTime;
	        }
	    });
		//chart init
		var chart = new astrology.Chart("chart", 500, 500);
		
		
		$scope.submit = function() {
			if (!$scope.inputTime) {
				$scope.result = false;
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請選擇日期時間!'
					});
			}
			var addr = "";
			if ($scope.inputSite) {
				addr = $scope.addr;
			} else {
				addr = "!" + $scope.city[0] + "-" + $scope.city[1];
			}
			$http.get("/astrology/getChartData/" + $scope.inputTime + "/" + $scope.sidereal + "/" + addr)
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
		        	$timeout(function() {
		        		$location.hash("top");
			            anchorSmoothScroll.scrollTo("resultAnchor");
		        	}, 100);
		        	$scope.data = response.data;
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
		
 	});
</script>