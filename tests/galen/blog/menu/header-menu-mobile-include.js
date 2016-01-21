// These two values are passed from Galen test
//var userLogin = arg.login;
//var userPassword = arg.password
var driver = createDriver("http://ticketmaster-api-staging.github.io/blogs",
    "349x800",
    "firefox"
);
// Here we type user login and password on our login page
//driver.findElement(By.cssSelector("#login-form .login")).sendKeys(userLogin);
//driver.findElement(By.cssSelector("#login-form .password")).sendKeys(userPassword);

// Submitting the login page
driver.findElement(By.cssSelector("#menu-btn")).click();

// Waiting till user profile page is shown
function pageIsLoaded() {
    return driver.findElement(By.id("user-profile")) != null;
}


waitFor(pageIsLoaded);

function waitFor(func) {
    var timeout = 10;

    while(timeout > 0 && !func()) {
        timeout = timeout - 1;
        Thread.sleep(1000);
    }

    if (!func()) {
        throw new Exception("Wait timeout");
    }
}

$("#menu-btn").trigger('click');


/*
galen test tests/galen/blog/menu/header-menu-mobile.js --htmlreport tests/galen/reports/jsClick

 ${base_url}/blogs/ ${mobile_size}

 galen check tests/galen/blog/mobile/mobile-header.gspec
     --url http://ticketmaster-api-staging.github.io/blogs
     --size 797x1080

 galen check
 tests/galen/blog/menu/header-menu-modile.test.js
 tests/galen/blog/mobile/mobile-header.gspec

 */
