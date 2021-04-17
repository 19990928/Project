$(function(){
	// 点击图标更换样式
	var num = 1;
	$('.moon').click(function(){
		num++;
		if(num%2==0){
			$('body').css({background:'url(img/splatter-dark.png) repeat',backgroundSize:'100%'})
			// 改变图标
			$('.moon').css('background','#000000')
			$('.moon>img').attr('src','img/sun.png')
			// 改变导航栏
			$('nav>a').css({color:'white'})
			$('nav>a:last-child').css({background:'#ffffff',color:'#000000'})
			// 改变第一板块文字
			$('.leftMain>h1').css('color','white')
			$('.leftMain>p').css('color','white')
			$('.leftMain>h2').css('color','white')
			$('.leftMain>a').css({background:'white',color:'#000000'})
				// 改变第一板块图片
			$('.flexRight>img').eq(0).attr('src','img/layer-0-dark.png')
			$('.flexRight>img').eq(1).attr('src','img/layer-1-dark.png')
			$('.flexRight>img').eq(2).attr('src','img/layer-2-dark.png')
			$('.flexRight>img').eq(3).attr('src','img/layer-3-dark.png')
			$('.flexRight>img').eq(4).attr('src','img/layer-4-dark.png')
			$('.flexRight>img').eq(5).attr('src','img/layer-5-dark.png')
			$('.flexRight>img').eq(6).attr('src','img/hero-dark.png')
			// 第二板块文字
			$('.AboutMainBox').css('background','#0000004d')
			$('.AboutMainBox>h2').css('color','white')
			$('.AboutMainBox>h3').css('color','white')
			$('.AboutMainBox>p').css('color','#cbd5e1')
			$('.AboutMainBox>h4').css('color','white')
			$('.talk>h4').css('color','white')
			$('.talk>p').css('color','white')
			$('.talk>a').css({color:'#000000',background:'white'})
			// 第二板块图片
			$('.detalLeft>img').attr('src','img/float-1-dark.png')
			$('.detalRight>img').attr('src','img/float-2-dark.png')
			// 第三板块
			$('.people').css('background','#ffffff')
			$('.til>h2').css('color','#000000')
			$('.til>h3').css('color','#000000')
			$('.menpiao>h4').css('color','#000000')
			$('.menpiao>p').css('color','#000000')
			$('.menpiao>p>a').css({color:'white',background:'#000000'})
			$('.out').css('background','#E2E8F0')
			$('.outleft>p').css('color','#000000')
			$('.outright>a').css({background:'#334155',color:'white'})
			// 第三板块图片
			$('.much>li>img').eq(0).attr('src','img/11.jpg')
			$('.much>li>img').eq(1).attr('src','img/22.jpg')
			$('.much>li>img').eq(2).attr('src','img/33.jpg')
			$('.much>li>img').eq(3).attr('src','img/44.jpg')
			$('.much>li>img').eq(4).attr('src','img/55.jpg')
			$('.much>li>img').eq(5).attr('src','img/66.jpg')
			$('.much>li>img').eq(6).attr('src','img/77.jpg')
			$('.much>li>img').eq(7).attr('src','img/88.jpg')
			$('.outleft>p>img').eq(0).attr('src','img/jy1.png')
			$('.outleft>p>img').eq(1).attr('src','img/sp1.png')
			
			// 第四板块
			// $('.studyTime').css('background','#000000')
			$('.studyTimeMian').css('background','#00000099')
			$('.studyTimeMian>h2').css('color','white')
			$('.studyTimeMian>h3').css('color','white')
			$('.studyTimeMian>p').css('color','#cbd5e1')
			$('.kec>li').css('background','#0f172a')
			$('.kec>li>span').eq(1).css('color','white')
			$('.kec>li>span').eq(2).css('color','white')
			$('.kec>li>span').eq(4).css('color','white')
			$('.kec>li>span').eq(5).css('color','white')
			$('.kec>li>span').eq(7).css('color','white')
			$('.kec>li>span').eq(8).css('color','white')
			$('.kec>li>span').eq(10).css('color','white')
			$('.kec>li>span').eq(11).css('color','white')
			$('.kecMain>h2').css('color','white')
			$('.kecMain>p').css('color','#f1f5f9')
			// 第四板块图片
			$('.dayleftone>img').attr('src','img/float-3-dark.png')
			$('.daylefttwo>img').attr('src','img/float-5-dark.png')
			$('.dayright>img').attr('src','img/float-6-dark.png')
			// 第五板块
			$('.friends').css('background','#0f172a80')
			$('.friendsMs>h2').css('color','white')
			$('.friendsMs>p').css('color','white')
			$('.friendsMain>h3').css('color','white')
			$('.hezuo>h4').css('color','white')
			$('.hezuo>p').css('color','white')
			$('.hezuo>p>a').css({background:'white',color:'#000000'})
			// 第六板块
			$('.fontmain').css('background','#00000099')
			// 第七板块
			$('.Canecomainleft').css('background','#000000')
			$('.Canecomainleft>h5').css('color','white')
			$('.Canecomainleft>p').css('color','white')
			$('.Canecomainright>img').attr('src','img/coop-dark.png')
			// 第八板块
			$('.footer').css({background:'url(img/splatter.png) repeat',backgroundSize:'1100px 1000px'})
			$('.footermainleft>p').css('color','#000000')
			
			$('.footermainleft>p>span').text(null)
			
			$('.footermainleft>font').css('color','#000000')
			$('.footermain>a').css({background:'#000000',color:'white'})
			$('.footermainleft>font>span').css('color','white')
			// 鼠标移入移出
			$('nav>a').hover(function(){
				$(this).css({background:'white',color:'#000000',borderRadius:'20px'})
			},function(){
				$(this).css({background:'none',color:'white',borderRadius:'20px'})
				$('nav>a').eq(4).css({background:'white',color:'#000000',borderRadius:'20px'})
			})
		}else{
			$('body').css({background:'url(img/splatter.png) repeat',backgroundSize:'100%'})
			// 改变图标
			$('.moon').css('background','#e2e8f0')
			$('.moon>img').attr('src','img/moon.png')
			// 改变导航栏
			$('nav>a').css({color:'#000000'})
			$('nav>a:last-child').css({background:'#000000',color:'white'})
			// 改变第一板块文字
			$('.leftMain>h1').css('color','#000000')
			$('.leftMain>p').css('color','#0f172a')
			$('.leftMain>h2').css('color','#0f172a')
			$('.leftMain>a').css({background:'#000000',color:'white'})
				// 改变第一板块图片
			$('.flexRight>img').eq(0).attr('src','img/layer-0.png')
			$('.flexRight>img').eq(1).attr('src','img/layer-1.png')
			$('.flexRight>img').eq(2).attr('src','img/layer-2.png')
			$('.flexRight>img').eq(3).attr('src','img/layer-3.png')
			$('.flexRight>img').eq(4).attr('src','img/layer-4.png')
			$('.flexRight>img').eq(5).attr('src','img/layer-5.png')
			$('.flexRight>img').eq(6).attr('src','img/hero.png')
			// 第二板块文字
			$('.AboutMainBox').css('background','#ffffffcc')
			$('.AboutMainBox>h2').css('color','#0f172a')
			$('.AboutMainBox>h3').css('color','#0f172a')
			$('.AboutMainBox>p').css('color','#334155')
			$('.AboutMainBox>h4').css('color','#0f172a')
			$('.talk>h4').css('color','#0f172a')
			$('.talk>p').css('color','#0f172a')
			$('.talk>a').css({color:'white',background:'#000000'})
			// 第二板块图片
			$('.detalLeft>img').attr('src','img/float-1.png')
			$('.detalRight>img').attr('src','img/float-2.png')
			// 第三板块
			$('.people').css('background','#000000')
			$('.til>h2').css('color','#ffffff')
			$('.til>h3').css('color','#ffffff')
			$('.menpiao>h4').css('color','#ffffff')
			$('.menpiao>p').css('color','#ffffff')
			$('.menpiao>p>a').css({color:'#000000',background:'white'})
			$('.out').css('background','none')
			$('.outleft>p').css('color','white')
			$('.outright>a').css({background:'#ef4444',color:'white'})
			// 第三板块图片
			$('.much>li>img').eq(0).attr('src','img/1.jpg')
			$('.much>li>img').eq(1).attr('src','img/2.jpg')
			$('.much>li>img').eq(2).attr('src','img/3.jpg')
			$('.much>li>img').eq(3).attr('src','img/4.jpg')
			$('.much>li>img').eq(4).attr('src','img/5.jpg')
			$('.much>li>img').eq(5).attr('src','img/6.jpg')
			$('.much>li>img').eq(6).attr('src','img/7.jpg')
			$('.much>li>img').eq(7).attr('src','img/8.jpg')
			$('.outleft>p>img').eq(0).attr('src','img/jy.png')
			$('.outleft>p>img').eq(1).attr('src','img/sp.png')
			// 第四板块
			// $('.studyTime').css('background','#ffffffcc')
			$('.studyTimeMian').css('background','#ffffffcc')
			$('.studyTimeMian>h2').css('color','#0f172a')
			$('.studyTimeMian>h3').css('color','#0f172a')
			$('.studyTimeMian>p').css('color','#334155')
			$('.kec>li').css('background','#f1f5f9')
			$('.kec>li>span').eq(1).css('color','#000000')
			$('.kec>li>span').eq(2).css('color','#000000')
			$('.kec>li>span').eq(4).css('color','#000000')
			$('.kec>li>span').eq(5).css('color','#000000')
			$('.kec>li>span').eq(7).css('color','#000000')
			$('.kec>li>span').eq(8).css('color','#000000')
			$('.kec>li>span').eq(10).css('color','#000000')
			$('.kec>li>span').eq(11).css('color','#000000')
			$('.kecMain>h2').css('color','#000000')
			$('.kecMain>p').css('color','#0f172a')
			// 第四板块图片
			$('.dayleftone>img').attr('src','img/float-3.png')
			$('.daylefttwo>img').attr('src','img/float-5.png')
			$('.dayright>img').attr('src','img/float-6.png')
			// 第五板块
			$('.friends').css('background','#e2e8f080')
			$('.friendsMs>h2').css('color','#0f172a')
			$('.friendsMs>p').css('color','#0f172a')
			$('.friendsMain>h3').css('color','#0f172a')
			$('.hezuo>h4').css('color','#0f172a')
			$('.hezuo>p').css('color','#0f172a')
			$('.hezuo>p>a').css({background:'#000000',color:'white'})
			// 第六板块
			$('.fontmain').css('background','#ffffffcc')
			// 第七板块
			$('.Canecomainleft').css('background','#ffffff')
			$('.Canecomainleft>h5').css('color','#0f172a')
			$('.Canecomainleft>p').css('color','#0f172a')
			$('.Canecomainright>img').attr('src','img/coop.png')
			// 第八板块
			$('.footer').css({background:'url(img/splatter-dark.png) repeat',backgroundSize:'1100px 1000px'})
			$('.footermainleft>p').css('color','#cbd5e1')
			
			$('.footermainleft>p>span').text()	
			
			$('.footermainleft>font').css('color','#cbd5e1')
			$('.footermain>a').css({background:'white',color:'#000000'})
			$('.footermainleft>font>span').css('color','#000000')
			// 鼠标移入移出
			$('nav>a').hover(function(){
				$(this).css({background:'#e2e0f0',color:'#000000',borderRadius:'20px'})
				$('nav>a').eq(4).css({background:'#000000',color:'white',borderRadius:'20px'})
			},function(){
				$(this).css({background:'none',color:'#000000',borderRadius:'20px'})
				$('nav>a').eq(4).css({background:'#000000',color:'white',borderRadius:'20px'})
			})
		}
	})
	// 点击滑动
	var flag = true;
	$('nav>a').eq(0).click(function(){
		if(flag){
			flag=false;
			$('html,body').animate({scrollTop:'1641px'},1000,function(){
				flag=true;
			});
		}
	})
	$('nav>a').eq(1).click(function(){
		if(flag){
			flag=false;
			$('html,body').animate({scrollTop:'3047px'},1000,function(){
				flag=true;
			});
		}
	})
	$('nav>a').eq(2).click(function(){
		if(flag){
			flag=false;
			$('html,body').animate({scrollTop:'4742px'},1000,function(){
				flag=true;
			});
		}
	})
})