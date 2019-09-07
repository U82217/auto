$(function(){
	var timer;
	var num=0;
	// 定时器
	function moveimg(){
		clearInterval(timer);
		timer=setInterval(function(){
			num++;
			if(num>6)
				{ 
					num=0;
					$('.tour-lis').css('left',-num*33.42+'%');
					num=1;
			 		$('.tour-lis').animate({'left':-num*33.42+'%'},500);   				
				}
				else{
					$('.tour-lis').animate({'left':-num*33.42+'%'},500);

				}
		},2000);
	}

	
	var x;

	moveimg();

	window.onresize=function(){
		
		x=$(window).width();
		if (x<=992) {
			clearInterval(timer);
			$('.tour-lis').css({'left':0},500);   				
		}
		else{
			moveimg();
		}
	};

		

		/*鼠标移入事件*/
		$('.tour-wrap .container').hover(function(){
			clearInterval(timer);
		},function(){
			moveimg();
		    if (x<=992) {
			clearInterval(timer);
			}
		})


		/*鼠标点击事件*/
		$('.tour-left').click(function(){
		num--;
		if (num<0) {
			num=6;
			$('.tour-lis').css('left',-num*33.42+'%');
			num=5;
			$('.tour-lis').animate({'left':-num*33.42+'%'},500);
		}
		else{
			$('.tour-lis').animate({'left':-num*33.42+'%'},500);
		}

	})

	$('.tour-right').click(function(){
		num++;
		if(num>6){ 
			num=0;
			$('.tour-lis').css('left',-num*33.42+'%');
			num=1;
			$('.tour-lis').animate({'left':-num*33.42+'%'},500);
		}else{
			$('.tour-lis').animate({'left':-num*33.42+'%'},500);

		}
	})


})