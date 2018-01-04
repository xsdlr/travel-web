const LARGE3_COMMON_CONFIG = [
  {
    box:{region:{top:20,left:20,width:905,height:680}},
    type:'relation',
    id:7,
    unLoop: true
  },
  {
    box:{
      region:{top:40,left:395,width:150,height:190},
      inner:true
    },
    type:'indicator',
    id:14,
    name:'功能总使用量'
  },
  {
    box:{
      region:{top:40,left:565,width:340,height:190},
      inner:true
    },
    type:'indicator',
    id:15,
    name:'排名前三使用功能'
  },
  {
    box:{
      region:{top:260,left:395,width:510,height:190},
      inner:true
    },
    type:'indicator',
    id:16,
    name:'流量人数'
  },
  {
    box:{
      region:{top:480,left:395,width:510,height:190},
      inner:true
    },
    type:'indicator',
    id:17,
    name:'三方应用'
  }
];
export default {
	choiceArr:[{
	    name:'地铁流量',
	    className:'metro',
	    open:true,
	    items:[{title:'地铁',active:true},{title:'关键区域',active:false}]
	},{
	    name:'公交流量',
	    className:'bus',
	    open:false,
	    items:[{title:'地铁',active:false},{title:'关键区域',active:false}]
	},{
	    name:'OD',
	    className:'od',
	    open:false,
	    items:[{title:'地铁',active:false},{title:'关键区域',active:false}]
	}],


	WHITE_THEME:['login','traffic'],
	BLACK_THEME:['large1','large2','large3','large4','large5'],

	INDICATOR_COLORS:['#ff4240','#42bf41','#2df3ff','#f6958f'],

	GRIDSIZE:1,

	LARGE1_CONFIG:[
		{
			box:{region:{top:20,left:20,width:680,height:680}},
			type:'area',
			id:2,
			name:'区域分布'
		},
		{
			box:{
				region:{top:40,left:200,width:480,height:75},
				inner:true
			},
			type:'text',
			id:1,
			loop:true
		},
		{
			box:{region:{top:20,left:720,width:620,height:310}},
			type:'line',
			id:3,
			name:'就诊时段'
		},
		{
			box:{region:{top:20,left:1360,width:220,height:310}},
			type:'pie',
			id:4,
			name:'出行方式选择'
		},
		{
			box:{region:{top:350,left:720,width:460,height:350}},
			type:'tableHospitalRank',
			id:5,
			name:'出行就诊医院排名'
		},
		{
			box:{region:{top:350,left:1200,width:380,height:350}},
			type:'pie',
			id:6,
			name:'年龄占比'
		}
	],

	LARGE2_CONFIG:[
		{
			box:{region:{top:20,left:20,width:1070,height:680}},
			type:'relation',
			id:7,
      needBackground: true,
      unLoop: true
		},
		{
			box:{
				region:{top:40,left:560,width:510,height:210},
				inner:true
			},
			type:'list',
			id:8,
			name:'常用功能排名'
		},
		{
			box:{
				region:{top:280,left:560,width:510,height:180},
				inner:true
			},
			type:'indicator',
			id:9,
			name:'微信端使用最多功能量'
		},
		{
			box:{
				region:{top:490,left:560,width:510,height:180},
				inner:true
			},
			type:'indicator',
			id:10,
			name:'市民卡APP使用最多功能量'
		},
		{
			box:{region:{top:20,left:1110,width:450,height:370}},
			type:'table',
			id:11,
			name:'终端使用占比'
		},
		{
			box:{region:{top:410,left:1110,width:450,height:290}},
			type:'line',
			id:12,
			name:'各时间段功能使用量统计'
		}
	],

	LARGE3_CONFIG:LARGE3_COMMON_CONFIG.concat([
    {
      box:{region:{top:20,left:945,width:630,height:680}},
      type:'empty',
      id:18,
      name:'总流量分析',
      noNeedQuery:true
    },
    {
      box:{
        region:{top:60,left:960,width:600,height:150},
        inner:true
      },
      type:'indicator',
      id:19,
      name:'用户统计'
    },
    {
      box:{
        region:{top:220,left:960,width:600,height:300},
        inner:true
      },
      type:'line',
      id:20,
      name:'使用统计'
    },
    {
      box:{
        region:{top:530,left:960,width:600,height:150},
        inner:true
      },
      type:'block',
      id:21,
      name:'留存用户'
    }
  ]),

  LARGE3_1_CONFIG:LARGE3_COMMON_CONFIG.concat([
    {
      box:{region:{top:20,left:945,width:630,height:680}},
      type:'empty',
      id:18,
      name:'惠民金服',
      noNeedQuery:true
    },
    {
      box:{
        region:{top:60,left:960,width:600,height:150},
        inner:true
      },
      type:'indicator',
      id:28,
      name:'用户统计',
      data: {
        func: 'hmjf'
      }
    },
    {
      box:{
        region:{top:220,left:960,width:600,height:300},
        inner:true
      },
      type:'line',
      id:29,
      name:'使用统计',
      data: {
        func: 'hmjf'
      }
    },
    {
      box:{
        region:{top:530,left:960,width:600,height:150},
        inner:true
      },
      type:'block',
      id:30,
      name:'留存用户',
      data: {
        func: 'hmjf'
      }
    }
  ]),
  LARGE3_2_CONFIG:LARGE3_COMMON_CONFIG.concat([
    {
      box:{region:{top:20,left:945,width:630,height:680}},
      type:'empty',
      id:18,
      name:'惠购生活',
      noNeedQuery:true
    },
    {
      box:{
        region:{top:60,left:960,width:600,height:150},
        inner:true
      },
      type:'indicator',
      id:28,
      name:'用户统计',
      data: {
        func: 'hgsh'
      }
    },
    {
      box:{
        region:{top:220,left:960,width:600,height:300},
        inner:true
      },
      type:'line',
      id:29,
      name:'使用统计',
      data: {
        func: 'hgsh'
      }
    },
    {
      box:{
        region:{top:530,left:960,width:600,height:150},
        inner:true
      },
      type:'block',
      id:30,
      name:'留存用户',
      data: {
        func: 'hgsh'
      }
    }
  ]),
  LARGE3_3_CONFIG:LARGE3_COMMON_CONFIG.concat([
    {
      box:{region:{top:20,left:945,width:630,height:680}},
      type:'empty',
      id:18,
      name:'生活缴费',
      noNeedQuery:true
    },
    {
      box:{
        region:{top:60,left:960,width:600,height:150},
        inner:true
      },
      type:'indicator',
      id:28,
      name:'用户统计',
      data: {
        func: 'shjf'
      }
    },
    {
      box:{
        region:{top:220,left:960,width:600,height:300},
        inner:true
      },
      type:'line',
      id:29,
      name:'使用统计',
      data: {
        func: 'shjf'
      }
    },
    {
      box:{
        region:{top:530,left:960,width:600,height:150},
        inner:true
      },
      type:'block',
      id:30,
      name:'留存用户',
      data: {
        func: 'shjf'
      }
    }
  ]),
  LARGE3_4_CONFIG:LARGE3_COMMON_CONFIG.concat([
    {
      box:{region:{top:20,left:945,width:630,height:680}},
      type:'empty',
      id:18,
      name:'绿色生活月刊',
      noNeedQuery:true
    },
    {
      box:{
        region:{top:60,left:960,width:600,height:150},
        inner:true
      },
      type:'indicator',
      id:28,
      name:'用户统计',
      data: {
        func: 'lsshyk'
      }
    },
    {
      box:{
        region:{top:220,left:960,width:600,height:300},
        inner:true
      },
      type:'line',
      id:29,
      name:'使用统计',
      data: {
        func: 'lsshyk'
      }
    },
    {
      box:{
        region:{top:530,left:960,width:600,height:150},
        inner:true
      },
      type:'block',
      id:30,
      name:'留存用户',
      data: {
        func: 'lsshyk'
      }
    }
  ]),
	LARGE4_CONFIG:[
		{
			box:{region:{top:20,left:20,width:905,height:680}},
			type:'category',
			id:13
		},
		{
			box:{
				region:{top:40,left:395,width:150,height:190},
				inner:true
			},
			type:'indicator',
			id:14,
			name:'功能总使用量'
		},
		{
			box:{
				region:{top:40,left:565,width:340,height:190},
				inner:true
			},
			type:'indicator',
			id:15,
			name:'排名前三使用功能'
		},
		{
			box:{
				region:{top:260,left:395,width:510,height:190},
				inner:true
			},
			type:'indicator',
			id:16,
			name:'流量人数'
		},
		{
			box:{
				region:{top:480,left:395,width:510,height:190},
				inner:true
			},
			type:'indicator',
			id:17,
			name:'三方应用'
		},
		{
			box:{region:{top:20,left:945,width:630,height:380}},
			type:'line',
			id:22,
			name:'功能应用排名'
		},
		{
			box:{region:{top:420,left:945,width:630,height:280}},
			type:'line',
			id:23,
			name:'用户流量去向占比'
		}
	],
	LARGE5_CONFIG:[
		{
			box:{region:{top:20,left:20,width:880,height:500}},
			type:'map',
			id:24,
			name:'当前交通拥堵情况',
			noNeedQuery:true
		},
		{
			box:{region:{top:20,left:920,width:320,height:500}},
			type:'heat',
			id:25,
			name:'未来4小时拥堵指数'
		},
		{
			box:{region:{top:20,left:1260,width:320,height:500}},
			type:'meter',
			id:26,
			name:'公共交通整体舒适度'
		},
		{
			box:{region:{top:540,left:20,width:1560,height:160}},
			type:'table2',
			id:27,
			name:'交通出行意愿'
		},
	],
}