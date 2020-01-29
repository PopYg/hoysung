function main() {
    var $container = $("#container");
    var $mainSolution = $container.find(".main_solutions"),
        $solutionsImg = $mainSolution.find(".img_wrap div"),
        $solutionTxt = $mainSolution.find(".txt_wrap .txt_box"),
        $solutionBtn = $mainSolution.find("button");

    var _solutionIndex = 0;
    $solutionBtn.click(function () {
        _solutionIndex++;
        _solutionIndex = _solutionIndex % 2;
        solutionRolling(_solutionIndex);
    });
    function solutionRolling(_index){
        TweenMax.to($solutionsImg, .3, {opacity:0});
        TweenMax.to($solutionsImg.eq(_index), .3, {opacity:1});

        $solutionTxt.css({display:"none"})
        $solutionTxt.eq(_index).css({display:"block"})
    }
}