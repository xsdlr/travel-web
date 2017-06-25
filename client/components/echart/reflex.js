
export default {

	main(queryResult,component){

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
		}

        return option;

	}


}
