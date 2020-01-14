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
}