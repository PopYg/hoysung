function main() {
    //mainVisual
    var $mainVisual = $("#mainVisual");
    var $visualImg = $mainVisual.find(".visual_img li"),
        $visualTxt = $mainVisual.find(".visual_txt li");
    var _visualLength = $visualImg.length;

    //인디게이터
    var $mainIndi = $("#mainIndi"),
        $indiBtn = $mainIndi.find("button");
    var $visualController = $("#visualController");

    var zIndexPrev = 0;
    var zIndexNext = 1;
    var visualDuration = 1;

    //비쥬얼 갯수 체크
    /*for(var i=0; i<_visualLength-1; i++){
        $mainIndi.append("<li><button type='button'><span></span></button></li>");
    }
    if(_visualLength <= 1){
        $mainIndi.hide();
    }*/

    //비쥬얼 모션
    var visualCrr = {};
    Object.defineProperty(visualCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            _index = _index % _visualLength;
            if (!TweenMax.isTweening($visualImg)) {
                if(visualCrr.number < _index){
                    TweenMax.fromTo($visualImg, visualDuration + 0.2,
                        {zIndex: zIndexPrev, right: "auto", left: 0},
                        {width: "0%", ease: Expo.easeOut}
                    );
                    TweenMax.fromTo($visualImg.eq(_index), visualDuration,
                        {zIndex: zIndexNext, left: "auto", right: 0},
                        {width: "100%", ease: Expo.easeOut}
                    );

                    TweenMax.to($visualTxt.find(".tit,.txt,a"), visualDuration,
                        {x:-30, opacity:0, display:"none", ease:Expo.easeOut}
                    );
                    TweenMax.staggerFromTo($visualTxt.eq(_index).find("p,a"), visualDuration,
                        {x:30},
                        {x:0, opacity:1, display:"block", ease:Expo.easeOut}, .1
                    );
                } else {
                    TweenMax.fromTo($visualImg, visualDuration + 0.2,
                        {zIndex: zIndexPrev, left: "auto", right: 0},
                        {width: "0%", ease:Expo.easeOut}
                    );
                    TweenMax.fromTo($visualImg.eq(_index), visualDuration,
                        {zIndex: zIndexNext, right: "auto", left: 0},
                        {width: "100%", ease:Expo.easeOut}
                    );

                    TweenMax.to($visualTxt.find("p,a"), visualDuration,
                        {x:30, opacity:0, display:"none", ease:Expo.easeOut}
                    );
                    TweenMax.staggerFromTo($visualTxt.eq(_index).find("p,a"), visualDuration,
                        {x:-30},
                        {x:0, opacity:1, display:"block", ease:Expo.easeOut}, .1
                    );
                }
                $mainIndi.find("button").removeClass("active");
                $mainIndi.find("li").eq(_index).find("button").addClass("active");
                this.num = _index;
            }
        }
    });

    var interDuration = 4000;
    var visualTimer = setInterval(visualSet, interDuration);

    function visualSet(){
        visualCrr.number = visualCrr.number+1;
    }

    $visualController.click(function () {
        var _this = $(this);
        if (_this.hasClass("stop")) {
            clearInterval(visualTimer);
            _this.removeClass("stop").addClass("play");
        } else {
            visualTimer = setInterval(visualSet, interDuration);
            _this.removeClass("play").addClass("stop");
        }
    });

    $indiBtn.click(function () {
        var _this = $(this).parent();
        var _index = _this.index();
        if(!$visualController.hasClass("stop")){
            clearInterval(visualTimer);
            visualCrr.number = _index;
        } else {
            clearInterval(visualTimer);
            visualTimer = setInterval(visualSet, interDuration);
            visualCrr.number = _index;
        }
    });

   /* $nextBtn.click(function () {
        if (!TweenMax.isTweening($visualImg)) {
            visualCrr.number++;
            TweenMax.fromTo($visualImg, visualDuration+0.2,
                {zIndex: zIndexPrev, right:"auto", left:0},
                {width:"0%", ease:Expo.easeOut}
            );
            TweenMax.fromTo($visualImg.eq(visualCrr.number), visualDuration,
                {zIndex: zIndexNext, left: "auto", right: 0},
                {width: "100%", ease:Expo.easeOut}
            );

            TweenMax.to($visualTxt.find("h1,p,a"), visualDuration,
                {x:-20, opacity:0, display:"none", ease:Expo.easeOut}
            );
            TweenMax.fromTo($visualTxt.eq(visualCrr.number).find("h1,p,a"), visualDuration,
                {x:20},
                {x:0, opacity:1, display:"block", ease:Expo.easeOut}
            );
        }
    });
    $prevBtn.click(function () {
        if (!TweenMax.isTweening($visualImg)) {
            visualCrr.number--;
            TweenMax.fromTo($visualImg, visualDuration + 0.2,
                {zIndex: zIndexPrev, left: "auto", right: 0},
                {width: "0%", ease:Expo.easeOut}
            );
            TweenMax.fromTo($visualImg.eq(visualCrr.number), visualDuration,
                {zIndex: zIndexNext, right: "auto", left: 0},
                {width: "100%", ease:Expo.easeOut}
            );

            TweenMax.to($visualTxt.find("h1,p,a"), visualDuration,
                {x:20, opacity:0, display:"none", ease:Expo.easeOut}
            );
            TweenMax.fromTo($visualTxt.eq(visualCrr.number).find("h1,p,a"), visualDuration,
                {x:-20},
                {x:0, opacity:1, display:"block", ease:Expo.easeOut}
            );
        }
    });*/

    //주요제품
    var $productSlide = $("#productSlide");
    //텍스트
    var $txtSlide = $productSlide.find(".txt_slide article");
    //이미지
    var $productImg = $productSlide.find(".img_wrap div");
    //이전, 다음 버튼
    var $prevBtn = $productSlide.find("#prevBtn"),
        $nextBtn = $productSlide.find("#nextBtn");
    //카테고리
    var $categoryLeft = $productSlide.find(".category_left"),
        $categoryRight = $productSlide.find(".category_right"),
        //리스트 버튼
        $categoryBtn = $productSlide.find(".category_btn button"),
        //리스트 불렛
        $categoryDot = $productSlide.find(".active_dot");

    var productCrr = {};
    var _productLength = 10;

    Object.defineProperty(productCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            _index = _index % _productLength;
            if(_index < 0){
                _index = 9;
            }
            //이미지
            TweenMax.to($productImg, 2, {opacity:0, ease:es_step});
            TweenMax.to($productImg.eq(_index), .5, {opacity:1, ease:es_step});

            //텍스트
            TweenMax.to($txtSlide, 1, {opacity:0, display:"none", ease:es_step});
            TweenMax.to($txtSlide.eq(_index), .2, {opacity:1, display:"block", ease:es_step});

            //리스트
            TweenMax.to($categoryLeft, .5, {width: _index * 118, ease: es_step});
            TweenMax.to($categoryRight, .5, {width: 1180 - _index * 118 - 118, ease: es_step});

            TweenMax.to($categoryDot, .5, {left: 118 * _index + 49, ease:es_step});
            this.num = _index;
        }
    });
    //다음 버튼
    $nextBtn.click(function () {
        productCrr.number++;
    });
    //이전 버튼
    $prevBtn.click(function () {
        productCrr.number--;
    });
    //리스트 버튼
    $categoryBtn.click(function () {
        var _this = $(this);
        var _index = _this.parent().index();

        productCrr.number = _index;
    });

}































