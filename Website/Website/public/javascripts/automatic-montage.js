// JavaScript source code
// Source http://tympanus.net/codrops/2011/08/30/automatic-image-montage/
var $container = $('#am-container'),
        $imgs = $container.find('img'),
		totalImgs = $imgs.length,
        cnt = 0;

$container.montage({
    fillLastRow: false,
    alternateHeight: false,
    fixedHeight: 200,
    alternateHeightRange: {
        min: 140,
        max: 200
    }
});
//$imgs.each(function (i) {
//    var $img = $(this);
//    $("<img/>").load(function () {
//        ++cnt;
//        if (cnt === totalImgs) {
//            $imgs.show();
//            $container.montage({
//                fillLastRow: false,
//                alternateHeight: false,
//                fixedHeight: 200,
//                alternateHeightRange: {
//                    min: 140,
//                    max: 200
//                }
//            });
//        }
//    }).attr('src', $img.attr('src'));
//});

function mOver(e, cond) {
    // Easier to deal with jQuery object
    var elem = $(e);
    if (cond) {
        // Chrome, Opera, Safari
        $(e).siblings().eq(0).css({
            "-webkit-filter": "blur(2.5px)",
            "filter": "blur(2.5px)"
        });
    } else {
        $(e).children().eq(1).css({
            "-webkit-filter": "blur(2.5px)",
            "filter": "blur(2.5px)"
        });
        $(e).children().eq(0).css("display", "inline");
    }
}

function mOut(e, cond) {
    if (cond) {
        $(e).siblings().eq(0).css({
            "-webkit-filter": "blur(0px)",
            "filter": "blur(0px)"
        });
    } else {
        $(e).children().eq(1).css({
            "-webkit-filter": "blur(0px)",
            "filter": "blur(0px)"
        });

        $(e).children().eq(0).css("display", "none");
    }
}