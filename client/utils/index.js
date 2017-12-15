
function obj2query(data){
	let query = '';
	if( !data ) return query;
	for( let i in data ){
	  	query += `${i}=${encodeURIComponent(data[i])}&`
	}
	return query.replace(/&$/, '');
}

/**
 * 时期格式化
 */
let fmap = {
	yyyy(date){
		return date.getFullYear();
	},
	MM(date){
		return fix(date.getMonth() + 1);
	},
	dd(date){
		return fix(date.getDate());
	},
	HH(date){
		return fix(date.getHours());
	},
	mm(date){
		return fix(date.getMinutes());
	},
	ss(date){
		return fix(date.getSeconds());
	}
}
let trunk = new RegExp(Object.keys(fmap).join('|'),'g');
function fix(str){
  str = '' + (str || '');
  return str.length <= 1? '0' + str : str;
}
function format (d, fmt = 'yyyy-MM-dd HH:mm:ss') {
  const date = typeof d === 'number' ? new Date(d) : d;
  const o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (const k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function toggleFullScreen(element,type){
  if(type == 'enter'){
    if (!document.mozFullScreen && !document.webkitFullScreen) {
      if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullScreen){
        element.webkitRequestFullScreen();
      }else if(element.msRequestFullscreen){
        element.msRequestFullscreen();  
      }
    }
  }else{
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitCancelFullScreen){
      document.webkitCancelFullScreen();
    }else if(document.msExitFullscreen){
      document.msExitFullscreen();
    }
  }
}


export default {
	obj2query,
    format,
    toggleFullScreen
}
