init();

function init() {
	var btn_add=document.getElementById("btn_add");
	var btn_ch=document.getElementById("btn_ch");
	var btn_en=document.getElementById("btn_en");

	var input_add=document.getElementById("address");
	var input_ch=document.getElementById("chName");
	var input_en=document.getElementById("enName");

	//地址验证事件处理程序
	btn_add.onclick=function() {
		var v=input_add.value;
		var p=document.getElementById("p_address");

		if(v==""||v==null||v.length<4||v.length>16) {
			p.innerHTML="必填，长度为4~16位字符";
		}
		else {
			p.innerHTML="格式正确";
		}
	}

	//中文名验证事件处理程序
	btn_ch.onclick=function() {
		var v=input_ch.value;
		var p=document.getElementById("p_chName");

		var reg=/^[\u4e00-\u9fa5]+$/;

		if(v==""||v==null) {
			p.innerHTML="密码正确";
		}
		else if(!reg.test(v)) {
			p.innerHTML="长度为4~16位字符";
		}
		else {
			p.innerHTML="密码格式不正确";
		}

	}

	
}