$(function() {

	//加载尾部开始

	$('.bottom').load('bottom.html', function() {

	})

	

	//判断手机号
	var commonreg = /^\s+/g
	var phonereg =  /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
	$('.phone1').blur(function() {

		if($('.phone1').val() == ''||commonreg.test($('.phone1').val())) {
			$('.texterror1').html('此项不能留空')
			$('.phone1').css('background', '#faeded')
		}else if(phonereg.test($('.phone1').val())) {
			$('.phone1').css('background', '')
//			$('.btn').css('background', '#e11a2b')
			$('.texterror1').html('')
			
		}else{
			
			$('.texterror1').html('手机号不正确')
			$('.btn').css('background', '#dddddd')
			$('.phone1').css('background', '#faeded')
			
		}

	})

	//密码   

	var passreg = /^\w{8,12}$/
	$('.pass').blur(function() {

		if(commonreg.test($('.pass').val()) || $('.pass').val() == '') {
			$('.pass').css('background', '#faeded')
			$('.passerror1').html('此项不能留空')
		} else if(passreg.test($('.pass').val())) {
			$('.pass').css('background', '')
			$('.btn').css('background', '#e11a2b')
			$('.passerror1').html('')	
			if(phonereg.test($('.phone1').val())&&passreg.test($('.pass').val())){
				console.log(phonereg.test($('.phone1').val())&&passreg.test($('.pass').val()))				
				$('.btn').click(function(){
					alert('登录成功')					
				})				
			}								
		} else {
            
			$('.passerror1').html('密码由字母或数字或下划线组成，长度8-20字符')
			$('.btn').css('background', '#dddddd')
		}

	})

})