"use strict";
var winW;
var winH;
var es_step = "Expo.ease";
var $window = $(window);
var winSc;
var htmlH;
var $subLocation = $("#subLocation");

$window.load(function () {
    htmlH = $("body").outerHeight(true);
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    /**
     * Shift + Tab
     * @param callback
     * @param event
     * @returns {boolean}
     * @constructor
     */
    function Shifttab(callback, event){
        var e = event;
        var charCode = e.which || e.keyCode;
        if (e.shiftKey === true) {
            if (charCode === 9) {
                callback();
                return true;
            }
        } else {
            return false;
        }
    }

    /**
     * Tab
     * @param callback
     * @param event
     * @returns {boolean}
     * @constructor
     */
    function Tab(callback, event){
        var e = event;
        var charCode = e.which || e.keyCode;
        if (e.shiftKey === false) {
            if (charCode === 9) {
                callback();
                return true;
            }
        } else {
            return false;
        }
    }
    main();
    layout();
    scrollEvent();
    locationJS();
    applicationsJS();
    companyJS();
    productsJS();
    promotionJS();
    serviceJS();
    etcJS();
});