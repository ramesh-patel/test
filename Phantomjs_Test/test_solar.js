
var page = require("webpage").create();
page.open("http://indiagoessolar.com/solar-installer-premium/203/#PEETEE Solar", function () {
    var element_text = page.evaluate(function () {
        return document.querySelector(' div.mk-main-wrapper-holder > div > div > div.vc_col-sm-12.wpb_column.column_container > div > div.page > div > div > div > div.side-wr > div.right-side > div:nth-child(1) > span class="title-block" ').textContent;
    });
    console.log(element_text);
    phantom.exit();
});
