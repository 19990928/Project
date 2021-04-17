$(function(){
	// 了解更多
	var flag = true;
	var num = 1;
	$('.miaos>img').click(function(){
		if(flag){
			flag=false;
			num++;
			if(num%2==0){
					$('.neir').slideToggle('slow',function(){
					flag=true;
				})
				$(this).attr('src','../img/hide.png').css('width','82px')
		 }else{
			 $('.neir').slideToggle('slow',function(){
			 	flag=true;
			 })
			 $(this).attr('src','../img/more.png').css('width','139px')
		 }
		}
	})
	
	// 延迟显示
	
	// $('.ship>p').delay(10000).animate({opacity:'1'},1000)
	$(document).scroll(function(){
		if($(document).scrollTop()>=500){
			$('.ship>p').delay(8000).animate({opacity:'1'},1000)
		}
	})
	
	
	// 点击切换变化颜色
	$('.ship>p>span').click(function(){
		$(this).css('background','#394243').parent().siblings().find('span').css('background','white')
	})
	
	
	 // 点击切换内容
	$('.yuan1>span').click(function(){
		$('.yinc').animate({height:'1547px'},1000)
		$('.fac1').slideDown()
		$('.fac2').slideUp()
		$('.fac3').slideUp()
		$('.ship>h4').hide()
	})
	
	// 点击切换内容
	$('.yuan2>span').click(function(){
		$('.yinc').animate({height:'1547px'},1000)
		$('.fac1').slideUp()
		$('.fac2').slideDown()
		$('.fac3').slideUp()
	})
	
	// 点击切换内容
	$('.yuan3>span').click(function(){
		$('.yinc').animate({height:'654px'},1000)
		$('.fac1').slideUp()
		$('.fac2').slideUp()
		$('.fac3').slideDown()
	})
	// 跳转
	$('.header>img:nth-of-type(1)').click(function(){
		$(location).attr('href','../index.html')
	})
})