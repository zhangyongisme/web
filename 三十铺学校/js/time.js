function showTime() {
	var date = new Date();
	var now = "";
	var week = new Array("日", "一", "二", "三", "四", "五", "六");
	now = date.getFullYear() + "年";
	now = now + (date.getMonth() + 1) + "月";
	now = now + date.getDate() + "日";
	now = now + " 星期" + week[date.getDay()];
	now = now + " " + date.getHours() + ":";
	if(date.getMinutes() < 10) {
		now = now + "0";
	};
	now = now + date.getMinutes() + ":";
	if(date.getSeconds() < 10) {
		now = now + "0";
	};
	now = now + date.getSeconds();
	document.getElementById("showTime").innerHTML = now;
};
setInterval(showTime, 1000);

var nav = document.querySelectorAll(".nav ul li")
var sub = document.querySelectorAll(".sub-nav ul");
var index = 0;
var currentLi;
for(var i = 0, len = nav.length; i < len; i++) {
	nav[i].index = i;
	nav[i].onmouseenter = function() {
		if(currentLi) {
			sub[currentLi.index].className = "";
		}
		sub[0].className = "";
		sub[this.index].className = "current";
		currentLi = this;
	};
};
var menu = document.querySelector(".menu");
menu.onmouseleave = function() {
	sub[currentLi.index].className = "";
	sub[0].className = "current";
};