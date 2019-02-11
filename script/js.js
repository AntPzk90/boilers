//открытие и закрыытие моб меню
$(".moby-btn").on("click", function(evt) {
	evt.preventDefault();
	if($(".moby-btn").hasClass('x')){
		$(".moby-btn").removeClass('x');
		$(".user-nav").removeAttr('style');
	}else{
		$(this).addClass("x");
		$(".user-nav").css({"display":"flex"});
	}
});
// открытие карточки товара
(function(){
var count = 1;
	$(".spec-btn").each(function(i) {
			$(this).attr({
			"data-number": count++,
		});
	});
	$(".spec-btn").on("click", function(evt) {
		var number = $(this).attr("data-number");
		$("body").css({"overflow":"hidden"});
		$(".wrapper-catalog").addClass('overlay');
		$("#popup-" + number).fadeIn().css({"display":"flex"});
	});
	$(".popup-close").on("click",function(evt) {
		evt.preventDefault();
		$(this).parent().fadeOut().removeAttr('style');
		$(".wrapper-catalog").removeClass('overlay');
		$("body").removeAttr('style');
		console.log("12")
	});
})();

//закрытие слоя ovrlay и эллемента в нем
$(".wrapper-catalog").on("click",function(evt) {
	$("body").removeAttr('style');
	for(var i = 1; i < $(".spec-btn").length + 1; i++){
		$("#popup-" + i).fadeOut().removeAttr('style');
	}
	$(this).removeClass('overlay');
	$(".form-overlay").removeAttr('style');
});
// появление формы при заказе товара
(function(){
	$(".buy-btn").on("click",function(evt){
		evt.preventDefault();
		$(".form-overlay").css({"display":"flex"});
		$("body").css({"overflow":"hidden"});
		$(".wrapper-catalog").addClass('overlay');
	});
})();
var mobyMenuOff = function(){
	$(".user-nav").removeAttr('style');
	$(".moby-btn").removeClass('x');
};
//скрол страници
var header =  $(".main__header");
var headHeight = header.height();
$(window).on("scroll", function(){
	var scroll =  $(window).scrollTop();
   if(scroll > headHeight){
      header.addClass("fix");
      $("body").css("paddingTop", headHeight + 10);
      $(".up").fadeIn(200);
    }else if(scroll < 1){
      header.removeClass("fix");
      $("body").css("paddingTop", 0);
      $(".up").fadeOut(0);
    }
});
//
$("#main-link").on("click",function(e){
  	e.preventDefault();
  	var plansOffset = $("#settings").offset().top;
  	mobyMenuOff();
  	$("html, body").animate({scrollTop:0},300);
});
// скрол блока с монтажем
$("#setting-link").on("click",function(e){
	mobyMenuOff();
  	e.preventDefault();
  	var plansOffset = $("#settings").offset().top - headHeight;
  	$("html, body").animate({scrollTop:plansOffset},300);
});
// скрол к блоку с каталогом
$("#catalog-link").on("click",function(e){
	mobyMenuOff();
  	e.preventDefault();
  	var plansOffset = $("#catalog").offset().top - headHeight;
  	$("html, body").animate({scrollTop:plansOffset},300);
});
//скрол к блоку с контактами
$("#contacts-link").on("click",function(e){
	mobyMenuOff();
  	e.preventDefault();
  	var plansOffset = $("#contacts").offset().top - headHeight;
  	$("html, body").animate({scrollTop:plansOffset},300);
});
