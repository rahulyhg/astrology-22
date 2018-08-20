<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="js/datepicker.min.js"></script>
<script src="js/datepicker.zh.js"></script>
        
<script type="text/javascript">
	app.controller('controller', function ($scope, $http) {
		$scope.result = false;
		//AIR DATEPICKER
		$('#timepicker').datepicker({
	        timepicker: true,
	        language: 'zh',
	        onSelect: function(inputTime) {
	            $scope.inputTime = inputTime;
	        }
	    });
		
		$scope.submit = function() {
			if (!$scope.inputTime) {
				$scope.result = false;
				return swal({
					  type: 'error',
					  title: '錯誤',
					  text: '請選擇日期時間!'
					});
			}
			
			$http.get("/astrology/test/" + $scope.inputTime)
		    .then(function(response) {
		        if (response.data.resMessage) {
		        	swal({
						  type: 'error',
						  title: '錯誤',
						  text: response.data.resMessage
						});
		        } else {
			        $scope.result = true;
		        }
		    }, function(response) {
		    	swal({
					  type: 'error',
					  title: '錯誤',
					  text: '系統發生錯誤!'
					});
		    });
		}
 	});
</script>