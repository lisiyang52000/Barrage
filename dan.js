var btn=document.getElementsByClassName('btn')[0],
	input=document.getElementsByClassName('input')[0],
	main=document.getElementsByClassName('main')[0],
	mainW=main.offsetWidth;

	btn.onclick=send;
	input.onkeydown=function(e){
		if(e.keyCode==13){
			send();
		}
	}

		function send(){
		if(input.value.length<=0||(/^\s+$/).test(input.value)){
			alert('内容不能为空');
			return;

		}
		createspan(input.value);
	}
		function createspan(text){
		var newspan=document.createElement('span');
		newspan.innerText=text;
		main.appendChild(newspan);
		newspan.style.left=mainW+'px';
		spanStyle(newspan);
		}

		function spanStyle(dom){

	dom.style.top=random(0,150)+'px';
	dom.style.color='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
	dom.style.fontSize=random(12,30)+'px';
	var speed=[0,1,2][random(0,2)]
	dom.timer=setInterval(function(){


		switch(speed){
		case 0:
		dom.style.left=dom.offsetLeft-2+'px';
		break;
			case 1:
		dom.style.left=dom.offsetLeft-4+'px';
		break;
			case 2:
		dom.style.left=dom.offsetLeft-6+'px';

	}
	if(parseInt(dom.style.left)<-dom.offsetWidth){
		clearInterval(dom.timer);
		main.removeChild(dom);
	}
	
	},20 )



		}

		function random(start,end){

	return Math.floor(Math.random()*(end+1-start)+start); 
		}
