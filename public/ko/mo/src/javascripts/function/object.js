function object(){
    var $popup = $("#modalPopup");
    var $popupOpen = $(".popup_open");
    var $close = $(".popup_close");
    var $popupWrap = $popup.find(".popup_wrap");

    $popupOpen.click(function () {
        var _this = $(this);
        var _popUpName = _this.attr("id").replace("OpenBtn","");
        $("html").addClass("no_scroll");
        $("#"+_popUpName).show();
        TweenMax.to($popup, .5, {opacity: 1, display: "block"});
        TweenMax.fromTo($(".popup_container"), .5, {y: 50}, {y: 0, ease: es_step});
    });

    function noscroll(){
        $("html").removeClass("no_scroll");
        $popupWrap.hide();
    }

    $close.on("click", function () {
        TweenMax.to($popup, .3, {opacity: 0, display: "none", ease: es_step, onComplete: noscroll});
    });

    //쿠키 정책 팝업
    var $cookiePopup = $("#cookiePopup");
    var $cookieBtn = $cookiePopup.find("button");

    $cookieBtn.click(function () {
        TweenMax.to($cookiePopup, .3, {y:70});
    });
}







