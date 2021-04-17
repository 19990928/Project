$(function(){
	var flag = true;
	// 返回顶部点击事件
	$('.dinbu').click(function(){
		if(flag){
			flag=false;
			$('html,body').animate({scrollTop:'0'},1000,function(){
				flag=true;
			});
		}
	})
	$(document).scroll(function(){
		if($(document).scrollTop()>=220){
			$('.dinbu').css('opacity','1')
		}else{
			$('.dinbu').css('opacity','0')
		}
	})
	
	// 右侧购物袋打开
	// 灰度
	$('.pcimgthreemain>p').click(function(){
		if(flag){
			flag=false;
			$('.bag').animate({right:'0px'},1000,function(){
				flag=true
			})
		}
		$('.huidu').css('display','block')
	})
	// 右侧购物袋关闭
	$('.guanbi').click(function(){
		if(flag){
			flag=false;
			$('.bag').animate({right:'-350px'},1000,function(){
				flag=true
			})
		}
		$('.huidu').css('display','none')
	})
	// 地址跳转
	$('.nav>ul>li:nth-of-type(2)').click(function(){
		$(location).attr('href','clothing.html')
	})
	$('.nav>ul>li:nth-of-type(3)').click(function(){
		$(location).attr('href','print.html')
	})
	$('.nav>ul>li:nth-of-type(4)').click(function(){
		$(location).attr('href','last.html')
	})
	$('.nav>ul>li:nth-of-type(5)').click(function(){
		$(location).attr('href','Accessories.html')
	})
	
	// 创建商品
	if(localStorage.getItem('imgs')!=null){
		$('.guanbi').after('<div class="bagmain"><img src="'+window.localStorage.getItem('imgs')+'" alt=""><p><span>'+window.localStorage.getItem('title')+'</span></p><p><i>'+window.localStorage.getItem('shuliang')+'×</i><span>$ '+window.localStorage.getItem('price')+'</span></p></div><div class="xiaoji"><p>小计:</p><i>$</i><span>&nbsp; '+window.localStorage.getItem('jiesu')*window.localStorage.getItem('shuliang')+'</span><font>&nbsp;（含增值税）</font></div><a href="ShoppingCart.html">查看购物车</a>')
	}
	
	if(localStorage.getItem('imgs')!=null){
		$('.pcimgthreemain>p>span:nth-of-type(2)').text(window.localStorage.getItem('jiesu')*window.localStorage.getItem('shuliang')+'（含增值税）')
	}else{
		$('.pcimgthreemain>p>span:nth-of-type(2)').text('00.00')
	}
	
	// 减
	if(localStorage.getItem('jian')!=null){
		$('.bagmain>p:nth-of-type(2)>i').text(window.localStorage.getItem('jian')+'×')
		$('.xiaoji>span').text(window.localStorage.getItem('jian')*89)
		$('.xiaoji>span').prepend('&nbsp;')
		$('.pcimgthreemain>p>span:nth-of-type(2)').text(window.localStorage.getItem('jian')*window.localStorage.getItem('price')+'（含增值税）')
	}
	// 加
	if(localStorage.getItem('jia')!=null){
		$('.bagmain>p:nth-of-type(2)>i').text(window.localStorage.getItem('jia')+'×')
		$('.xiaoji>span').text(window.localStorage.getItem('jia')*89)
		$('.xiaoji>span').prepend('&nbsp;')
		$('.pcimgthreemain>p>span:nth-of-type(2)').text(window.localStorage.getItem('jia')*window.localStorage.getItem('price')+'（含增值税）')
	}
})