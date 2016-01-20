test("Home page test on mobile device", function () {
    var driver = createDriver("http://ticketmaster-api-staging.github.io/blogs",
                            "320x800",
                            "firefox"
    );
    var driver1 = createGridDriver("http://ticketmaster-api-staging.github.io/blogs", {
        browser: "firefox",
        browserVersion: "42",
        platform: "LINUX",
        size: "320x800"
    });

    var Blogs = $page("Blogs", {
        title: "title",
        closeButton: ".tm-close",
        burgerButton: "#menu-btn"

        /*load: function () {
            this.open("http://ticketmaster-api-staging.github.io/products-and-docs/apis/partner/");
            return this.waitToBeShown();
        }*/
    });

    var blogs = new Blogs(driver);
        blogs.burgerButton.click();

    blogs.closeButton.waitFor(function (button) {
        console.log('button.isDisplayed()' + button.isDisplayed());
        return button.isDisplayed();
    });

    if (blogs.closeButton.exists()) {
        console.log('blogs.closeButton.exists()' + blogs.closeButton.exists());
        checkLayout({
            driver: driver,
            spec: "mobile-header-menu-open.gspec",
            tags: ["mobile"]
        });
    }
/*
    GalenPages.wait( {time: "2s", period: "1s"}).untilAll({
        "Password textfield should be shown": function () {
            console.log('blogs.closeButton.isDisplayed()' + blogs.closeButton.isDisplayed());
            return blogs.closeButton.isDisplayed();
        }
    });*/

});



/*
galen test tests/galen/blog/menu/header-menu-modile.test.js --htmlreport tests/galen/reports/jsClick

 ${base_url}/blogs/ ${mobile_size}

 galen
 check tests/galen/blog/mobile/mobile-header.gspec
     --url http://ticketmaster-api-staging.github.io/blogs
     --size 797x1080
     --include "mobile"
     --javascript "tests/galen/blog/menu/header-menu-modile.test.js"

 galen test
 tests/galen/blog/mobile/mobile-header.gspec
 tests/galen/blog/menu/header-menu-modile.test.js

 */
