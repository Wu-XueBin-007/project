
$(function(){
	
	
	//加载头部
	$(".header").load('header.html',function(){
		
	})
	
	//加载banner图
	
	$.ajax({
		type:"get",
		url:"js/product.json",
		async:true
	}).done(function(result){
		
		var banner=result.banner
		var liststr=""
		loaddata(banner,$(".banner"))
		function loaddata(listdata,parentele){
			liststr=""
			$.each(listdata, function(index,ele) {
				liststr+='<a pid="'+ele.pid+'" href="javascript:"><img src="'+ele.imgsrc+'"/></a>'
			})
			parentele.html(liststr)
			
		}
		
	}).fail(function(){
						alert("失败")
					})
	
	
	//加载商品详情
	     
	
	//加载  时尚好物   编辑推荐
		
	$.ajax({
		type:"get",
		url:"js/product.json",
		async:true
	}).done(function(result){
		
		var fashion=result.fashion;
		var Fashion_is_good=result.Fashion_is_good;
		var liststr=""
		loaddata(fashion,$(".fashion"))
		loaddata(Fashion_is_good,$(".Fashion_is_good"))
		
		function loaddata(listdata,parentele){
			liststr=""
			$.each(listdata, function(index,ele) {
				liststr+='<div pid="'+ele.pid+'" class="title_with_star_top">'+
				'<div class="left fl">'+
				'</div>'+
				'<div class="middle fl">'+
					'<span>'+ele.des+'</span>'+
					'<h2> <i class="icon_star">★</i>&nbsp;'+ele.name+'&nbsp;<i class="icon_star">★</i></h2>'+
				'</div>'+
				'<div class="right fr">'+

				'</div>'+

			'</div>'+

			'<a href="javascript:"title="'+ele.title+'"><img src="'+ele.imgsrc+'" class="datu"/></a>'+
			 '<div class=""style="clear:both ;">'+
         	
         '</div>'
			
			
			})
			parentele.html(liststr)
			
		}
//			$('.datu').on('click',function(){
// 				      
//						var pid=$(this).attr('pid')
//						console.log(pid)
//						window.location.href='shangpin.html?'+pid;	      	
// 			})
		
	}).fail(function(){
						alert("失败")
					})
	
	
	
	//加载商品列表
	$.ajax({
		type:"get",
		url:"js/product.json",
		async:true
	}).done(function(result){
//		console.log(result)
		var product_tile1=result.product_tile1;
		var product_tile2=result.product_tile2;
		var product_tile3=result.product_tile3;
		var product_tile4=result.product_tile4;
		var product_tile5=result.product_tile5;
		var product_tile6=result.product_tile6;
		var product_tile7=result.product_tile7;
		var product_tile8=result.product_tile8;
		var product_tile9=result.product_tile9;
		var product_tile10=result.product_tile10;
		var product_tile11=result.product_tile11;
		var product_tile12=result.product_tile12;
		var product_tile13=result.product_tile13;
		var product_tile14=result.product_tile14;
		var product_tile15=result.product_tile15;
		var product_tile16=result.product_tile16;
		var product_tile17=result.product_tile17;
		var product_tile18=result.product_tile18;
		var product_tile19=result.product_tile19;
		var product_tile20=result.product_tile20;
		var product_tile21=result.product_tile21;
		var product_tile22=result.product_tile22;
		var product_tile23=result.product_tile23;
		var product_tile24=result.product_tile24;
		var product_tile25=result.product_tile25;

		var liststr=""		
		loaddata(product_tile1,$(".product_tile1"))
		loaddata(product_tile2,$(".product_tile2"))
		loaddata(product_tile3,$(".product_tile3"))
		loaddata(product_tile4,$(".product_tile4"))
		loaddata(product_tile5,$(".product_tile5"))
		loaddata(product_tile6,$(".product_tile6"))
		loaddata(product_tile7,$(".product_tile7"))
		loaddata(product_tile8,$(".product_tile8"))
		loaddata(product_tile9,$(".product_tile9"))
		loaddata(product_tile10,$(".product_tile10"))
		loaddata(product_tile11,$(".product_tile11"))
		loaddata(product_tile12,$(".product_tile12"))
		loaddata(product_tile13,$(".product_tile13"))
		loaddata(product_tile14,$(".product_tile14"))
		loaddata(product_tile15,$(".product_tile15"))
		loaddata(product_tile16,$(".product_tile16"))
		loaddata(product_tile17,$(".product_tile17"))
		loaddata(product_tile18,$(".product_tile18"))
		loaddata(product_tile19,$(".product_tile19"))
		loaddata(product_tile20,$(".product_tile20"))
		loaddata(product_tile21,$(".product_tile21"))
		loaddata(product_tile22,$(".product_tile22"))
		loaddata(product_tile23,$(".product_tile23"))
		loaddata(product_tile24,$(".product_tile24"))
		loaddata(product_tile25,$(".product_tile25"))
	
		
		function loaddata(listdata,parentele){
			liststr=""
			$.each(listdata, function(index,ele) {
				liststr+='<div class="product_tile fl" pid="'+ele.pid+'" >'+
				'<a href="javascript:"title="'+ele.name+'"><img src="'+ele.imgsrc+'" /></a>'+

				'<div class="product_name">'+
					'<a class="over_hidden" href="javascript:">'+ele.name+'</a>'+
				'</div>'+
				'<div class="product_pricing">'+
					'<span class="present_price"><span>¥</span>'+ele.price+'</span> '+
					'<span class="product_standard_price">'+ele.product_standard_price+'</span>'+

				'</div>'+

			'</div>'

		
			})
			parentele.html(liststr)
			
		}
		
		 	$('.product_tile').on('click',function(){
   				      
						var pid=$(this).attr('pid')
						console.log(pid)
						window.location.href='shangpin.html?'+pid;	      	
 			})
	
	
		
	}).fail(function(){
						alert("失败")
					})
//	加载商品列表大图
     	$.ajax({
		type:"get",
		url:"js/product.json",
		async:true
	}).done(function(result){
		
		var product_tile26=result.product_tile26
		var product_tile27=result.product_tile27
		var product_tile28=result.product_tile28
		var product_tile29=result.product_tile29
		
		var liststr=""
		
		
		loaddata(product_tile26,$(".product_tile26"))
		loaddata(product_tile27,$(".product_tile27"))
		loaddata(product_tile28,$(".product_tile28"))
		loaddata(product_tile29,$(".product_tile29"))
		
		
		
		
		function loaddata(listdata,parentele){
			liststr=""
			$.each(listdata, function(index,ele) {
				liststr+='<a pid="'+ele.pid+'" href="javascript:"><img src="'+ele.imgsrc+'" title="'+ele.name+'" /></a>'
			})
			parentele.append(liststr)
			
		}
		
	}).fail(function(){
						alert("失败")
					})
	
	
	//加载内容资产
	$.ajax({
		type:"get",
		url:"js/product.json",
		async:true
	}).done(function(result){
		
		var product_tile30=result.product_tile30
		var liststr=""
		loaddata(product_tile30,$(".product_tile30"))
		function loaddata(listdata,parentele){
			liststr=""
			$.each(listdata, function(index,ele) {
				liststr+='<a pid="'+ele.pid+'" href="javascript:"><img src="'+ele.imgsrc+'" title="'+ele.name+'" /></a>'
			})
			parentele.html(liststr)
			
		}
		
	}).fail(function(){
						alert("失败")
					})
	
	
	
	
	
	//加载尾部
	$('.bottom').load('bottom.html',function(){
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	//鼠标经过banner开始
	$('.bannerbox').hover(function(){
		//左右按钮透明度变1
		$('.bannerbox_leftbtn,.bannerbox_rightbtn').stop().fadeTo("slow",1)
		//轮播停止
		clearInterval(t)
				
	},function(){
			//左右按钮透明度变0	
		$('.bannerbox_leftbtn,.bannerbox_rightbtn').stop().fadeTo("slow",0)	
		//轮播开始
		 t=setInterval(mover,2000)
	})
	//鼠标经过banner结束
	//轮播开始
	var t=setInterval(mover,500)
	var num=0;
	var flag=true
	function mover(){
		if(flag){
			flag=false
			num++
		      if(num>4){
		      	$(".banner").css({"left":'0'})
           			num=0
        	}
			$('.slick_dots>div').eq(num).addClass('now').siblings().removeClass('now')
			$('.banner').animate({left:-964*num},1000,function(){
				flag=true
			})

			
		}
         
	}
	
	//左点击
    $('.bannerbox_rightbtn').click(function(){
    	if(flag){
    		flag=false
    		
    		num--
    		if(num<0){
           		$(".banner").css({"left":'4820'})
           			num=4
           }
    	$('.slick_dots>div').eq(num).addClass('now').siblings().removeClass('now')
    	 $('.banner').animate({left:-964*num},1500,function(){
    	 	
    	 flag=true
    	 })}
    	 	
    	
    	
    	
    })
    //右点击
    
    $('.bannerbox_leftbtn').click(function(){
    	
    	mover()
    	
    })
    
    
    //圆点点击
    
     $('.slick_dots>div').click(function(){
     	if(flag){
     		flag=false
     	
     	
     	num=$(this).index()
     	$('.slick_dots>div').eq(num).addClass('now').siblings().removeClass('now')
     	 $('.banner').animate({left:-964*num},500,function(){
    	 	
    	 flag=true
    	 })
     	}
     	
     })























    //轮播结束
      
	
	
	//悬浮二维码
	$('.shut_down').click(function(){
		$('.home_wechat_qrcode_box').stop().hide(50)
		
	})
	
	
	//
	
	
	
	
	
	
	
	

	


























})
