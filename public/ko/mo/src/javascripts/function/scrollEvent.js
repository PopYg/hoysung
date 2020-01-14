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









