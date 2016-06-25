/*
    Additional support for use of the 'vh' unit in CSS. 
*/

$(document).ready(function () {
    var height = $(window).height();

    var cssSelectors = [
        ".overlay",
        ".overlay-half-down",
        ".overlay-half-up",
        ".headline-background",
        ".headline-background-lg"
    ];

    //for (var key in cssSelectors) {
    //    if (cssSelectors[key] === ".headline-background-sm") {
    //        $(cssSelectors[key]).css("height", 2 * height);
    //    } else {
    //        $(cssSelectors[key]).css("height", height);
    //    }
    //}

});