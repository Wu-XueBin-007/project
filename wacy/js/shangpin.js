$(function(){
	
	
	//加载头部
	$(".header").load('header.html',function(){
		
	})
//	加载尾部
	$('.bottom').load('bottom.html',function(){
		
		
	})
	
	
	//商品详情 评价   常见问题
	$('.active').click(function(){
		
		
		$(this).addClass('now').siblings().removeClass('now')
		
		$(this).css('color','red').siblings().css('color','')
		
		
		$('.com').stop().hide()
		$('.com').eq($(this).index()).stop().show()
		
	})
	
	
	//尺码
	$('.swatchanchor').hover(function(){
		$(this).css({'border':'1px solid red'})
		
		
	},function(){
		$(this).css({'border':''})
	})
	
	//图片点击切换
	
	$('.slick_list>img').click(function(){
//		alert(1)
       var num=$(this).index()+1
		$('.insets').attr('src',$(this).attr("src"))
		
	})
	
	
	//商品数量加减
	$('.addbtn').click(function(){
		
		var num= parseInt($('.txt').val())
		$('.txt').val(num+1)
		
		
	})
	$('.removebtn').click(function(){
		
		var num= parseInt($('.txt').val())
		$('.txt').val(num-1)
		if($('.txt').val()<1){
			$('.txt').val(1)
			
		}
		
	})
	
	
	//加载对应pid商品
	var pid=window.location.search.substr(1);
//			console.log(pid)
			
		$.ajax({
					type:"get",
					url:"js/productldetail.json",
					async:true
				}).done(function(result){
			           
//					console.log(result)
                     var qaq=result.date
					var truedata=null;
					$.each(qaq, function(index,ele) {
						if(pid==ele.pid){
							
							 truedata=ele;
							
						}
					});
					
			$(".insets").attr("src",truedata.imgsrc);
			$('.product_contents>h1').html(truedata.name)
			$('.first').attr("src",truedata.imgsrc)
			
			$('.introduce>img').attr("src",truedata.imgsrc)
			$('.xiaotu').attr("src",truedata.imgsrc);
			$('.price_standard').html(truedata.product_standard_price)
			$(".product_brand").html(truedata.name)	
			$(".price_sales").html(truedata.price)
				
				});
			
	
	$('.add').click(function(){
		var pid=window.location.search.substr(1)
		
		window.location.href='gouwuche.html?'+pid
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})