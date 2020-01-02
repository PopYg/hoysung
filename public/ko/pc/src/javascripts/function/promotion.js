function promotionJS(){
    var $ethicalEthics = $(".ethical_ethics");
    var $ethicsTab = $ethicalEthics.find(".ethics_tab button");
    var $ethicsWrap = $ethicalEthics.find(".ethics_wrap");
    var $ethicsContents = $ethicsWrap.find("> div");
    var _ethicsContentsH = [3307, 2968];

    $ethicsTab.click(function () {
        var _this = $(this);
        var _index = _this.parent().index();
        $ethicsWrap.css({"height":_ethicsContentsH[_index]});
        TweenMax.to($ethicsContents, .3, {opacity:0, y:30, ease:es_step});
        TweenMax.to($ethicsContents.eq(_index), .3, {opacity:1, y:0, ease:es_step});
        $ethicsTab.removeClass("active");
        _this.addClass("active");
    });
}