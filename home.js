
		var box=document.getElementById('box');
		var nav=document.getElementById('nav').children;
		var slider=document.getElementById('slider');
		var left=document.getElementById('left');
		var right=document.getElementById('right');
		var bag=document.getElementById('bag');
		var p=document.getElementsByTagName('p')[0];
		var li=document.getElementsByTagName('li')[0];
		var index=1;
		var i=2;
		var jude=false;
		var a=setInterval(roll,30);
		var timer=setInterval(next,2000);
		box.onmouseover=function(){
			animate(left,{opacity:50});
			animate(right,{opacity:50});
			clearInterval(timer);
		}
		box.onmouseout = function(){
			animate(left,{opacity:0});
			animate(right,{opacity:0});
			timer=setInterval(next,2000);
		}
		right.onclick=next;
		left.onclick=perious;
		for(var i=0;i<nav.length;i++){
			nav[i].inx=i;
			nav[i].onclick=function(){
				index=this.inx+1;
				navChange();
				animate(slider,{left:-1200*index})
			}
		}