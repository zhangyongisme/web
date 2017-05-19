var link_deom=document.getElementById("link_deom");
var link_deom1=document.getElementById("link_deom1");
var link_deom2=document.getElementById("link_deom2");
link_deom2.innerHTML=link_deom1.innerHTML;
function scroll(){
	if(link_deom.scrollLeft>=link_deom1.offsetWidth){
		link_deom.scrollLeft-=link_deom2.offsetWidth;
	}else{
		link_deom.scrollLeft++;
	}
}
var Scroll=setInterval(scroll,30);
link_deom.onmouseover=function(){clearInterval(Scroll)};
link_deom.onmouseout=function(){Scroll=setInterval(scroll,30)};