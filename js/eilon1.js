$(function(){$("a.page-scroll").bind("click",function(b){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1500,"easeInOutExpo");b.preventDefault()})});$("body").scrollspy({target:".navbar-fixed-top"});$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});$(window).bind("scroll",function(){1150<$(this).scrollTop()&&1770>$(this).scrollTop()?$("#fade1").fadeIn():$("#fade1").stop().fadeOut()});
$("article").readmore({afterToggle:function(b,a,c){c||$("html, body").animate({scrollTop:a.offset().top},{duration:100})},moreLink:'<a href="#">Continue Reading...</a>',speed:500});$(document).ready(function(){$(".fancybox").fancybox({overflow:"hidden",scrolling:"no",helpers:{overlay:{locked:!1}}})});