function layout() {
    var $header = $("#header");
    var $gnb = $header.find("#gnb"),
        $gnbOpenDepth = $gnb.find(".open_depth"),
        $gnbAllDepth = $gnb.find(".all_depth"),
        $gnbAllDepthWrap = $gnbAllDepth.find(".depth_wrap");
    var _allDepthH = $gnbAllDepthWrap.innerHeight();

    var $gnbDimmed = $("#gnbDimmed");
    var $allNavBtn = $("#allNavBtn");

    /*//gnb open/close
    $gnbOpenDepth.find("li a").mouseenter( function () {
        gnbOpen(_allDepthH);
    });
    $gnbAllDepth.mouseleave(function () {
        gnbClose();
    });

    function gnbOpen(_gnbHeight) {
        $gnbAllDepthWrap.addClass("open");
        TweenMax.to($gnbAllDepth, .5, {height: _gnbHeight, ease: es_step});
        TweenMax.to($gnbDimmed, .5, {display:"block", opacity:.8, ease:es_step});
    }

    function gnbClose() {
        $gnbAllDepthWrap.removeClass("open");
        TweenMax.to($gnbAllDepth, .5, {height: 0, ease: es_step});
        TweenMax.to($gnbDimmed, .5, {display:"none", opacity:0, ease:es_step});
    }*/

    //헤더 뉴스 모션
    var $headerNews = $header.find(".header_news"),
        $headerNewsObject = $headerNews.find("li"),
        _headerNewsLength = $headerNews.find("li").length;

    var headerNewsCrr = {};
    Object.defineProperty(headerNewsCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            _index = _index % _headerNewsLength;
            TweenMax.to($headerNewsObject.eq(_index-1), .3, {y: -20});
            TweenMax.fromTo($headerNewsObject.eq(_index), .3, {y: 20}, {y: 0});
            this.num = _index;
        }
    });

    var headerNewsDuration = 3000;
    var headerNewsTimer = setInterval(visualSet, headerNewsDuration);

    function visualSet(){
        headerNewsCrr.number++;
    }

    $headerNews.find("a").mouseenter(function () {
        clearInterval(headerNewsTimer);
    }).mouseleave(function () {
        headerNewsTimer = setInterval(visualSet, headerNewsDuration);
    });

    //장바구니, 검색 오픈
    var $headerCartSearchBtn = $header.find(".cart_btn, .search_btn");
    var $headerPopupClose = $header.find(".header_popup_close");
    $headerCartSearchBtn.click(function () {
        TweenMax.to($(this).siblings(".header_popup"), .3, {y:0, opacity:1, display:"block", ease:es_step});
    });

    $headerPopupClose.click(function () {
        TweenMax.to($(this).parent(".header_popup"), .3, {y:20, opacity:0, display:"none", ease:es_step});
    });

    //gnb_search
    /*$allNavBtn.click(function () {
        var _this = $(this);
        if (!_this.hasClass("active")) {
            _this.addClass("active");
            TweenMax.to($headerSiteMap, .3, {height:525});
            TweenMax.to($navDimmed, .3, {display:"block", opacity:.6, ease:es_step});
            $fpNav.css({display: "none"});
            navOpen = true;
        } else {
            _this.removeClass("active");
            TweenMax.to($headerSiteMap, .3, {height:0});
            TweenMax.to($navDimmed, .3, {display:"none", opacity:0, ease:es_step});
            $fpNav.css({display: "block"});
            navOpen = false;
        }
    });*/

    //footer
    var $familySite = $("#familySite");
    var $familyBtn = $familySite.find("button");
    var $familySiteH = $familySite.find('div').height() + 41;
    $familyBtn.click(function () {
        if(!$familySite.hasClass("on")){
            TweenMax.to($familySite, .2, {height:$familySiteH});
            $familySite.addClass("on");
        } else {
            TweenMax.to($familySite, .2, {height: 41});
            $familySite.removeClass("on");
        }
    });
    $familySite.mouseleave(function () {
        TweenMax.to($familySite, .2, {height: 41});
        $familySite.removeClass("on");
    });
}



