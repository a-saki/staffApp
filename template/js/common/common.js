$(function(){

	$('nav .parent-li').hover(function(){
		if($(this).find('.inner-child-nav')[0]){
			$(this).find('.inner-child-nav').not(":animated").slideDown();
		}
	}, function(){
		if($(this).find('.inner-child-nav')[0]){
			$(this).find('.inner-child-nav').not(":animated").slideUp();
		}
	});

});


