<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script src="//d3js.org/d3.v3.min.js"></script>
<script src="//d3js.org/topojson.v1.min.js"></script>
<script src="js/d3-tip-v4.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/echarts/4.1.0/echarts.min.js"></script>
<script type="text/javascript">
	app.controller('controller', function ($scope, $http) {
		$scope.regionArr = ['基隆市','新北市','臺北市','桃園市','新竹縣','新竹市','苗栗縣','臺中市','彰化縣','南投縣','雲林縣','嘉義縣',
            				'嘉義市','臺南市','高雄市','屏東縣','宜蘭縣','花蓮縣','臺東縣','澎湖縣','金門縣','連江縣'];
		$scope.boyList = [];
		$scope.girlList = [];
		for (var i = 0; i < 12; i++) {
			$scope.boyList.push(Math.floor((Math.random()) * 100));
			$scope.girlList.push(Math.floor((Math.random()) * 100));
		}
		var tip = d3.tip().attr('class', 'd3-tip')
		  			.offset([-5, 8])
	  	  			.html(function(d) {
	  		  			if (d.properties) {
	  						return "<span style='color:yellow'>" + d.properties.name + "</span>";
	  		  			}
	  	  			});
		$("#mixChart").width($("#mixChart").parent().width());
		var mixChart = echarts.init(document.getElementById("mixChart"));
		
		drawMap();
		drawChart();
		
		$scope.changeRegion = function() {
			$scope.boyList = [];
			$scope.girlList = [];
			for (var i = 0; i < 12; i++) {
				$scope.boyList.push(Math.floor((Math.random()) * 100));
				$scope.girlList.push(Math.floor((Math.random()) * 100));
			}
			drawChart();
		};
		
		function drawMap() {
			d3.json('/data/taiwan.json', function(taiwanCitydata) {
				/**產生地圖start--------------------------------------------------------------- */
				features = topojson.feature(taiwanCitydata, taiwanCitydata.objects['map']).features;

				path = d3.geo.path().projection( // 路徑產生器
				d3.geo.mercator().center([ 121, 24 ]).scale(17500) // 座標變換函式
				);
				d3.select("#pathCanvas").selectAll("path").data(features).enter() 
						.append("path").attr({
							d : path,
							fill : '#98FB98',
							id : function(d) {
								return d.properties.name + "forpath"; //給縣市地圖id做事件
							}
						}).attr("class", "path");
				
				d3.select("#pathCanvas").append("path") //縣市/行政區界線
				.datum(topojson.mesh(taiwanCitydata, taiwanCitydata.objects['map'], function(a, b) {
					return a !== b;
				})).attr("d", path).attr("id", "county-boundary");
				/**產生地圖end---------------------------------------------------------------- */
				
				d3.select("svg").selectAll("path").call(tip); //呼叫tip
				d3.select("svg").selectAll("path")
				.on("mouseenter", function(d) {
					if (d.properties) {
						d3.select("#" + d.properties.name + "forpath").classed("mouse",true);
					}
					tip.show(d);
				})
				.on("mouseout", function(d) {
					if (d.properties) {
						d3.select("#" + d.properties.name + "forpath").classed("mouse",false);
					}
					tip.hide();
				})
				.on("click", function(d) {
					if (d.properties) {
						d3.select("#" + $scope.region + "forpath").style("fill", "#98FB98");
						$scope.region = d.properties.name;
						d3.select("#" + $scope.region + "forpath").style("fill", "#FF69B4");
						$scope.changeRegion();
					}
				});
			});
			
		}
		
		function drawChart() {
			var barHoverStyle = {
				    borderColor: "yellow",
				    borderWidth: 2,
				    shadowColor: "#000",
				    shadowBlur: 10,
				};
			var option = {
					title: {
						text: !$scope.region ? '' : $scope.region
					},
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross'
				        }
				    },
				    grid: {
				        right: '10%'
				    },
				    legend: {
				        data: ['男性','女性']
				    },
				    xAxis: [
				        {
				            type: 'category',
				            axisTick: {
				                alignWithLabel: true
				            },
				            data: ['牧羊座', '金牛座', '雙子座', '巨蟹座', '獅子座', '處女座', '天秤座', '天蠍座', '射手座', '摩羯座', '水瓶座', '雙魚座']
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value',
				            name: '查詢次數',
				            min: 0,
				            max: 100,
				            axisLine: {
				            	lineStyle: {
				            		color: 'black'
				            	}
				            },
				            position: 'left'
				        }
				    ],
				    series: [
				        {
				            name: '男性',
				            type: 'bar',
				            yAxisIndex: 0,
				            itemStyle: {
				                emphasis: barHoverStyle,
				                normal: {
				        			    color: "#1E90FF",
				        		}
				            },
				            barGap: '10%',
				            barCategoryGap: '25%',
				            data: $scope.boyList
				        },
				        {
				            name: '女性',
				            type: 'bar',
				            yAxisIndex: 0,
				            itemStyle: {
				            	emphasis: barHoverStyle,
				                normal: {
			        			    color: "#FF1493",
			        			}
				            },
				            barGap: '10%',
				            barCategoryGap: '25%',
				            data: $scope.girlList
				        }
				    ]
				};
			mixChart.setOption(option, true);
		}
	});
</script>