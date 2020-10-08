/*
	- tile
	- rollover
	- cmn_header
	- scroll
	- scroll(別ページ)
*/

//tile v0.0.2 Hayato Takenaka http://urin.take-uma.net
!function(t){t.fn.tile=function(e){var h,i,n,r,o,u=this.length-1;return e||(e=this.length),this.each(function(){o=this.style,o.removeProperty&&o.removeProperty("height"),o.removeAttribute&&o.removeAttribute("height")}),this.each(function(o){n=o%e,0==n&&(h=[]),h[n]=t(this),r=h[n].height(),(0==n||r>i)&&(i=r),(o==u||n==e-1)&&t.each(h,function(){this.height(i)})})}}(jQuery);

//rollover
jQuery.fn.rollover=function(suffix){
	suffix = suffix||'_on';
	var check = new RegExp(suffix+'\\.\\w+$');
	return this.each(function(){
		var img = jQuery(this);
		var src = img.attr('src');
		if (check.test(src))return;
		var _on = src.replace(/\.\w+$/,suffix+'$&');
		jQuery('<img>').attr('src', _on);
		img.hover(
			function(){img.attr('src', _on);},
			function(){img.attr('src', src);}
		);
	});
};
$(window).bind("load resize",initroll);
function initroll(){
	var _width = $(window).width();
	if(_width <= 640){
		$('.roll a img').off();
	}else{
		$('.roll a img').rollover();
	}
}

//cmn_header
$(function(){

	var contentsReset = function(){
		$('html,body').css('overflow','');
		$('.hdclone').remove();
		$('#cmn_header_menu').removeClass('animated cmn_header_menu-off fadeOut cmn_header_menu-on fadeInDown');
		$('#cmn_header_menu, #cmn_header_menu ul').attr('style','');
		$('#cmn_header_menu li').removeClass('sel');
		$('#cmn_header_menu .n1 li').off();
		$('#cmn_header_menu .n1 li span').off('.menu');
	};

	var setupForPc = function(){
		$('#cmn_header').clone().insertAfter('#cmn_header').addClass('hdclone');
		var nav = $('.hdclone');
		var navTop = 200;
		var navHeight = 100;
		var showFlug = false;
		nav.css('top',-navHeight+'px');
		$(window).scroll(function(){
			var winTop = $(this).scrollTop();
			if (winTop >= navTop){
				if (showFlug == false){
					showFlug = true;
					nav.addClass('fixed').stop().animate({'top':'0px'},500);
				}
			}else if(winTop<=navTop){
				if(showFlug){
					showFlug = false;
					nav.stop().animate({'top':-navHeight+'px'},200,function(){nav.removeClass('fixed');});
				}
			}
		});
		$('#cmn_header_menu .n1 li').hover(function(){
			$(this).addClass('hover');
			$("ul:not(:animated)",this).slideDown();
		}, function(){
			$(this).removeClass('hover');
			$("ul.sub",this).slideUp(200);
		});
	};

	var setupForSp = function(){
		$('#cmn_header p.menu a').animatedModal({
			modalTarget:'cmn_header_menu',
			animatedIn:'fadeInDown',
			animatedOut:'fadeOutUp',
			color:'#fff'
		});
		$('#cmn_header_menu').css('backgroundColor','rgba(38,12,8,0.8);');
		$('#cmn_products #cmn_header_menu .n1 > li:nth-child(5)').addClass('sel');
		$('#cmn_shop     #cmn_header_menu .n1 > li:nth-child(6)').addClass('sel');
		$('#cmn_header_menu .n1 li ul').not('li.sel ul').hide();
		$('#cmn_header_menu .n1 li span').addClass('sp');
		$('#cmn_header_menu .n1 li span').on('click.menu',function(){
			$(this).toggleClass('sp').next().slideToggle();
		});
	};

	var windowWidth = 0;
	$(window).on('load resize',function(){
		var currentWidth = $(this).width();
		if(windowWidth != currentWidth){
			contentsReset();
			if(currentWidth > 640){
				setupForPc();
			}else{
				setupForSp();			
			}
			windowWidth = currentWidth;
		}
	});

});

//scroll
$(function(){
	$('a[href^=#]').not('a[href^=#].none,#cmn_header .menu a[href^=#],.holder a[href^=#]').click(function(){
		var speed=500;
		var href=$(this).attr("href");
		var target=$(href=="#"||href=="" ? 'html':href);
		var position=target.offset().top - 18;
		$('body,html').animate({scrollTop:position},speed,'swing');
		return false;
	});
});

//scroll(別ページ)
$(window).bind("load",inits);
function inits(){
	var _width = $(window).width();
	if(_width <= 640){
		var hdsp = 80;
	}else{
		var hdsp = 105;
	}
	setTimeout(function(){
		var url = $(location).attr('href');
		if(url.indexOf("?id=") != -1){
			var id = url.split("?id=");
			var $target = $('#' + id[id.length - 1]);
			if($target.length){
				var pos = $target.offset().top - hdsp;
				$("html, body").animate({scrollTop:pos},500);
			}
		}
	},100);
}
