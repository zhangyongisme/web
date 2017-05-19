function LunBo(id) {
	this.lbt = document.getElementById(id);
	this.content = this.lbt.querySelector(".lbt_content");
	this.list = this.lbt.querySelector(".lbt_list");
	this.btns = this.lbt.querySelector(".lbt_control");
	this.control_left = this.btns.querySelector(".control-left"); //×ó°´Å¥
	this.control_right = this.btns.querySelector(".control-right"); //ÓÒ°´Å¥
	this.index = 0;
	this.tabs;
	this.lbt_iterm;
	this.termId;
	this.init();
};
LunBo.prototype = {
	init: function() {
		this.arr = [{
				"imgSrc": "img/lbt01.jpg",
			},
			{
				"imgSrc": "img/lbt02.jpg",
			},
			{
				"imgSrc": "img/lbt03.jpg",
			},
			{
				"imgSrc": "img/lbt04.jpg",
			}
		];
		this.buildDom(this.arr);
		this.buildEvent();
		/*var that = this;
		ajax({
			method: "get",
			url: this.url,
			isAsyc: true,
			success: function(data) {
				var arr = JSON.parse(data);
				that.buildDom(arr);
				that.buildEvent();
			},
			error: function(mess) {
				alert(mess);
			}
		})*/
	},
	buildDom: function(arr) {
		for(var i = 0, len = arr.length; i < len; i++) {
			var li = document.createElement("li");
			var tab = document.createElement("li");
			tab.num = i;
			if(i == 0) {
				li.className = "active";
				tab.className = "active";
			}
			li.innerHTML = '<img src="' + arr[i].imgSrc + '"/></a>';
			this.content.appendChild(li);
			this.list.appendChild(tab);
		}
		this.lbt_iterm = this.lbt.querySelectorAll(".lbt_content li");
		this.tabs = document.querySelectorAll(".lbt_list li");
	},

	buildEvent: function() {
		var that = this;
		this.lbt.onmouseenter = function() {
			that.btns.className = "lbt_control active";
			clearInterval(that.termId);
		}
		this.lbt.onmouseleave = function() {
			that.btns.className = "lbt_control";
			autoplay();
		}

		this.control_right.onclick = function() {
			animate(that.lbt_iterm[that.index], {
				left: -553
			}, 10);
			that.tabs[that.index].className = "";
			that.index++;
			that.index = that.index % that.lbt_iterm.length;
			that.lbt_iterm[that.index].style.left = "553px";
			that.lbt_iterm[that.index].className = "active";
			animate(that.lbt_iterm[that.index], {
				left: 0
			}, 10);
			that.tabs[that.index].className = "active";
		}
		this.control_left.onclick = function() {
			animate(that.lbt_iterm[that.index], {
				left: 553
			}, 10);
			that.tabs[that.index].className = "";
			that.index--;
			if(that.index < 0) {
				that.index = that.lbt_iterm.length - 1;
			}
			that.lbt_iterm[that.index].style.left = "-553px";
			that.lbt_iterm[that.index].className = "active";
			animate(that.lbt_iterm[that.index], {
				left: 0
			}, 10);
			that.tabs[that.index].className = "active";
		}

		this.list.onclick = function(e) {
			var _e = e || window.event;
			var _t = _e.target || _e.srcElement;
			if(_t.tagName.toLowerCase() == "li") {
				if(_t.num < that.index) {
					animate(that.lbt_iterm[that.index], {
						left: 553
					}, 10);
					that.tabs[that.index].className = "";
					that.lbt_iterm[_t.num].style.left = "-553px";
					that.lbt_iterm[_t.num].className = "active";
					animate(that.lbt_iterm[_t.num], {
						left: 0
					}, 10);
					that.tabs[_t.num].className = "active";
				} else
				if(_t.num > that.index) {
					animate(that.lbt_iterm[that.index], {
						left: -553
					}, 10);
					that.tabs[that.index].className = "";
					that.lbt_iterm[_t.num].style.left = "553px";
					that.lbt_iterm[_t.num].className = "active";
					animate(that.lbt_iterm[_t.num], {
						left: 0
					}, 10);
					that.tabs[_t.num].className = "active";
				}
				that.index = _t.num;
			}
		}

		function autoplay() {
			this.termId = setInterval(function() {
				that.control_right.onclick();
			}, 4000)
		}
		autoplay();
	}
}

var path = "http://127.0.0.1:8020/sanshipuxuexiao/img/";
var lbt1 = new LunBo("lbt");