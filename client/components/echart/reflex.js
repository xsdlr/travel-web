
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
				        	name:'WEB端',
				        	textStyle:{
						        color:'#5f9cb9'
						    }
				        },
				        {
				        	name:'移动端',
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
				            name:'WEB端',
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
				            name:'移动端',
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
