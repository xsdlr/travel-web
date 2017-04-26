var operaBtn = $('#opera-btn');
var opearMenu = $('#opera-menu');

operaBtn.click(function(){
	opearMenu.addClass('z-sel');
})

opearMenu.click(function(){
	opearMenu.removeClass('z-sel');	
})