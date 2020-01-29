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