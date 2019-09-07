$(function(){

	$('.banner').hover(function() {
		$('.mbtn,.dot').fadeIn(500);
	}, function() {
		$('.mbtn,.dot').fadeOut(500);
	});

	/*$('.dot li').mouseenter(function(e) {
		
		$(this).addClass('active').siblings().removeClass('active');
	});*/

	$('.lifes .life-col').hover(function() {
		$(this).children('div').children('.life-caption').children('.txt-hide').fadeIn(500);
		$(this).children('div').children('.life-caption').children('.my-underline').hide();
		$(this).children('div').children('.bor').fadeIn(100);
		// $(this).addClass('life-col1');
	}, function() {
		$(this).children('div').children('.life-caption').children('.txt-hide').hide();
		$(this).children('div').children('.life-caption').children('.my-underline').show();
		$(this).children('div').children('.bor').fadeOut(100);
		// $(this).removeClass('life-col1'
	});

	$('.wx,.aside-wx').hover(function() {
		$(this).children('div').show();
	}, function() {
		$(this).children('div').hide();	
	});
})
