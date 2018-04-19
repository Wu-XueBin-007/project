$(function(){
	
	//加载尾部
	$('.bottom').load('bottom.html',function(){
		
		
	})
	
	
	//验证手机号
	 var commonreg=/^\s+/g
     var phonereg= /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
       $('.phone').blur(function(){
       	

       	 if(commonreg.test($('.phone').val())||$('.phone').val()==''){
       	 	
       	   	$('.phonetext').html('此项不能留空')
       		$('.phone').css('background','#faeded')
       }else if(phonereg.test($('.phone').val())){
//     	$('.btn').css('background','#e11a2b')
       		$('.phonetext').html('')
       		$('.phone').css('background','')
       }else{
       	
       	$('.phone').css('background','#faeded')
       	$('.phonetext').html('手机号不正确')
//     	$('.btn').css('background','')
       }})

	
	
	//验证码
	$('.verifycode').click(function(){
		$('.verifycode').css({'background':'#666','font-Size':'14px'})
		
		$('.verifycode').val( Math.floor(Math.random()*899999+100000))
		
	})
			
	//判断输入的验证码
	
	$('.sms').blur(function(){
		 if(commonreg.test($('.sms').val())||$('.sms').val()==''){
       	 	
       	   	$('.smstxt').html('此项不能留空')
       		$('.sms').css('background','#faeded')
      }else if($('.sms').val()==$('.verifycode').val()){
      		$('.smstxt').html('')
      		$('.sms').css('background','')
      		
		
	}else{		
		$('.smstxt').html('验证码不匹配请重新输入或重新发送验证码')
		$('.sms').css('background','#faeded')
		$('.registered').css('background','')
	}
	
	})
	
	//判断密码
	
		var passreg = /^\w{8,12}$/
	$('.pass').blur(function() {

		if(commonreg.test($('.pass').val()) || $('.pass').val() == '') {
			$('.pass').css('background', '#faeded')
			$('.passtxt').html('此项不能留空')
		} else if(passreg.test($('.pass').val())) {
			$('.passtxt').html('')
			$('.btn').css('background', '#e11a2b')
			$('.passtxt').html('')
			
		} else {

			$('.passtxt').html('密码由字母或数字或下划线组成，长度8-20字符')
			$('.btn').css('background', '')
			$('.registered').css('background','')
		}

	})	
	$('.passdb').blur(function(){		
		if($('.passdb').val()==''){
			$('.passdb').css('background', '#faeded')
			$('.passdbtxt').html('此项不能留空')
		}else if ($('.pass').val()==$('.passdb').val()) {
			$('.passdbtxt').html('')
			if(passreg.test($('.pass').val())&&phonereg.test($('.phone').val())&&$('.sms').val()==$('.verifycode').val()){
				$('.registered').css('background','#e11a2b')
				$('.registered').click(function(){
					if(passreg.test($('.pass').val())&&phonereg.test($('.phone').val())&&$('.sms').val()==$('.verifycode').val()){
					alert('注册成功')}
				})
				}
			
		} else{
			$('.passdbtxt').html('两次输入的密码不一样')
			$('.registered').css('background','')
		}
		
		
	})
	
	
	
	
	
	

	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})