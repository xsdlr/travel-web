const Regular = require('regularjs');
const service = require('../util/service');
const tpl = require('./index.html');
const _ = require('../util/util');

const app = Regular.extend({

    template: tpl,

    data:{
    	
    },

    config(data){
    	this.supr(data);

		
    },

    onFullScreen(){
    	_.toggleFullScreen(document.body,'enter');
    },

})



new app().$inject('#app');