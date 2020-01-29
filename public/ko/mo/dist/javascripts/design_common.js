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
    applicationsJS();
    companyJS();
    promotionJS();
    etcJS();
});
function applicationsJS(){

}
function companyJS(){
    var $companyLocation = $(".company_location");
    var $locationSec = $companyLocation.find("section");
    var $locationLi = $locationSec.find("> ol > li");
    var $locationMap = $locationSec.find("> ol .map_wrap");

    $locationSec.each(function () {
        var _this = $(this);
        var $openBtn = _this.find(".open_btn");

        $openBtn.click(function () {
            var _thisBtn = $(this);
            var _thisLi = _thisBtn.parent().parent();
            TweenMax.to($locationMap, .3, {height:0, ease:es_step});
            if(!_thisLi.hasClass("active")){
                $locationLi.removeClass("active");
                _thisLi.addClass("active");
                TweenMax.to(_thisBtn.parent().siblings(), .3, {height:200, ease:es_step});
            } else {
                $locationLi.removeClass("active");
            }
        });
    });

    //드롭다운 탭
    var $promotionTab = $(".promotion_tab"),
        $tabBtn = $promotionTab.find("> button"),
        $tabSelect = $tabBtn.siblings("ul"),
        $selectBtn = $tabSelect.find("button");
    var $historyBox = $(".history_box section");

    var tabH = $tabSelect.innerHeight() + 42;

    $tabBtn.click(function () {
        var _this = $(this);
        if(!$tabBtn.hasClass("active")){
            _this.addClass("active");
            TweenMax.to($promotionTab, .3, {height:tabH});
        } else {
            _this.removeClass("active");
            TweenMax.to($promotionTab, .3, {height:42});
        }
    });

    $selectBtn.click(function () {
        var _this = $(this);
        var _index = _this.parent().index();
        $tabBtn.text(_this.text());
        $tabBtn.removeClass("active");
        TweenMax.to($promotionTab, .3, {height:42});

        $selectBtn.removeClass("active");
        _this.addClass("active");

        $historyBox.css({display: "none"});
        $historyBox.eq(_index).css({display: "block"});
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
    var $gnb = $("#gnb"),
        $gnbBtn = $("#gnbBtn"),
        $gnbWrap = $gnb.find(".gnb_wrap");
    var $gnbDepthBtn = $gnb.find("nav button");
    var $gnbDimmed = $("#gnbDimmed");

    $gnbBtn.click(function () {
        var _this = $(this);
        if(!_this.hasClass("active")){
            $body.addClass("no_scroll");
            _this.addClass("active");
            TweenMax.to($gnbDimmed, .3, {display:"block", opacity:.8, ease:es_step});
            TweenMax.to($gnbWrap, .4, {x:"0%", ease:es_step});
        } else {
            $body.removeClass("no_scroll");
            _this.removeClass("active");
            TweenMax.to($gnbDimmed, .3, {display:"none", opacity:0, ease:es_step});
            TweenMax.to($gnbWrap, .4, {x:"-100%", ease:es_step});
        }
    });

    $gnbDepthBtn.click(function () {
        var _this = $(this);
        var _underH = _this.siblings("ul").innerHeight();
        if(!_this.hasClass("active")){
            $gnbDepthBtn.removeClass("active");
            _this.addClass("active");
            TweenMax.to($gnbDepthBtn.closest("li"), .3, {height:24, ease:es_step});
            TweenMax.to(_this.closest("li"), .3, {height:25 + _underH, ease:es_step});
        } else {
            $gnbDepthBtn.removeClass("active");
            TweenMax.to($gnbDepthBtn.closest("li"), .3, {height:24, ease:es_step});
        }
    });


    //footer
    var $familySite = $("#familySite");
    var $familyBtn = $familySite.find("button");
    var $familySiteH = $familySite.find('div').height() + 43;
    $familyBtn.click(function () {
        if(!$familySite.hasClass("active")){
            TweenMax.to($familySite, .2, {height:$familySiteH});
            $familySite.addClass("active");
        } else {
            TweenMax.to($familySite, .2, {height: 43});
            $familySite.removeClass("active");
        }
    });
    $familySite.mouseleave(function () {
        TweenMax.to($familySite, .2, {height: 43});
        $familySite.removeClass("active");
    });
}




function locationJS(){
    $subLocation.find("button").click(function (e) {
        e.preventDefault();
        var _this = $(this);
        var locationDepthH = _this.siblings(".under_depth").outerHeight();
        if(!_this.hasClass("active")){
            _this.addClass("active");
            TweenMax.to($(".location_list > li") , .3, {height: 50, ease:es_step});
            TweenMax.to($(this).parent(), .3, {height: locationDepthH + 50, ease:es_step});
        } else {
            if (!TweenMax.isTweening($(".location_list > li"))) {
                $subLocation.find("button").removeClass("active");
                TweenMax.to($(this).parent(), .3, {height: 50, ease: es_step});
            }
        }
    });

    $(".location_list > li").on("mouseleave", function () {
        $subLocation.find("button").removeClass("active");
        TweenMax.to($(".location_list > li"), .3, {height: 50, ease: es_step});
    });

    //접근성 이슈
    var $underDepth = $subLocation.find(".depth1, .depth2");
    $underDepth.each(function () {
        var _this = $(this);
        _this.find("li").eq(-1).find("a").keydown(function(e){
            if (!TweenMax.isTweening($(".location_list > li"))) {
                var tab = Tab(function(){
                    $subLocation.find("button").removeClass("active");
                    TweenMax.to($(".location_list > li"), .3, {height: 70, ease: es_step});
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

        $solutionTxt.css({display:"none"})
        $solutionTxt.eq(_index).css({display:"block"})
    }
}
function promotionJS(){
    var $ethicalEthics = $(".ethical_ethics");
    var $ethicsTab = $ethicalEthics.find(".ethics_tab button");
    var $ethicsWrap = $ethicalEthics.find(".ethics_wrap");
    var $ethicsContents = $ethicsWrap.find("> div");

    $ethicsWrap.height($ethicsContents.eq(0).height());


    $ethicsTab.click(function () {
        var _this = $(this);
        var _index = _this.parent().index();
        $ethicsWrap.height($ethicsContents.eq(_index).height());
        TweenMax.to($ethicsContents, .3, {opacity:0, y:30, ease:es_step});
        TweenMax.to($ethicsContents.eq(_index), .3, {opacity:1, y:0, ease:es_step});
        $ethicsTab.removeClass("active");
        _this.addClass("active");
    });
}
function scrollEvent(){
    var $topBtn = $("#topBtn");

    var $pallIcon = $("#pallIcon");
    var $pallRight = $pallIcon.find(".right_icon, .right_bottom_icon");
    var $pallLeft = $pallIcon.find(".left_icon");

    var $subVisual = $("#subVisual");

    $(window).scroll(function () {
        //스크롤에 따른 bg 패럴럭스
        $(".pall_bg").each(function () {
            var offset = $(this).offset();
            var offsetTop = offset.top;
            var _this_h = $(this).innerHeight();
            var _bg_p = (winSc - offsetTop) / _this_h * 100;
            $(this).css({"background-position-y":-_bg_p.toFixed(2) + "%"});
        });
        //서브 비쥬얼 bg 패럴럭스
        $subVisual.css({"background-position-y":winSc / 2});

        //탑버튼 하단 위치 고정
        if (winSc > htmlH - 216 - winH) {
            $topBtn.addClass("fixed");
        } else {
            $topBtn.removeClass("fixed");
        }

        //서브 로케이션 위치 고정 
        if($subLocation === false) {return}
        if (winSc > 240) {
            $subLocation.addClass("fixed");
        } else {
            $subLocation.removeClass("fixed");
        }
    });

    $topBtn.click(function () {
        TweenMax.to($("html, body"), .3, {scrollTop:0, ease:es_step});
    });

    var $jsScrSec = $(".js-scr-sec"); // js-scr-sec - 패럴럭스 효과 시작 박스 / 하위 js-scr-box 와 셋트
    var scrInnerStep = []; // 각 페이지의 js-scr-sec 위치 저장
    function pallContents() {
        $window.scroll(function () {
            scrollMotion(winSc);
        });
        $jsScrSec.each(function(){
            var _this = $(this);
            var secTop = _this.offset().top;
            var secInner = secTop - (winH / 2) - 350;
            scrInnerStep.push([_this,secInner]);
        });
        function scrollMotion(_winSc) {
            $.each(scrInnerStep, function (i, v) {
                if (_winSc >= v[1]) {
                    if (v[0].motion === undefined) {
                        v[0].addClass("js-motion-end");
                        TweenMax.staggerTo(v[0].find(".js-scr-box"), .8, {
                            y: 0, opacity: 1, ease: es_step
                        }, .2);
                        v[0].motion = true;
                    }
                }
            });
        }
        scrollMotion(winSc);
    }
    pallContents();
}









