

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
function next(){
			if(!jude){
				jude=true;
				index++;
				navChange();
				animate(slider,{left:-1200*index},function(){
					if(index>5){
						slider.style.left="-1200px";

						index=1;
					}
					jude=false;
				});
			}

		}
function perious(){
	if(!jude){
		jude=true;
		 --index;
			navChange();
			animate(slider,{left:-1200*index},function()	{
			if(index<1){
			slider.style.left="-6000px";
					index=5;
			}
			jude=false; 
			});

	}
			

	}
function roll(){
		var now = parseInt(getStyle(p,'left'));
		if(now==-250)
		{
			p.style.left="800px";
		}
		else{
			p.style.left=now-2+'px';
		}


	}

function navChange(){
	for(var i=0;i<nav.length;i++){
		nav[i].className="";
		nav[i].style.color="";
	}
	nav[0].style.color="red";
	if(index===6){
		nav[0].className='active';
		nav[0].style.color="";
	}
	else if(index===0){
		nav[4].className='active';


	}
	else{
		nav[index-1].className='active';
		nav[index-1].style.color="white";
	  }
	}