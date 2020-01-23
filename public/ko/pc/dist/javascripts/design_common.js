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
function applicationsJS(){

}
function companyJS(){
    var $companyLocation = $(".company_location");
    var $locationSec = $companyLocation.find("section");
    var $locationLi = $locationSec.find("> ol > li");

    $locationSec.each(function () {
        var _this = $(this);
        var $openBtn = _this.find(".open_btn");
        $openBtn.click(function () {
            var _thisBtn = $(this);
            var _thisLi = _thisBtn.parent().parent();
            TweenMax.to($locationLi, .3, {height:170, ease:es_step});
            if(!_thisLi.hasClass("active")){
                $locationLi.removeClass("active");
                _thisLi.addClass("active");
                TweenMax.to(_thisBtn.parent().parent(), .3, {height:610, ease:es_step});
            } else {
                $locationLi.removeClass("active");
            }
        });
    });
}
function etcJS(){
    var $utilTerms = $(".util_terms");
    var $termsTab = $utilTerms.find(".terms_tab button");
    var $termsAnchor = $utilTerms.find("strong");

    var _anchorTop = [];
    $termsAnchor.each(function () {
        _anchorTop.push($(this).offset().top - 70);
    });

    $termsTab.click(function () {
        var _this = $(this);
        var _index= _this.parent().index();
        console.log(_anchorTop[_index]);
        TweenMax.to($("html, body"), .5, {scrollTop:_anchorTop[_index]});
    });
}
function layout() {
    var $header = $("#header");
    var $gnb = $header.find("#gnb"),
        $gnbOpenDepth = $gnb.find(".depth_one"),
        $gnbTwoDepth = $gnb.find(".depth_two"),
        $allNav = $header.find("#allNav");

    var $gnbDimmed = $("#gnbDimmed");
    var $allNavBtn = $("#allNavBtn");

    //gnb open/close
    $gnbOpenDepth.find("> li > a").on("mouseenter focusin", function() {
        var _this = $(this);
        $header.addClass("gnb_open");
        TweenMax.to($header, .4, {height:450, ease:es_step});
        $gnbTwoDepth.css({display:"none"});
        _this.siblings("ul").css({display:"block"});
        TweenMax.to($gnbDimmed, .3, {opacity:.5, display:"block", ease:es_step});
    });
    $gnbOpenDepth.on("mouseleave", function () {
        gnbClose();
    });
    $gnbOpenDepth.find("> li").eq(-1).find("li").eq("-1").find("a").keydown(function (e) {
        var tab = Tab(function(){
            gnbClose();
        }, e);
        if (tab) return false;
    });

    function gnbClose(){
        TweenMax.to($header, .4, {
            height:100,
            onComplete:function(){
                $header.removeClass("gnb_open");
                $gnbTwoDepth.css({display:"none"});
                }, ease:es_step
        });
        TweenMax.to($gnbDimmed, .3, {opacity:0, display:"none", ease:es_step});
    }

    //allNav open/close
    $allNavBtn.click(function () {
        if(!$header.hasClass("all_nav_open")){
            $header.addClass("all_nav_open");
            TweenMax.to($header, .4, {height:580, ease:es_step});
            TweenMax.to($allNav, .4, {opacity:1, display:"block", ease:es_step});
        } else {
            $header.removeClass("all_nav_open");
            TweenMax.to($header, .4, {height:100, ease:es_step});
            TweenMax.to($allNav, .4, {opacity:0, display:"none", ease:es_step});
        }
    });

    //footer
    var $familySite = $("#familySite");
    var $familyBtn = $familySite.find("button");
    var $familySiteH = $familySite.find('div').height() + 50;
    $familyBtn.click(function () {
        if(!$familySite.hasClass("active")){
            TweenMax.to($familySite, .2, {height:$familySiteH});
            $familySite.addClass("active");
        } else {
            TweenMax.to($familySite, .2, {height: 50});
            $familySite.removeClass("active");
        }
    });
    $familySite.mouseleave(function () {
        TweenMax.to($familySite, .2, {height: 50});
        $familySite.removeClass("active");
    });
}




function locationJS(){
    var $subLocationH = 56;
    $subLocation.find("button").on("mouseenter focusin",function (e) {
        e.preventDefault();
        var _this = $(this);
        var locationDepthH = _this.siblings(".under_depth").outerHeight();
        if(!_this.hasClass("active")){
            _this.addClass("active");
            TweenMax.to($(".location_list > li") , .3, {height: $subLocationH, ease:es_step});
            TweenMax.to($(this).parent(), .3, {height: locationDepthH + $subLocationH, ease:es_step});
        } else {
            if (!TweenMax.isTweening($(".location_list > li"))) {
                $subLocation.find("button").removeClass("active");
                TweenMax.to($(this).parent(), .3, {height: $subLocationH, ease: es_step});
            }
        }
    });

    $(".location_list > li").on("mouseleave", function () {
        $subLocation.find("button").removeClass("active");
        TweenMax.to($(".location_list > li"), .3, {height: $subLocationH, ease: es_step});
    });

    //접근성 이슈
    var $underDepth = $subLocation.find(".depth1, .depth2");
    $underDepth.each(function () {
        var _this = $(this);
        _this.find("li").eq(-1).find("a").keydown(function(e){
            if (!TweenMax.isTweening($(".location_list > li"))) {
                var tab = Tab(function(){
                    $subLocation.find("button").removeClass("active");
                    TweenMax.to($(".location_list > li"), .3, {height: $subLocationH, ease: es_step});
                }, e);
            }
        });
    });
}
function main() {
    var $container = $("#container");
    var $mainSolution = $container.find(".main_solutions"),
        $solutionsImg = $mainSolution.find(".img_wrap div"),
        $solutionTxt = $mainSolution.find(".txt_wrap .txt_box"),
        $solutionBtn = $mainSolution.find("button");

    var _solutionIndex = 0;
    $solutionBtn.click(function () {
        _solutionIndex++;
        _solutionIndex = _solutionIndex % 2;
        solutionRolling(_solutionIndex);
    });

    function solutionRolling(_index){
        TweenMax.to($solutionsImg, .3, {opacity:0});
        TweenMax.to($solutionsImg.eq(_index), .3, {opacity:1});

        TweenMax.to($solutionTxt, .3, {opacity:0, display:"none"});
        TweenMax.to($solutionTxt.eq(_index), .3, {opacity:1, display:"block"});
    }














}
































function productsJS(){

}
function promotionJS(){
    var $ethicalEthics = $(".ethical_ethics");
    var $ethicsTab = $ethicalEthics.find(".ethics_tab button");
    var $ethicsWrap = $ethicalEthics.find(".ethics_wrap");
    var $ethicsContents = $ethicsWrap.find("> div");
    var _ethicsContentsH = [3307, 2968];

    $ethicsTab.click(function () {
        var _this = $(this);
        var _index = _this.parent().index();
        $ethicsWrap.css({"height":_ethicsContentsH[_index]});
        TweenMax.to($ethicsContents, .3, {opacity:0, y:30, ease:es_step});
        TweenMax.to($ethicsContents.eq(_index), .3, {opacity:1, y:0, ease:es_step});
        $ethicsTab.removeClass("active");
        _this.addClass("active");
    });
}
function scrollEvent(){
    var $topBtn = $("#topBtn");
    var $pallIcon = $("#pallIcon");
    var $pallRight = $pallIcon.find(".right_icon, .right_bottom_icon, .bottom_icon");
    var $pallLeft = $pallIcon.find(".left_icon, .left_bottom_icon");
    var $subVisual = $("#subVisual");

    $(window).scroll(function () {
        //스크롤에 따른 bg 패럴럭스
        $(".pall_bg").each(function () {
            var offset = $(this).offset();
            var offsetTop = offset.top;
            var _this_h = $(this).innerHeight();
            var _bg_p = (winSc - offsetTop) / _this_h * 100;
            $(this).css({"background-position-y":-_bg_p.toFixed(2) / 2 + "%"});
        });
        //서브 비쥬얼 bg 패럴럭스
        $subVisual.css({"background-position-y":-170 + winSc / 2});

        //탑버튼 하단 위치 고정
        if(winSc > 500){
            TweenMax.to($topBtn, .3, {opacity:1, display:"block"});
        } else {
            TweenMax.to($topBtn, .3, {opacity:0, display:"none"});
        }
        if (winSc > htmlH - 190 - winH) {
            $topBtn.addClass("fixed");
        } else {
            $topBtn.removeClass("fixed");
        }

        //서브 로케이션 위치 고정 
        if($subLocation === false) {return}
        if (winSc > 460) {
            $subLocation.addClass("fixed");
        } else {
            $subLocation.removeClass("fixed");
        }

        //서브 페이지 패럴럭스 아이콘
        var _pallPos = Math.ceil(winSc / 30);
        TweenMax.to($pallRight, 1, {y:-_pallPos, ease:es_step});
        TweenMax.to($pallLeft, 1, {y:_pallPos, ease:es_step});
    });

    $topBtn.click(function () {
        TweenMax.to($("html, body"), .3, {scrollTop:0, ease:es_step});
    });
}










function serviceJS(){

}