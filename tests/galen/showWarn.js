test("show warnings test", function(){

function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(this.responseText);
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('tests/galen/reports/all/report.json');

});