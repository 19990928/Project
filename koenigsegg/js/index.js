$(function(){
	// 滑动到固定位置吸顶导航改变背景颜色,更换图片，文字颜色，反之，消失
	$(document).mousewheel(function(even){
		if(even.deltaY<0&&scrollY>=70){
			$('.nav').css('background','white');
			$('.list>li>a').css('color','black');
			$('.navleft>a>img').attr('src','img/11.png');
			$('.yinc').css('height','auto').css('paddingTop','30px')
		}else{
			$('.nav').css('background','none');
			$('.list>li>a').css('color','white');
			$('.navleft>a>img').attr('src','img/1.png');
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

  // 轮播图
$(function(){
	// 1.点击左右按钮切换图片
	// 2.自动切换图片
	// 3.点击小圆点更换对应图片，且添加小圆点背景颜色
	// 4.鼠标移入图片时，停止定时器，移出执行定时器
	// 设置变量
	var num = 0;
	// 设置定时器
	var time = setInterval(run,5000);
	// console.log($('.fontone').length)
	// 给大盒子设置移入移出事件
	$('.firstplate').hover(function(){
		// 鼠标移入时执行
		clearInterval(time);
	},function(){
		// 鼠标移出时执行
		time = setInterval(run,5000);
	})
	// 定义函数
	function run(){
		num++;
		// 设置num的范围
		if(num>=$('.fontone').length){
			num=0;
		}
		$('.fontone').eq(num).css('display','block').siblings('.fontone').css('display','none');
		$('.cirs>li').eq(num).css('background','white').siblings().css('background','transparent');
		}
		// 给小圆点绑定点击事件
		$('.cirs>li').click(function(){
			num = $(this).index()-1;
			run();
		})
		// 给右边按钮绑定点击事件
		$('.right').click(run);
		// 给左边函数绑定点击事件
		$('.left').click(function(){
			num--;
			// 设置num取值范围
			if(num<0){
				num=$('.fontone').length-1;
			}
			$('.fontone').eq(num).css('display','block').siblings('.fontone').css('display','none');
			$('.cirs>li').eq(num).css('background','white').siblings().css('background','transparent');
		})
})


// 滑动到固定位置依次出现滑出特效
$(function(){
	$(document).mousewheel(function(even){
		// 向下滚-1    
		// 向上滚1  
		// console.log(scrollY);
		if(even.deltaY<0&&scrollY>=890){
			$('.rightbox').animate({left:'0px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=950){
			$('.leftmainone').animate({top:'0px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=1010){
			$('.leftmaintwo').animate({top:'145px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=1141){
			$('.twoleftbox').animate({left:'0px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=1200){
			$('.rightmainone').animate({top:'0px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=1300){
			$('.rightmaintwo').animate({top:'145px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=1500){
			$('.fourth>p').animate({top:'33px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=1700){
			$('.fifthmain').animate({top:'0px',opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=2100){
			$('.sixth>p').animate({opacity:'1'},1000);
		}
		if(even.deltaY<0&&scrollY>=2300){
			$('.seventh').animate({opacity:'1'},1000);
		}
	})
})
// 点击给多图片出现图片
var flag = true;
var qieh = 1	;
$(function(){
	// 给点击更过绑定点击事件
	$('.sbi>p').click(function(){
		if(flag){
			flag=false;
			qieh++;
		if(qieh%2==0){
			$('.tptwo').slideToggle("slow",function(){flag=true}).next('.sbi').find('p').text('关闭图库');
		}else{
			$('.tptwo').slideToggle("slow",function(){flag=true}).next('.sbi').find('p').text('更多图片');
		}
		}
		
	})
})
