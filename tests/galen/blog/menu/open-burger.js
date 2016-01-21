/**
 * Created by Pavlo_Oliinyk1 on 1/21/2016.
 */
var delay = 1000;
setTimeout(function(){
    console.log('delay', delay);
    $("#menu-btn").click();
}, delay);

/*
galen check ./tests/galen/blog/menu/empty.gspec
    --javascript ./tests/galen/blog/menu/open-burger.js
    --url http://ticketmaster-api-staging.github.io/blogs
    --size 349x1080
    --htmlreport tests/galen/reports/blog/mobile-burger-check
*/