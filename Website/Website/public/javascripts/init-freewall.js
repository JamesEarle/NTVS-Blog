var wall = new Freewall("#freewall");
wall.reset({
    selector: '.item',
    animate: true,
    cellW: 20,
    cellH: 200,
    onResize: function () {
        wall.fitWidth();
    }
});
wall.fitWidth();
// for scroll bar appear;
$(window).trigger("resize");

//var wall = new Freewall("#freewall-container");
//wall.fitWidth();

console.log("Fit the Freewall container");