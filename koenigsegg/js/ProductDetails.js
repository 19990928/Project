$(function(){
	// 页面加载完成时执行页面向上滑动
	$(document).ready(function(){
		$('.commodity').animate({top:'0px'},1500)
	})
	// 点击滑动切换
	var flag = true;
	$('.cirs>ul>li').click(function(){
		// 用于滑动图下标
		var num = $(this).index();
		$(this).css('opacity','1').siblings().css('opacity','.5')
		if(flag){
			flag=false;
			$('.bannerbox>ul').animate({left:-779*num+'px'},1000,function(){
				flag=true;
			})
			if(num>=4){
				$('.bannerbox>ul>li').animate({height:'522px'},1000)
				$('.commoditymain').animate({height:'1428px'},1000)
				$('.commodity').animate({height:'1428px'},1000)
			}else{
			$('.bannerbox>ul>li').animate({height:'1168px'},1000)
			$('.commoditymain').animate({height:'1816px'},1000)
			$('.commodity').animate({height:'1816px'},1000)
			}
		}
	})
	
	// 滑动点击改变透明度
	$('.cirs>ul>li').click(function(){
		$(this).css({opacity:'1',transition:'0.38s'}).siblings().css({opacity:'0.5',transition:'0.38s'})
	})
	
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
	})
	// 右侧购物袋关闭
	$('.guanbi').click(function(){
		if(flag){
			flag=false;
			$('.bag').animate({right:'-350px'},1000,function(){
				flag=true
			})
		}
	})
	
	// 选项卡
	$('.tabhk>li').click(function(){
		// 设置变量
		var num = $(this).index();
		$(this).addClass('xian').siblings().removeClass('xian')
		$('.huan>div').eq(num).css('display','block').siblings().css('display','none')
	})
	
	// 	点击尺码滑出库存，购物车变为可点
	$('.item>li').click(function(){
		$(this).css({outline:'3px solid #77a464',borderRadius:'2px'}).siblings().css({outline:'none',borderRadius:'2px'})
		// 滑出库存
		$('.kucun').slideDown();
		// 购物车变为可点
		$('.shopcat>a').css({cursor:'pointer',background:'#D6D1CA '})
	})
	
	// 滚动条固定位置滑出
	$(window).scroll(function(){
		if($(window).scrollTop()>=1400){
			$('.equipmentmain').animate({top:'0px'},1000)
		}
	})
	
	// 全屏放大镜
	$('.bannerbox>ul>li').click(function(){
		var num = $(this).index()
		console.log(num)
		// 获取点击图片的路径
		// var addres = $(this).attr('src')
		$('.fangdaj').css('display','block')
		$('.fdimg>img').eq(num).css('display','block').siblings().css('display','none')
		// console.log( $('.fdimg>img'))
		if(num>=4){
			$('.fdimg>img').eq(num).css({width:'auto',height:'634px'})
			$('.fdimg').css('marginLeft','-455px')
		}else{
			$('.fdimg').css('marginLeft','-211.5px')
		}
		
		//放大镜左右切换
		$('.right').click(function(){
			num++;
			$('.fdimg>img').eq(num).css('display','block').siblings().css('display','none')
			if(num>=4){
				$('.fdimg>img').eq(num).css({width:'auto',height:'634px'})
				$('.fdimg').css('marginLeft','-455px')
				
			}else{
				$('.fdimg').css('marginLeft','-211.5px')
			}
			if(num>=$('.bannerbox>ul>li').length-1){
				num=-1;
			}
		})
		// 左
		$('.left').click(function(){
			num--;
			$('.fdimg>img').eq(num).css('display','block').siblings().css('display','none')
			if(num<0){
				num=$('.bannerbox>ul>li').length-1
			}
			if(num<=3){
				$('.fdimg').css('marginLeft','-211.5px')
			}else{
				$('.fdimg>img').eq(num).css({width:'auto',height:'634px'})
				$('.fdimg').css('marginLeft','-455px')
			}
		})
	
		// 打开放大镜禁止滚动条滚动
		function unScroll(){
		    var top = $(document).scrollTop();
		    $(document).on('scroll.unable',function (e) {
		        $(document).scrollTop(top);
		    })
		}
		unScroll()
		// 点击图片，图片放大
		$('.fdimg>img').click(function(){
			$(this).animate({width:'820px',left:'-195px',top:'-120px'})
			if(num>=3){
					$('.fdimg>img').unbind('click')
				// $(this).unbind('click');
			}
		})
		// 双击图片，图片恢复
		$('.fdimg>img').dblclick(function(){
			$(this).animate({width:'100%',left:'0px',top:'0px'})
			if(num>=3){
				$('.fdimg>img').unbind('dblclick')
			}
		})
	})
	// 放大镜关闭
	$('.fdmain>span').click(function(){
		$('.fangdaj').css('display','none')
		// 关闭放大镜滚动条滚动
		function removeUnScroll(){
		    $(document).unbind("scroll.unable");
		}
		removeUnScroll()
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
	
	// 点击加号，数量加
	$('.shopcatleft>p:nth-of-type(2)').click(function(){
		var jia = $('.shopcatleft>input').val();
		jia++;
		$('.shopcatleft>input').val(jia);
		if(jia>9){
			jia=9;
			$('.shopcatleft>input').val(jia);
			confirm('一次最多购买9件噢')
		}
	})
	// 点击减号，数量减
	$('.shopcatleft>p:nth-of-type(1)').click(function(){
		var jian = $('.shopcatleft>input').val();
		jian--;
		$('.shopcatleft>input').val(jian);
		if(jian<1){
			jian=1;
			$('.shopcatleft>input').val(jian);
			confirm('买一件吧！')
		}
	})
	
	// 点击加入购物车添加商品
	$('#tianjia').click(function(){
		localStorage.setItem('imgs','../img/banner1.jpg');
		localStorage.setItem('title', '百万美元艺术');
		localStorage.setItem('price', '89.00');
		localStorage.setItem('shuliang', $('.shopcatleft>input').val());
		localStorage.setItem('jiesu', '89.00');
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