$(document).ready(function(){$(".minus").click(function(){var a=$(this).parent().find("input"),e=parseInt(a.val())-1;return e=1>e?0:e,a.val(e),a.change(),!1}),$(".plus").click(function(){var a=$(this).parent().find("input");return a.val(parseInt(a.val())+1),a.change(),!1}),$(".header-menu-toggle").click(function(){$(".header-menu").slideToggle(function(){$(this).is(":visible")&&$(this).css("display","flex")})}),$(".header-menu-el-service").click(function(){$(".header-menu-sub-menu").slideToggle()}),$(".header-logo").click(function(){$(".modal-order").bPopup({closeClass:"modal-order-close ",position:["auto","auto"],follow:[!0,!1]})}),$(".slider-food-wraper").owlCarousel({items:3,responsive:{0:{items:1},768:{items:2},960:{items:2},1280:{items:3}},margin:50,pagination:!1,autoPlay:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}),$(".review-slider").owlCarousel({items:1,pagination:!1,autoPlay:!0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}),$(window).width()>"640"?$(".vacancy-wraper").responsiveTabs({collapsible:!0,setHash:!0,animation:"slide",duration:300}):$(".vacancy-wraper").responsiveTabs({collapsible:!0,setHash:!0,animation:"slide",duration:300,scrollToAccordion:!0,startCollapsed:!0})});