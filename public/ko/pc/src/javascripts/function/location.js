function locationJS(){
    $subLocation.find("button").on("mouseenter focusin",function () {
        event.preventDefault();
        var _this = $(this);
        var locationDepthH = _this.siblings(".under_depth").outerHeight();
        if(!_this.hasClass("active")){
            _this.addClass("active");
            TweenMax.to($(".location_list > li") , .3, {height: 70, ease:es_step});
            TweenMax.to($(this).parent(), .3, {height: locationDepthH + 70, ease:es_step});
        } else {
            if (!TweenMax.isTweening($(".location_list > li"))) {
                $subLocation.find("button").removeClass("active");
                TweenMax.to($(this).parent(), .3, {height: 70, ease: es_step});
            }
        }
    });

    $(".location_list > li").on("mouseleave", function () {
        $subLocation.find("button").removeClass("active");
        TweenMax.to($(".location_list > li"), .3, {height: 70, ease: es_step});
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