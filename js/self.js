$(function(){
	$('.shadows').hover(function() {
		$(this).children('div').addClass('img-shadow');
		$(this).children('div').css('background-position','center center');
	},function(){
		$(this).children('div').removeClass('img-shadow');
		$(this).children('div').css('background-position','center top');
	})

})