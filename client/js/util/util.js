
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
function format(value,format){
	format = format || 'yyyy-MM-dd HH:mm:ss';
	if(!value) return;
	value = new Date(value);
	return format.replace( trunk, (cap) => fmap[cap]? fmap[cap](value): '');
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


module.exports = {
	obj2query,
    format,
    toggleFullScreen
}
