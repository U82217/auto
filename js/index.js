$(function(){

	$('.banner').hover(function() {
		$('.mbtn,.dot').fadeIn(500);
	}, function() {
		$('.mbtn,.dot').fadeOut(500);
	});

	$('.lifes .life-col').hover(function() {
		$(this).children('div').children('.life-caption').children('.txt-hide').fadeIn(500);
		$(this).children('div').children('.life-caption').children('.my-underline').hide();
		$(this).children('div').children('.bor').fadeIn(100);
	}, function() {
		$(this).children('div').children('.life-caption').children('.txt-hide').hide();
		$(this).children('div').children('.life-caption').children('.my-underline').show();
		$(this).children('div').children('.bor').fadeOut(100);
	});

	
})
