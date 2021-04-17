$(function(){
	// 滑动到固定位置吸顶导航改变背景颜色,更换图片，文字颜色，反之，消失
	$(document).mousewheel(function(even){
		// even.deltaY<0向下滚
		// even.deltaY>0向上滚
		if(even.deltaY<0&&scrollY>=10){
			$('.nav').css('background','white');
			$('.list>li>a').css('color','black');
			$('.navleft>a>img').attr('src','../img/11.png');
			$('.yinc').css('height','auto').css('paddingTop','30px')
		}else{
			$('.nav').css('background','none');
			$('.list>li>a').css('color','white');
			$('.navleft>a>img').attr('src','../img/1.png');
			$('.yinc').css('height','auto').css('paddingTop','8px')
		}
		if(even.deltaY>0&&scrollY>=400){
			$('.nav').css('background','white');
			$('.list>li>a').css('color','black');
			$('.navleft>a>img').attr('src','img/11.png');
			$('.yinc').css('height','auto').css('paddingTop','30px')
		}
	})
		
})