var carCurImg = 0;
var carLasImg = 4;

var showNavMobile = function() {
	$("#navburger>div").toggleClass("burgerRight");
	$("#productsDropList").removeClass("dropDownShown");
	if ($("#navburger>div").hasClass("burgerRight")) {
		$("aside").css({"height":"200px", "opacity": "1"});
	} else {
		$("aside").css({"height":"0", "opacity": "0"});
	}
	return false;
}

var showDropDown = function() {
	$("#productsDropList").toggleClass("dropDownShown");
	return false;
}

var moveCarousel = function() {
	if ($(this).hasClass("mRight")) {
		$(".carImg" + carCurImg).addClass("imgMovedRight");
		if (carCurImg < 4) {
			carCurImg++;
		} else {
			carCurImg = 0;
		}
		$(".img-container").on("transitionEnd webkitTransitionEnd", ".imgMovedRight",function(){
			$(".img-container").append(this);
			$(this).removeClass("imgMovedRight");
		});
	} else {
		// $(".img-container").prepend($(".carImg" + carLasImg));
		$(".carImg" + carCurImg).addClass("imgMovedLeft");
		if (carCurImg < 0) {
			carCurImg--;
		} else {
			carCurImg = 4;
		}
		$(".img-container").on("transitionEnd webkitTransitionEnd", ".imgMovedLeft",function(){
			$(this).removeClass("imgMovedLeft");
		});
	}
}

$(document).ready(function() {
	$("#navburger").on("click", showNavMobile);
	$("#productsDrop").on("click", showDropDown);
	$(".moveCarousel").on("click", moveCarousel);
});
