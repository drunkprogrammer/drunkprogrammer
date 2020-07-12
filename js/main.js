function validForm() {
	
		var mobilephone = document.forms["login"]["mobilephone"].value;
		var password = document.forms["login"]["password"].value;
		var reg=/[0-9]{11}/;
		
		if (mobilephone == null || mobilephone == "") {
			alert("请输入您的手机号码");
			return false;
		}
		else if(!reg.test(mobilephone)){
				alert("手机号码有误");
		}
		if (password == null || password == "") {
			alert("请输入您的密码");
			return false;
		}
}
