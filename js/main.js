
$(function() {

		// hamburger icon 的切換
		$("button.hamburger").on("click", function () {
			$(this).toggleClass("is-active");
		});
		$("button.btn_switch").on("click", function () {
			$("ul.navul").slideToggle();

		});
		$(".gift").on('click', function () {
			$('.span21').slideToggle();
		})
		$(".pen").on("click", function () {
			$('.span11').slideToggle();
		})
	});
