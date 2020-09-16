$(function(){
	
	/*===图片懒加载===*/
	start();
	// 导航栏显示影藏
	$('#swich').click(function(){
		$('#homeNav').stop().toggleClass('hide');
	})
	$(window).on('scroll', function() {
		start();
	});
	//tabchange
	$(".tabBars .tabBar").eq(0).addClass("active");
	$(".tabCons .tabCon").eq(0).addClass("active");
	tabChange(".tabBars .tabBar",".tabCons .tabCon","active");
	
	/*===图片轮播===================================================*/
	var swiperPics = new Swiper('.picsSwi .swiper-container', {
		pagination: '.picsSwi .swiper-pagination',
		paginationClickable: '.picsSwi .swiper-pagination',
		effect: 'effect'
	});
	//弹窗
	$("#ydBtn").click(function(){
		$("#tc").stop().fadeIn();
	});
	$("#tcClose").click(function(){
		$("#tc").stop().fadeOut();
	});
	$('.sites .clearfix a').click(function(){
		var num=$(this).text()
		setQuery(num)
	})
})

/*===tab切换===*/
function tabChange(tab, con, ac) {
	$(tab).click(function() {
		var i = $(this).index();
		$(this).addClass(ac).siblings().removeClass(ac);
		$(con).eq(i).addClass(ac).siblings().removeClass(ac);
	});
}
/*===图片懒加载===*/
function start() {
	$('img').not('[data-isLoaded]').each(function() {
		var $node = $(this)
		if (isShow($node)) {
			loadImg($node)
		}
	})
}
function isShow($node) {
	return $node.offset().top <= $(window).height() + $(window).scrollTop();
}
function loadImg($img) {
	$img.attr('src', $img.attr('data-src'));
	$img.attr('data-isLoaded', 1);
}
function setQuery(num){
	window.location.href="detail.html?num="+num;
}