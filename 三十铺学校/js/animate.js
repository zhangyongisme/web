function animate(dom, o, speed) {
	clearInterval(dom.iterm);
	dom.iterm = setInterval(function() {
		var flag = true;
		var currentValue;
		for(var key in o) {
			if(key == "opacity") {
				currentValue = parseInt(getStyleValue(dom, key) * 100); 
				if(currentValue > o[key]) {
					currentValue = parseInt(getStyleValue(dom, key) * 100);
				} else {
					currentValue = Math.ceil(getStyleValue(dom, key) * 100);
				};
			} else {
				currentValue = parseInt(getValue(dom, key));
			};
			var step = (o[key] - currentValue) / 30;
			if(step > 0) {
				step = Math.ceil(step);
			} else {
				step = Math.floor(step);
			};
			if(currentValue != o[key]) {
				flag = false;
			};
			if(key=="opacity"){
				dom.style["opacity"] = (currentValue + step)/100;
				dom.style["filter"] = 'alpha(opacity='+(currentValue + step)+')';
			}else{
				dom.style[key] = currentValue + step + "px";
			};
			if(flag) {
				clearInterval(dom.iterm);
			};
			//
		};
	}, speed);
};

function getValue(dom, pName) {
	if(window.getComputedStyle) {
		return window.getComputedStyle(dom, null)[pName];
	} else {
		return dom.currentStyle[pName];
	};
};