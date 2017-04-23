//全屏
var mode = null;
var fullScreenArr = ['fullscreenchange','mozfullscreenchange','webkitfullscreenchange','msfullscreenchange'];
var hideElements = ['.g-hd'];   //需要隐藏的节点
var mainElement = '.g-mn';

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

function onFullScreen(type){
	toggleFullScreen(document.body,type);
}

fullScreenArr.forEach(type => {
	document.body.addEventListener(type,function(e){
		changeMode();
	})
})

function changeMode(){
	mode = mode == 'full'?null:'full';
	if(mode=='full'){
        hideElements.forEach(item => {
            let element = document.querySelector(item);
            if(element){
                element.style.display = 'none';
            }
        })
        $(mainElement).addClass('z-full');
        $('#leave-fullscreen').css('display','block');
    }else{
        hideElements.forEach(item => {
            let element = document.querySelector(item);
            if(element){
                element.style.display = '';
            }
        })
        $(mainElement).removeClass('z-full');
        $('#leave-fullscreen').css('display','none');
    }
}

//侧边栏伸缩
var slide = 'open';
function onSlider(){
	slide = slide == 'open'?'close':'open';
	if(slide == 'close'){
		$('#gsd').addClass('z-close');
		$('#gmnc').addClass('z-close');
	}else{
		$('#gsd').removeClass('z-close');
		$('#gmnc').removeClass('z-close');
	}
}

//侧栏
var choiceBox = $('#choiceBox');
var html = '';
choiceArr.forEach(function(choice,index){
	html += '<div class="group z-open"><h4 class="f-bg '+ choice.className +'">'+ choice.name +'</h4><div class="items">';
	choice.items && choice.items.forEach(function(item,index2){
		html += '<div class="item '
		if(index==0 && index2==0){
			html += 'item-active'
		}
		html += '">'+ item.title +'</div>'
	})
	html += '</div></div>'
})
choiceBox.html(html);

$('.group').on('click',function(){
	if($(this).hasClass('z-open')){
		$(this).removeClass('z-open');
	}else{
		$(this).addClass('z-open');
	}
})

$('.group .item').on('click',function(event){
	event.stopPropagation();
	$('.group .item').removeClass('item-active');
	$(this).addClass('item-active');
})