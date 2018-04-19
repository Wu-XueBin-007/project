$(function(){
	
	//点击回到顶部
	$(window).scroll(function(){
//      console.log($(window).scrollTop())
		if($(window).scrollTop()>800){
			
			$('.scroll_to_top').stop().show()
			
			
		}else{
			$('.scroll_to_top').stop().hide()
			
		}
		
	})
	
	
	
	
	$('.scroll_to_top').click(function(){
		
    	  $("html,body").animate({scrollTop:0},500);
      })

	
	//二级菜单

//	$("#nav_wrap>ul>li").click(function(){
//		if($(this).hasClass("bb")){
//			$('#nav_wrap>ul>li').removeClass("bb");
//			$("#con").hide();
//		}else{
//			$("#con").show();
//			$(this).addClass("bb").siblings().removeClass("bb");
//		}
//	
//		var index=$(this).index();
//		$("#con>div").eq(index).show().siblings().hide();
//		console.log($(".third:eq("+index+")>li"))
//			$(".third:eq("+index+")>li").mouseenter(function(){
//				
//				var ind=$(this).index();
//				
//				$(".third_con:eq("+index+")>div").eq(ind).show().siblings().hide();
//			})
//	
//		
//		
//	})
//	

	
	
	
	
	//三级菜单
	
	$('.menucl').click(function(){
		$('.women_acc_promotion_brand').stop().hide()
	   $('.menu_vertical').stop().hide()
		
		$(this).siblings().stop().show() 
       
	})
	
	
	//
	$('.menu_vertical>ul>li').hover(function(){
		
		$(this).addClass('border').siblings().removeClass('border')
		$('.women_acc_promotion_brand').css('display','none')
		$('.women').css('display','none')
		$(this).next().css('display','block')
		
	})
	

})