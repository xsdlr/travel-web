const Regular = require('regularjs');
const service = require('../util/service');
const tpl = require('./index.html');
const _ = require('../util/util');
const consts = require('../util/consts');

let dom = Regular.dom;
let hideElements = ['.g-hd'];   //需要隐藏的节点
let mainElement = '.g-mn';
let fullScreenArr = ['fullscreenchange','mozfullscreenchange','webkitfullscreenchange','msfullscreenchange'];

const app = Regular.extend({

    template: tpl,

    data:{
    	choiceArr:consts.choiceArr
    },

    config(data){
        let self = this;
    	this.supr(data);

		//全屏变化检测
        fullScreenArr.forEach(type => {
            dom.on(document.body,type,function(e) {
                self.changeMode();
            })
        })

        //for ie
        document.onmsfullscreenchange = function ( event ) {
          self.changeMode();
        }; 
    },

    onFullScreen(type){
    	_.toggleFullScreen(document.body,type);
    },

    changeActive(item){
        let data = this.data;
        data.choiceArr.forEach(choice => {
            choice.items.forEach(item => {
                item.active = false;
            })
        })
        item.active = true;
    },

    changeMode(){
        let data = this.data;
        data.mode = data.mode == 'full'?null:'full';

        if(data.mode=='full'){
            hideElements.forEach(item => {
                let element = document.querySelector(item);
                if(element){
                    element.style.display = 'none';
                }
            })
            dom.addClass(document.querySelector(mainElement),'z-full');
        }else{
            hideElements.forEach(item => {
                let element = document.querySelector(item);
                if(element){
                    element.style.display = '';
                }
            })
            dom.delClass(document.querySelector(mainElement),'z-full');
        }
        this.$update();
    }

})



new app().$inject('#app');