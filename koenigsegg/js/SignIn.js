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
	// 登录表单验证
	$('.tijiao>button').click(function(){
		checkUserName()
		checkpass()
		// checkremmber()
		ajaxtwo()
	})
	// 用户名
	var username;
	function checkUserName(){
		username = $('#username').val()
		if(/^[a-zA-Z0-9_]{4,16}$/.test(username)==false){
			$('#username').css('outline','2px solid red')
			$('.sigmian>p:nth-of-type(1)>span').text('用户名由4-16位字母、数字、下划线组成').css('color','red')
			$('#pass').attr('readonly','readonly')
		}else{
			$('.sigmian>p:nth-of-type(1)>span').text('用户名').css('color','#d6d1ca')
			$('.sigmian>p:nth-of-type(1)>span').append('<font style="color:red"> *</font>')
			$('#username').css('outline','none')
			$('#pass').removeAttr('readonly')
		}
	}	
	
	
	
	// 实时判断
	$('#username').blur(function(){
		var username = $('#username').val()
		if(/^[a-zA-Z0-9_]{4,16}$/.test(username)==true){
			$('.sigmian>p:nth-of-type(1)>span').text('用户名').css('color','#d6d1ca')
			$('.sigmian>p:nth-of-type(1)>span').append('<font style="color:red"> *</font>')
			$('#username').css('outline','none')
			$('#pass').removeAttr('readonly')
		}
	})	
	blur()
	
	
	
	
	
	// 密码
	// /^(\w){6,20}$/
	var pass;
	function checkpass(){
		 pass = $('#pass').val()
		if(/^(\w){6,20}$/.test(pass)==false){
			$('#pass').css('outline','2px solid red')
			$('.sigmian>p:nth-of-type(2)>span').text('密码由6-20	位字母、数字、下划线组成').css('color','red')
		}else{
			$('.sigmian>p:nth-of-type(2)>span').text('密码').css('color','#d6d1ca')
			$('.sigmian>p:nth-of-type(2)>span').append('<font style="color:red"> *</font>')
			$('#pass').css('outline','none');
			
			
			
		}
	}

	// 判断数据库有无存在号码，如果存在则可以登录，不存在则不可以登录
	function ajaxtwo(){
		$.ajax({
			url:'../php/zhuce.php',
			type:'get',
			data:{
				username:username,
				password:pass,
			},
			success:function(data){
				console.log(data)
				if(JSON.parse(data)!=''){
					$('.sigmian>p:nth-of-type(1)>span').text('登录成功').css('color','red')
				}else{
					// $.ajax({
					// 	url:'../php/zhucee.php',
					// 	type:'get',
					// 	data:{
					// 		username:email,
					// 		password:mima,
					// 	},
					// 	success:function(data){
					// 		console.log(data)
					// 	},
					// 	error:function(e){
					// 	console.log(e)
					// 	}
					// })
					$('.sigmian>p:nth-of-type(1)>span').text('该用户名还未注册').css('color','red')
				}
			},
			error:function(e){
			console.log(e)
			}
		})
	}
	














		
	// 寄存器
	$('#jicun').click(function(){
		checkemail()
		checkmima()
		ajaxone()
	})
	
	// 用户名
	var email;
	function checkemail(){
		 email = $('#email').val()
		 console.log(email)
		if(/^[a-zA-Z0-9_]{4,16}$/.test(email)==false){
			$('#email').css('outline','2px solid red')
			$('.registermian>p:nth-of-type(1)>span').text('用户名格式不正确，请重新输入！').css('color','red')
			$('#mima').attr('readonly','readonly')
		}else{
			$('.registermian>p:nth-of-type(1)>span').text('用户名').css('color','#d6d1ca')
			$('.registermian>p:nth-of-type(1)>span').append('<font style="color:red"> *</font>')
			$('#email').css('outline','none')
			$('#mima').removeAttr('readonly')
		}
	}	
	// 实时判断
	var email;
	$('#email').blur(function(){
		 email = $('#email').val()
		if(/^[a-zA-Z0-9_]{4,16}$/.test(email)==true){
			$('.registermian>p:nth-of-type(1)>span').text('用户名').css('color','#d6d1ca')
			$('.registermian>p:nth-of-type(1)>span').append('<font style="color:red"> *</font>')
			$('#email').css('outline','none')
			$('#mima').removeAttr('readonly')
		}
	})	
	blur()
	
	// 密码
	// /^(\w){6,20}$/
	var mima;
	function checkmima(){
		 mima = $('#mima').val();
		 console.log(mima)
		if(/^(\w){6,20}$/.test(mima)==false){
			$('#mima').css('outline','2px solid red')
			$('.registermian>p:nth-of-type(2)>span').text('密码由6-20	位字母、数字、下划线组成').css('color','red')
		}else{
			$('.registermian>p:nth-of-type(2)>span').text('密码').css('color','#d6d1ca')
			$('.registermian>p:nth-of-type(2)>span').append('<font style="color:red"> *</font>')
			$('#mima').css('outline','none')
		}
	}
	
	
	// 判断数据库有无存在号码，如果存在则报错，不存在则添加到数据库
	function ajaxone(){
		$.ajax({
			url:'../php/zhuce.php',
			type:'get',
			data:{
				username:email,
				password:mima,
			},
			success:function(data){
				console.log(data)
				if(JSON.parse(data)!=''){
					$('.registermian>p:nth-of-type(1)>span').text('用户名已被注册，请重新输入！').css('color','red')
				}else{
					$.ajax({
						url:'../php/zhucee.php',
						type:'get',
						data:{
							username:email,
							password:mima,
						},
						success:function(data){
							console.log(data)
						},
						error:function(e){
						console.log(e)
						}
					})
				}
			},
			error:function(e){
			console.log(e)
			}
		})
	}
	
	
	
	
	

	
	
	
	
	
	
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