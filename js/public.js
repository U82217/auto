$(function(){
	$('.header-nav li').click(function(event) {
		$(this).children('a').addClass('nav-curr ').parent().siblings().children('a').removeClass('nav-curr');
	});

	/*鼠标滚动*/
	$(window).scroll(function(event) {
		var h=$(window).scrollTop();
		var x=$(window).width();
		if (h>=100) {
			$('.my-navbar').addClass('fixednav');
			$('.my-nav li a').addClass('fixeda');
			if (x>=992) {
				$('.my-logo,.search-cart').hide();
			}
		}else {
			$('.my-navbar').removeClass('fixednav');
			$('.my-nav li a').removeClass('fixeda');
			if (x>=992) {
				$('.my-logo,.search-cart').show();
			}

		}
	});

	$(window).resize(function(event) {
		var x=$(window).width();
		if (x<=992) {
				$('.my-logo,.search-cart').show();
		}
	});

	/*点击回到顶部*/
	$('.return-icon').click(function(event) {
		$('html,body').animate({'scrollTop':0}, 500);
	});


	$('.wx,.aside-wx').hover(function() {
		$(this).children('div').show();
	}, function() {
		$(this).children('div').hide();	
	});

})