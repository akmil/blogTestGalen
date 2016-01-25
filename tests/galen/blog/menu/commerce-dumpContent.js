test("Dump test", function(){
    var driver = createDriver("http://ticketmaster-api-staging.github.io/products-and-docs/apis/commerce",
        "1469x800",
        "firefox"
    );
    dumpPage({
        driver: driver,
        name: "pd page Dump",
        spec: "tests/galen/home/homeDumpContent.gspec",
        exportPath: "tests/galen/reports/allDump", //htmlreport folder
        maxWidth: 2200,
        maxHeight: 2400,
        onlyImages: false,
        excludedObjects: ["header", "footer"]
    });

});



/*
galen test tests/galen/blog/menu/commerce-dumpContent.js
*/