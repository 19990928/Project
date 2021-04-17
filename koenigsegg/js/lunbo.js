$(function(){
	// 设置变量
	var num = 0;
	// 给li绑定点击事件,除了当前点击，其他全部改变
	$('.gudin>li').click(function(){
		// 当前图片变亮，其他变黑
		$(this).find('img').css('filter','saturate(100%)').parent().siblings().find('img').css('filter','saturate(0)');
		num = $(this).index();
		// console.log(num)
		// 当点击左侧图片时，第一块右侧大图改变
		$('.swiper-slide:nth-of-type(1)>img').eq(num).css('opacity','1').siblings('.swiper-slide:nth-of-type(1)>img').css('opacity','0')
		
		// 当点击左侧图片时，第二块右侧大图改变
		$('.swiper-slide:nth-of-type(2)>img').eq(num).css('opacity','1').siblings('.swiper-slide:nth-of-type(2)>img').css('opacity','0')
	})
		// 第二块
		// 给li绑定点击事件,除了当前点击，其他全部改变
		$('.gudintwo>li').click(function(){
			// 当前图片变亮，其他变黑
			$(this).find('img').css('filter','saturate(100%)').parent().siblings().find('img').css('filter','saturate(0)');
			num = $(this).index();
			// console.log(num)
			// 当点击左侧图片时，第二块右侧大图改变
			$('.swiper-slide:nth-of-type(2)>img').eq(num).css('opacity','1').siblings('.swiper-slide:nth-of-type(2)>img').css('opacity','0')
		})
		// 第三块
		// 给li绑定点击事件,除了当前点击，其他全部改变
		$('.gudinthree>li').click(function(){
			// 当前图片变亮，其他变黑
			$(this).find('img').css('filter','saturate(100%)').parent().siblings().find('img').css('filter','saturate(0)');
			num = $(this).index();
			// console.log(num)
			// 当点击左侧图片时，第二块右侧大图改变
			$('.swiper-slide:nth-of-type(3)>img').eq(num).css('opacity','1').siblings('.swiper-slide:nth-of-type(3)>img').css('opacity','0')
		})
		// 第四块
		// 给li绑定点击事件,除了当前点击，其他全部改变
		$('.gudinfour>li').click(function(){
			// 当前图片变亮，其他变黑
			$(this).find('img').css('filter','saturate(100%)').parent().siblings().find('img').css('filter','saturate(0)');
			num = $(this).index();
			// console.log(num)
			// 当点击左侧图片时，第二块右侧大图改变
			$('.swiper-slide:nth-of-type(4)>img').eq(num).css('opacity','1').siblings('.swiper-slide:nth-of-type(4)>img').css('opacity','0')
		})
})

