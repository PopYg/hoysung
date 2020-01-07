function etcJS(){
    var $utilTerms = $(".util_terms");
    var $termsTab = $utilTerms.find(".terms_tab button");
    var $termsAnchor = $utilTerms.find("strong");

    var _anchorTop = [];
    $termsAnchor.each(function () {
        _anchorTop.push($(this).offset().top - 70);
    });

    $termsTab.click(function () {
        var _this = $(this);
        var _index= _this.parent().index();
        console.log(_anchorTop[_index]);
        TweenMax.to($("html, body"), .5, {scrollTop:_anchorTop[_index]});
    });
}