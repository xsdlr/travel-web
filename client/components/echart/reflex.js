
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
		}

        return option;

	}


}
