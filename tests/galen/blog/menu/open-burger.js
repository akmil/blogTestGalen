/**
 * Created by Pavlo_Oliinyk1 on 1/21/2016.
 */
//$("#menu-btn").click();

var driver = createDriver("http://ticketmaster-api-staging.github.io/blogs",
    "349x800",
    "firefox"
);

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
    checkLayout({
        driver: driver,
        spec: "./tests/galen/blog/menu/mobile-header-menu-open.gspec",
        tags: ["mobile"]
    });
    return button.isDisplayed();
});

/*
galen check ./tests/galen/blog/menu/empty.gspec
    --javascript ./tests/galen/blog/menu/open-burger.js
    --url http://ticketmaster-api-staging.github.io/blogs
    --size 349x1080
    --htmlreport tests/galen/reports/blog/mobile-burger-check
*/