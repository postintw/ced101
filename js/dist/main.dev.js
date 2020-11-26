"use strict";

$(function () {
  // hamburger icon 的切換
  $("button.hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
  $("button.btn_switch").on("click", function () {
    $("ul.navul").slideToggle();
  });
  $(".gift").on("click", function () {
    $(".span21").slideToggle();
  });
  $(".pen").on("click", function () {
    $(".span11").slideToggle();
  });
  var utop = $("#up");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      utop.addClass("show");
    } else {
      utop.removeClass("show");
    }
  });
  document.getElementById("up").addEventListener("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 750);
  });
  $(".member").on("click", function () {
    // $("login");
    document.getElementById("login").style.display = "block";
  });
});