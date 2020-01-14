"use strict";
var winW;
var winH;
var es_step = "Expo.ease";
var $window = $(window);
var $body = $("body");
var winSc;
var htmlH;
var $subLocation = $("#subLocation");

$window.load(function () {
    htmlH = $body.outerHeight(true);
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    main();
    layout();
    scrollEvent();
    locationJS();
    object();
    applicationsJS();
    companyJS();
    productsJS();
    promotionJS();
    serviceJS();
    etcJS();
});