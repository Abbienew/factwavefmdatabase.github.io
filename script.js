var dot1 = $("#dot1 > ul > li");



var contents = $("#contents > div");

dot1.on("click",function(e){
	e.preventDefault();
	
	var target = $(this);
	var index = target.index();
	var section = contents.eq(index);
	var offset = section.offset().top;
	
	$("body, html").animate({scrollTop:offset},400);
	
	$(window).on("scroll",function(){
		var wScroll =$(this).scrollTop();
		
		if(wScroll >= contents.eq(0).offset().top){
			dot1.removeClass("on");
			dot1.eq(0).addClass("on");
		}
			if(wScroll >= contents.eq(1).offset().top){
			dot1.removeClass("on");
			dot1.eq(1).addClass("on");
		}
			if(wScroll >= contents.eq(2).offset().top){
			dot1.removeClass("on");
			dot1.eq(2).addClass("on");
		}
			if(wScroll >= contents.eq(3).offset().top){
			dot1.removeClass("on");
			dot1.eq(3).addClass("on");
		}
			if(wScroll >= contents.eq(4).offset().top){
			dot1.removeClass("on");
			dot1.eq(4).addClass("on");
		}
			if(wScroll >= contents.eq(5).offset().top){
			dot1.removeClass("on");
			dot1.eq(5).addClass("on");
		}
	});
	
});


var dot2 = $("#dot2 > ul > li");
var contents = $("#contents > div");

dot2.on("click",function(e){
	e.preventDefault();
	
	var target = $(this);
	var index = target.index();
	var section = contents.eq(index);
	var offset = section.offset().top;
	
	$("body, html").animate({scrollTop:offset},400);
	
	$(window).on("scroll",function(){
		var wScroll =$(this).scrollTop();
		
		if(wScroll >= contents.eq(0).offset().top){
			dot2.removeClass("on");
			dot2.eq(0).addClass("on");
		}
			if(wScroll >= contents.eq(1).offset().top){
			dot2.removeClass("on");
			dot2.eq(1).addClass("on");
		}
			if(wScroll >= contents.eq(2).offset().top){
			dot2.removeClass("on");
			dot2.eq(2).addClass("on");
		}
			if(wScroll >= contents.eq(3).offset().top){
			dot2.removeClass("on");
			dot2.eq(3).addClass("on");
		}
			if(wScroll >= contents.eq(4).offset().top){
			dot2.removeClass("on");
			dot2.eq(4).addClass("on");
		}
			if(wScroll >= contents.eq(5).offset().top){
			dot2.removeClass("on");
			dot2.eq(5).addClass("on");
		}
	});
	
});

// interactive slider

document.getElementById("q1").oninput = function() {
    var value = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background = 'linear-gradient(to right, black ' + value + '%, #aaa ' + value + '%)';
};

