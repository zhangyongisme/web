var iterm = document.getElementById("iterm");
var iterm1 = document.getElementById("iterm1");
var iterm2 = document.getElementById("iterm2");
iterm2.innerHTML = iterm1.innerHTML;
function roll() {
if(iterm.scrollTop>=iterm1.offsetHeight){
	iterm.scrollTop-=iterm2.offsetHeight;
}
else{
	iterm.scrollTop++;
}
}
var MyRoll=setInterval(roll,30);
iterm.onmouseover=function(){clearInterval(MyRoll)};
iterm.onmouseout=function(){MyRoll=setInterval(roll,30)};