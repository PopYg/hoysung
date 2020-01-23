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



