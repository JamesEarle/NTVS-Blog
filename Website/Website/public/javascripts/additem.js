// Testing adding an item to DB
function addItem(a) {
    var banner = new Image({ path : a });
    console.log(banner.path);
    banner.save();
}