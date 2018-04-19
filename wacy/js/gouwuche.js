$(function(){
	
	
	
	
	//加载头部
	$(".header").load('header.html',function(){
		
	})
	//加载尾部
	$('.bottom').load('bottom.html',function(){
		
		
	})
	
	
    //商品数量加减
		$('.quantity_add').click(function(){
		
		var num= parseInt($('.input_text').val())
		$('.input_text').val(num+1)
		$('.price').html(1731*$('.input_text').val())
		
		

	})
	$('.quantity_remove').click(function(){
		
		var num= parseInt($('.input_text').val())
		$('.input_text').val(num-1)
		if($('.input_text').val()<1){
			$('.input_text').val(1)
			
		}
		
		
		$('.price').html(1731*$('.input_text').val())

		
	})
	
	$('.input_text').blur(function(){
		
		$('.price').html(1731*$('.input_text').val())
		
	})
	
	
	
	
	//按钮选中
	$('.check_all>input').click(function(){
		var xx=$(this).attr("checked");
		if(xx==undefined){
			
			xx=false;
			
		}
		$('.combined>span').html(1731*$('.input_text').val())
		$('.generations').attr('checked',xx)
	})
	
	//删除
	$('.rem').click(function(){
		
		$('.determine').stop().show()
		$('.shadow').stop().show()

	})

	$('.ui_button_text').click(function(){
		
		$('.determine').stop().hide()
		$('.shadow').stop().hide()
		
	})
	
	
	//
	$('.turer').click(function(){
		
		$('.tr').remove()
		
	})

	

	
	
	var pid=window.location.search.substr(1)
	console.log(pid)
		$.ajax({
		type:"get",
		url:"js/productldetail.json",
		async:true
	}).done(function(result){
		
		var qaq=result.date
		var liststr=""
		loaddata(qaq,$("tbody"))
		function loaddata(listdata,parentele){
			liststr=""
			$.each(listdata, function(index,ele) {
				if(pid==ele.pid){
//					console.log(ele)
					
				
				liststr+='<tr class="tr">'+
						'<td class="check_all">'+

							'<input type="checkbox" class="generations" />'+
							'<img src="'+ele.imgsrc+'" />'+
						'</td>'+
						'<td class="tl item_details">'+
							'<div class="product_list_item">'+
								'<a href="" title="'+ele.name+'"> '+ele.name+'</a>'+
								'<span>淡粉红/桑紫色</span>'+
							'</div>'+

							'<span>美国直邮</span>'+
						'</td>'+
						'<td class="tc">'+
							'<span class="price_sales sales">'+ele.price+'</span>'+
							'<span class="price_standard">'+ele.product_standard_price+'</span>'+
						'</td>'+
						'<td class="tc item_quantity clear">'+
							'<input type="button" value="-" class="quantity_remove fl" />'+
							'<input type="text" value="1" class="input_text fl" />'+
							'<input type="button" value="+" class="quantity_add fl" />'+
						'</td>'+
						'<td class="tc">'+
							'<span class="price_sales price">¥1,731.00</span>'+
							'<div class="hide_for_mobile">'+
								'<span>(</span>'+
								'<span>预计税费:</span>'+
								'<span class="">'+ele.price*0.12+'</span>'+
								'<span>)</span>'+
							'</div>'+

						'</td>'+
						'<td class="tc">'+
							'<a href="" title="将此项商品移入愿望清单">移入愿望清单</a><br />'+
							'<span class="rem">删除</span>'+

						'</td>'+
					'</tr>'
			}})
			parentele.append(liststr)
			
		}
		
	}).fail(function(){
						alert("失败")
					})
	
	
	
	
	
	
	
	
	
	
	
	
	
})