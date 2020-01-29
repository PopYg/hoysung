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



