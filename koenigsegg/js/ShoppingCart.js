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
		if($(document).scrollTop()>=100){
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
	$('.nav>ul>li:nth-of-type(1)').click(function(){
		$(location).attr('href','ScaleModel.html')
	})
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

	// 判断有无商品
	if(localStorage.getItem('imgs')!=null){
		$('.shoppingone').hide()
		$('.shoppingtwo').show()
		// 创建商品
		$('.spcattwoTop').after('<ul class="spcattwoMain"><li><img src="../img/gb.png" alt="""></li><li><img src="'+window.localStorage.getItem('imgs')+'"alt=""></li><li>'+window.localStorage.getItem('title')+'</li><li>$ '+window.localStorage.getItem('price')+'</li><li><div class="luoluo"><p>-</p><input type="number" value="'+window.localStorage.getItem('shuliang')+'"><p>+</p></div></li><li>$ '+window.localStorage.getItem('jiesu')*window.localStorage.getItem('shuliang')+'</li></ul>')
	}else{
		$('.shoppingone').show()
		$('.shoppingtwo').hide()
	}
	
	
	// 点击加号，数量加
	$('.luoluo>p:nth-of-type(2)').click(function(){
		var jia = $('.luoluo>input').val();
		jia++;
		$('.luoluo>input').val(jia);
		if(jia>9){
			jia=9;
			$('.luoluo>input').val(jia);
			confirm('一次最多购买9件噢')
		}
		$('.spcattwoMain>li:nth-of-type(6)').text('$ '+89*jia)
		$('.pcimgthreemain>p>span:nth-of-type(2)').text(jia*window.localStorage.getItem('price')+'（含增值税）')
		$('.bagmain>p:nth-of-type(2)>i').text(jia+'×')
		$('.xiaoji>span').text(jia*89)
		$('.xiaoji>span').prepend('&nbsp;')
	})
	// 点击减号，数量减
	$('.luoluo>p:nth-of-type(1)').click(function(){
		var jian = $('.luoluo>input').val();
		jian--;
		$('.luoluo>input').val(jian);
		if(jian<1){
			jian=1;
			$('.luoluo>input').val(jian);
			confirm('买一件吧！')
		}
		$('.spcattwoMain>li:nth-of-type(6)').text('$ '+89*jian)
		$('.pcimgthreemain>p>span:nth-of-type(2)').text(jian*window.localStorage.getItem('price')+'（含增值税）')
		$('.bagmain>p:nth-of-type(2)>i').text(jian+'×')
		$('.xiaoji>span').text(jian*89)
		$('.xiaoji>span').prepend('&nbsp;')
	})
	
	
	// 删除商品
	$('.spcattwoMain>li:nth-of-type(1)>img').click(function(){
		confirm('确定删除吗?')
		$('.shoppingone').show()
		$('.shoppingtwo').hide()
		window.localStorage.clear()
	})
	
	// 进行结算
	$('.jies').click(function(){
		$('.bigbox').css('display','block')
		// 打开滚动条禁止滚动
		function unScroll(){
		    var top = $(document).scrollTop();
		    $(document).on('scroll.unable',function (e) {
		        $(document).scrollTop(top);
		    })
		}
		unScroll()
	})
	// 点击任意地方关闭
	$('.bigbox').click(function(){
		$('.bigbox').css('display','none')
		// 取消滚动条禁止滚动
		function removeUnScroll(){
		    $(document).unbind("scroll.unable");
		}
		removeUnScroll()
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
	
	// 传入缓存 数量减
	$('.luoluo>p:nth-of-type(1)').click(function(){
		localStorage.setItem('jian',$('.luoluo>input').val());
	})
	// 数量加
	$('.luoluo>p:nth-of-type(2)').click(function(){
		localStorage.setItem('jia',$('.luoluo>input').val());
	})
	
	// 减
	if(localStorage.getItem('jian')!=null){
		$('.bagmain>p:nth-of-type(2)>i').text(window.localStorage.getItem('jian')+'×')
		$('.xiaoji>span').text(window.localStorage.getItem('jian')*89)
		$('.xiaoji>span').prepend('&nbsp;')
		$('.pcimgthreemain>p>span:nth-of-type(2)').text(window.localStorage.getItem('jian')*window.localStorage.getItem('price')+'（含增值税）')
		$('.luoluo>input').val(window.localStorage.getItem('jian'))
		$('.spcattwoMain>li:nth-of-type(6)').text('$ '+89*window.localStorage.getItem('jian'))
	}
	// 加
	if(localStorage.getItem('jia')!=null){
		$('.bagmain>p:nth-of-type(2)>i').text(window.localStorage.getItem('jia')+'×')
		$('.xiaoji>span').text(window.localStorage.getItem('jia')*89)
		$('.xiaoji>span').prepend('&nbsp;')
		$('.pcimgthreemain>p>span:nth-of-type(2)').text(window.localStorage.getItem('jia')*window.localStorage.getItem('price')+'（含增值税）')
		$('.luoluo>input').val(window.localStorage.getItem('jia'))
		$('.spcattwoMain>li:nth-of-type(6)').text('$ '+89*window.localStorage.getItem('jia'))
	}
})
