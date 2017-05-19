// JavaScript Document
var menu = getClassNames('menu', 'div');//����ie8
var subMenu = getClassNames('subMenu', 'div');
var current;
for(var i = 0, len = subMenu.length; i < len; i++) {
	menu[i].index = i;
	menu[i].onmouseenter = function() {
		if(current) {
			subMenu[current.index].className = "subMenu";
			menu[current.index].className = "menu";
		}
		current = this;
		subMenu[this.index].className = "subMenu discover";
		menu[this.index].className = "menu current";
	}
}
var navBox = getClassNames('nav-box', 'div')[0];
navBox.onmouseleave = function() {
	subMenu[current.index].className = "subMenu";
	menu[current.index].className = "menu";
}

function getClassNames(classStr, tagName) {
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(classStr);
	} else {
		var nodes = document.getElementsByTagName(tagName),
			ret = [];
		for(i = 0; i < nodes.length; i++) {
			if(hasClass(nodes[i], classStr)) {
				ret.push(nodes[i])
			}
		}
		return ret;
	}
}

function hasClass(tagStr, classStr) {
	var arr = tagStr.className.split(/\s+/); //���������ʽ����Ϊclass�����ж��,�ж��Ƿ����  
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == classStr) {
			return true;
		}
	}
	return false;
}