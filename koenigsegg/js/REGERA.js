$(function(){
	// 滑动到固定位置吸顶导航改变背景颜色,更换图片，文字颜色，反之，消失
	$(document).mousewheel(function(even){
		// even.deltaY<0向下滚
		// even.deltaY>0向上滚
		if(even.deltaY<0&&scrollY>=100){
			$('.nav').css('background','white');
			$('.list>li>a').css('color','black');
			$('.navleft>a>img').attr('src','../img/11.png');
			$('.yinc').css('height','auto').css('paddingTop','30px');
		}else{
			$('.nav').css('background','none');
			$('.list>li>a').css('color','white');
			$('.navleft>a>img').attr('src','../img/1.png');
			$('.yinc').css('height','auto').css('paddingTop','8px')
		}
		if(even.deltaY>0&&scrollY>=300){
			$('.nav').css('background','white');
			$('.list>li>a').css('color','black');
			$('.navleft>a>img').attr('src','../img/11.png');
			$('.yinc').css('height','auto').css('paddingTop','30px')
		}
		// 当滚动条位置到500时，第四板块从右边滑出
		if(even.deltaY<0&&scrollY>=200){
			$('.fourth').animate({left:'0px'},1000);
		}
		if(even.deltaY<0&&scrollY>=800){
			$('.seven').animate({left:'0px'},1000);
		}
		if(even.deltaY<0&&scrollY>=1600){
			$('.tenth').animate({left:'0px'},1000);
		}
		if(even.deltaY<0&&scrollY>=2200){
			$('.thirteenth').animate({left:'0px'},1000);
		}
		if(even.deltaY<0&&scrollY>=2800){
			$('.sixteenth').animate({left:'0px'},1000);
		}
	})
	var flag=true;
	// 点击白框，第二板块显示，并移动到第二板块
		$('.first>span').click(function(){
			if(flag){
				flag=false;
				$('.swiper-container').css('height','853px');
				$('html,body').animate({scrollTop:635},1500),function(){
					flag=true;
				};
			$('.nav').css('background','white');
			$('.list>li>a').css('color','black');
			$('.navleft>a>img').attr('src','../img/11.png');
			$('.yinc').css('height','auto').css('paddingTop','30px')
			}
			// 当滚动条位置小于653时，再次点击移动到第二块位置
			if(scrollY<500){
				$('html,body').animate({scrollTop:635},1500)
				$('.nav').css('background','white');
				$('.list>li>a').css('color','black');
				$('.navleft>a>img').attr('src','../img/11.png');
				$('.yinc').css('height','auto').css('paddingTop','30px')
			}
		})
		// 第一次点击按钮滑动显示，第二次点击按钮滑动消失
		$('.anniuone').click(function(){
			$('.sixth').slideToggle('slow')
		})
		// 第一次点击按钮滑动显示，第二次点击按钮滑动消失
		$('.anniutwo').click(function(){
			$('.ninth').slideToggle('slow')
		})
		// 第一次点击按钮滑动显示，第二次点击按钮滑动消失
		$('.anniuthree').click(function(){
			$('.twelfth').slideToggle('slow')
		})
		// 第一次点击按钮滑动显示，第二次点击按钮滑动消失
		$('.anniufour').click(function(){
			$('.fifteenth').slideToggle('slow')
		})
		
		
		
		
		// 选项卡
		$('.miaosu>li').click(function(){
			var num = $(this).index();
			$(this).css({background:'black',color:'white'}).siblings().css({background:'#ebebeb',color:'#666'})
			// $('.wrapp').eq(num).css('display','block').siblings('.wrapp').css('display','none')
			$('.wrapp').eq(num).slideDown().siblings('.wrapp').slideUp();		
		})
})