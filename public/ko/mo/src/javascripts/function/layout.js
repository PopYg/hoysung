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



