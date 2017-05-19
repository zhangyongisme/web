function Scroll(tab, tab1, tab2, speed, dir) {
	this.tab = $(tab);
	this.tab1 = $(tab1);
	this.tab2 = $(tab2);
	this.speed = speed;
	this.dir = dir;
	this.termId;
	this.init();
};

Scroll.prototype = {
	init: function() {
		this.buildDom();
		this.buildEvent();
	},

	buildDom: function() {
		this.tab2.html(this.tab1.html()); //����һ��ͼƬ�б� 
	},

	buildEvent: function() {
		var that = this;
		/*ͼƬ����*/
		function scrollAnimata() { //�������
			if(that.tab2.width() - that.tab.scrollLeft() <= 0) {
				that.tab.scrollLeft(that.tab.scrollLeft - that.tab1.width());
			} else {
				console.log(that.tab.scrollLeft());
				that.tab.scrollLeft(that.tab.scrollLeft() + 1);
			};
		};

		function scrollAnimata2() { //���Ϲ���
			if(that.tab2.height() - that.tab.scrollTop() <= 0) {
				that.tab.scrollTop(that.tab.scrollTop() - that.tab1.height());
			} else {
				that.tab.scrollTop(that.tab.scrollTop() + 1);
			};
		};
		/*��ʱ��*/
		if(this.dir == "left") {
			that.termId = setInterval(scrollAnimata, that.speed);
		} else if(this.dir == "top") {
			that.termId = setInterval(scrollAnimata2, that.speed)
		};

		this.tab.mouseenter(function() {
			clearInterval(that.termId);
		});

		this.tab.mouseleave(function() {
			if(that.dir == "left") {
				that.termId = setInterval(scrollAnimata, that.speed);
			} else if(that.dir == "top") {
				that.termId = setInterval(scrollAnimata2, that.speed)
			};
		});
	}
};

var srcoll1 = new Scroll("#pic-demo", "#pic-demo1", "#pic-demo2", 40, "left");
var srcoll2 = new Scroll("#demo", "#demo1", "#demo2", 40, "top");