
export default {

	main(queryResult,component,options){

		let option,data;
        
		switch(component.id){
			case 3:
				option = {
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:[{
				        	name:'挂号人数',
				        	textStyle:{
						        color:'#c23531'
						    }
				        },{
				        	name:'健康出行人数',
				        	textStyle:{
						        color:'#5f9cb9'
						    }
				        }],
				        x: 'right'
				    },
				    xAxis:  {
				    	name:'时间',
				        type: 'category',
				        data: queryResult.time,
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
				    },
				    grid: {
				        left: '3%',
				        right: '8%',
				        bottom: '3%',
				        containLabel: true
				    },
				    yAxis: {
				        name:'人数',
				        type: 'value',
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
			            splitLine:{  
                            show:false  
                        }
				    },
				    series: [
				        {
				            name:'挂号人数',
				            type:'line',
				            data:queryResult.registerList
				        },
				        {
				            name:'健康出行人数',
				            type:'line',
				            data:queryResult.healthyList,
				            itemStyle : {  
                                normal : {  
                                    lineStyle:{  
                                        color:'#5f9cb9'
                                    }  
                                }  
                            },  
				        }
				    ]
				};
			break;
			case 4:
				data = queryResult.registerList.map(item => {
					return {
						name:item.name + item.percent + '%',
						value:item.percent
					}
				})
				option = {
				    series : [
				        {
				            type: 'pie',
				            label: {
				                normal: {
				                    position: 'inner'
				                }
				            },
				            data:data
				        }
				    ]
				};
			break;
			case 6:
				data = queryResult.list.map(item => {
					return {
						name:item.text + item.percent + '%',
						value:item.percent
					}
				})
				option = {
				    series : [
				        {
				            type: 'pie',
				            label: {
				                normal: {
				                    position: 'inner'
				                }
				            },
				            data:data
				        }
				    ]
				};
			break;
			case 7:
				option = {
			        animationDuration: 1500,
			        animationEasingUpdate: 'quinticInOut',
			        series : [
			            {
			                name: 'relation-test',
			                type: 'graph',
			                layout: 'none',
			                categories: queryResult.categories,
			                data: queryResult.nodes,
			                links: queryResult.links,
			                roam: true,
			                lineStyle: {
			                    normal: {
			                        color: 'source',
			                        curveness: 0.3
			                    }
			                }
			            }
			        ]
			    };
			break;
			case 12:
				option = {
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:[{
				        	name:'总数量',
				        	textStyle:{
						        color:'#c23531'
						    }
				        },{
				        	name:'微信端',
				        	textStyle:{
						        color:'#5f9cb9'
						    }
				        },
				        {
				        	name:'市民卡APP',
				        	textStyle:{
						        color:'#4be6fc'
						    }
				        }],
				        x: 'right'
				    },
				    xAxis:  {
				        type: 'category',
				        data: queryResult.time,
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
				    },
				    grid: {
				        left: '3%',
				        right: '8%',
				        bottom: '3%',
				        containLabel: true
				    },
				    yAxis: {
				        name:'使用量',
				        type: 'value',
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
			            splitLine:{  
                            show:false  
                        }
				    },
				    series: [
				        {
				            name:'总数量',
				            type:'line',
				            data:queryResult.count
				        },
				        {
				            name:'微信端',
				            type:'bar',
				            data:queryResult.web,
				            itemStyle : {  
                                normal : {  
                                    lineStyle:{  
                                        color:'#5f9cb9'
                                    }  
                                }  
                            },
                            barGap:0
				        },
				        {
				            name:'市民卡APP',
				            type:'bar',
				            data:queryResult.mobile,
				            itemStyle : {  
                                normal : {  
                                    lineStyle:{  
                                        color:'#4be6fc'
                                    }  
                                }  
                            },
                            barGap:0
				        }
				    ]
				};
			break;
			case 20:
				option = {
				    tooltip: {
				        trigger: 'axis'
				    },
				    xAxis:  {
				    	name:'时间',
				        type: 'category',
				        data: queryResult.time,
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
				    },
				    grid: {
				        left: '3%',
				        right: '10%',
				        bottom: '3%',
				        top:'12%',
				        containLabel: true
				    },
				    yAxis: {
				        name:'人数',
				        type: 'value',
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
			            splitLine:{  
                            show:false  
                        }
				    },
				    series: [
				        {
				            name:'苹果',
				            type:'line',
				            data:queryResult.ios
				        },
				        {
				            name:'安卓',
				            type:'line',
				            data:queryResult.and,
				            itemStyle : {  
                                normal : {  
                                    lineStyle:{  
                                        color:'#5f9cb9'
                                    }  
                                }  
                            },  
				        }
				    ]
				};
			break;
			case 22:
				option = {
				    tooltip: {
				        trigger: 'axis'
				    },
				    xAxis:  {
				        type: 'category',
				        data: queryResult.category,
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
				    },
				    grid: {
				        left: '3%',
				        right: '10%',
				        bottom: '3%',
				        top:'12%',
				        containLabel: true
				    },
				    yAxis: {
				        name:'人数',
				        type: 'value',
				        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#5f9cb9'
                            }
                        },
                        axisLine:{
			                lineStyle:{
			                    color:'#5f9cb9'
			                }
			            },
			            splitLine:{  
                            show:false
                        }
				    },
				    series: [
				        {
				            name:'苹果',
				            type:'bar',
				            data:queryResult.ios,
				            barGap:0
				        },
				        {
				            name:'安卓',
				            type:'bar',
				            data:queryResult.and,
				            itemStyle : {  
                                normal : {  
                                    lineStyle:{  
                                        color:'#5f9cb9'
                                    }  
                                }  
                            },
                            barGap:0
				        }
				    ]
				};
			break;
			case 23:
				data = queryResult.list.map(item => {
					return {
						name:item.name + item.percent + '%',
						value:item.percent
					}
				})
				option = {
				    series : [
				        {
				            type: 'pie',
				            label: {
				                normal: {
				                    position: 'inner'
				                }
				            },
				            data:data
				        }
				    ]
				};
			break;
			case 25:
				var COLORS = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#ffffff"];
				var lngExtent = queryResult.lngExtent;
				var latExtent = queryResult.latExtent;
				var cellCount = queryResult.cellCount;
				var cellSizeCoord = [
				    (lngExtent[1] - lngExtent[0]) / cellCount[0],
				    (latExtent[1] - latExtent[0]) / cellCount[1]
				];
				var gapSize = 0;
				data = queryResult.data;

				function renderItem(params, api) {
				    var context = params.context;
				    var lngIndex = api.value(0);
				    var latIndex = api.value(1);
				    var coordLeftTop = [
				        +(latExtent[0] + lngIndex * cellSizeCoord[0]).toFixed(6),
				        +(lngExtent[0] + latIndex * cellSizeCoord[1]).toFixed(6)
				    ];
				    var pointLeftTop = getCoord(params, api, lngIndex, latIndex);
				    var pointRightBottom = getCoord(params, api, lngIndex + 1, latIndex + 1);

				    return {
				        type: 'rect',
				        shape: {
				            x: pointLeftTop[0],
				            y: pointLeftTop[1],
				            width: pointRightBottom[0] - pointLeftTop[0],
				            height: pointRightBottom[1] - pointLeftTop[1]
				        },
				        style: api.style({
				            stroke: 'rgba(0,0,0,0.1)'
				        }),
				        styleEmphasis: api.styleEmphasis()
				    };
				}

				function getCoord(params, api, lngIndex, latIndex) {
				    var coords = params.context.coords || (params.context.coords = []);
				    var key = lngIndex + '-' + latIndex;

				    // bmap returns point in integer, which makes cell width unstable.
				    // So we have to use right bottom point.
				    return coords[key] || (coords[key] = api.coord([
				        +(latExtent[0] + lngIndex * cellSizeCoord[0]).toFixed(6),
				        +(lngExtent[0] + latIndex * cellSizeCoord[1]).toFixed(6)
				    ]));
				}

				option = {
				    tooltip: {},
				    visualMap: {
				        type: 'piecewise',
				        inverse: true,
				        top: 10,
				        left: 10,
				        pieces: [{
				            value: 0, color: COLORS[0]
				        }, {
				            value: 1, color: COLORS[1]
				        }, {
				            value: 2, color: COLORS[2]
				        }, {
				            value: 3, color: COLORS[3]
				        }, {
				            value: 4, color: COLORS[4]
				        }, {
				            value: 5, color: COLORS[5]
				        }],
				        borderColor: '#ccc',
				        borderWidth: 2,
				        backgroundColor: '#eee',
				        dimension: 2,
				        inRange: {
				            color: COLORS,
				            opacity: 0.7
				        }
				    },
				    series: [
				        {
				            type: 'custom',
				            coordinateSystem: 'bmap',
				            renderItem: renderItem,
				            animation: false,
				            itemStyle: {
				                emphasis: {
				                    color: 'yellow'
				                }
				            },
				            encode: {
				                tooltip: 2
				            },
				            data: data
				        }
				    ],
				    bmap: {
				        center: [120.2, 30.3],
				        zoom: 11.8,
				        roam: false,
				        mapStyle: {
				            styleJson: [{
				                'featureType': 'water',
				                'elementType': 'all',
				                'stylers': {
				                    'color': '#d1d1d1'
				                }
				            }, {
				                'featureType': 'land',
				                'elementType': 'all',
				                'stylers': {
				                    'color': '#f3f3f3'
				                }
				            }, {
				                'featureType': 'railway',
				                'elementType': 'all',
				                'stylers': {
				                    'visibility': 'off'
				                }
				            }, {
				                'featureType': 'highway',
				                'elementType': 'all',
				                'stylers': {
				                    'color': '#999999'
				                }
				            }, {
				                'featureType': 'highway',
				                'elementType': 'labels',
				                'stylers': {
				                    'visibility': 'off'
				                }
				            }, {
				                'featureType': 'arterial',
				                'elementType': 'geometry',
				                'stylers': {
				                    'color': '#fefefe'
				                }
				            }, {
				                'featureType': 'arterial',
				                'elementType': 'geometry.fill',
				                'stylers': {
				                    'color': '#fefefe'
				                }
				            }, {
				                'featureType': 'poi',
				                'elementType': 'all',
				                'stylers': {
				                    'visibility': 'off'
				                }
				            }, {
				                'featureType': 'green',
				                'elementType': 'all',
				                'stylers': {
				                    'visibility': 'off'
				                }
				            }, {
				                'featureType': 'subway',
				                'elementType': 'all',
				                'stylers': {
				                    'visibility': 'off'
				                }
				            }, {
				                'featureType': 'manmade',
				                'elementType': 'all',
				                'stylers': {
				                    'color': '#d1d1d1'
				                }
				            }, {
				                'featureType': 'local',
				                'elementType': 'all',
				                'stylers': {
				                    'color': '#d1d1d1'
				                }
				            }, {
				                'featureType': 'arterial',
				                'elementType': 'labels',
				                'stylers': {
				                    'visibility': 'off'
				                }
				            }, {
				                'featureType': 'boundary',
				                'elementType': 'all',
				                'stylers': {
				                    'color': '#fefefe'
				                }
				            }, {
				                'featureType': 'building',
				                'elementType': 'all',
				                'stylers': {
				                    'color': '#d1d1d1'
				                }
				            }, {
				                'featureType': 'label',
				                'elementType': 'labels.text.fill',
				                'stylers': {
				                    'color': 'rgba(0,0,0,0)'
				                }
				            }]
				        }
				    }
				};
			break;
			case 26:
				let value = queryResult[options.type];
				option = {
				    series: [
				        {
				            type: 'gauge',
				            min:0,
				            max:1,
				            data: [{value: value}],
				            axisLabel: {            // 刻度标签
				                show:false
				            },
				            axisLine: {          // 坐标轴线
				                lineStyle: {
				                    width: 3
				                }
				            },
				            splitLine: {           // 分隔线
				                length :2,         // 属性length控制线长
				            },
				            pointer: {           // 指针
				                width:2
				            },
				            detail : {
				                textStyle:{
				                    fontSize:16
				                }
				            },
				        }
				    ]
				};
			break;
		}

        return option;

	}


}
