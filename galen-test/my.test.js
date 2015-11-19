/**
 * Created by Pavlo_Oliinyk1 on 11/19/2015.
 */
test("SauceLabs test for homepage on iPhone", function () {
    var driver = createGridDriver("http://ishubin:blabla-bla-bla-bla-blabla@ondemand.saucelabs.com:80/wd/hub", {
        browser: "iphone",
        desiredCapabilities: {
            platform: "OS X 10.8",
            version: "6.0",
            "device-orientation": "portrait"
        }
    });

    driver.get("http://testapp.galenframework.com");
    checkLayout(driver, "home.spec", ["mobile"]);
});