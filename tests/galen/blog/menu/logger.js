console.log('test console');

$.getJSON( "out.json" , function( result ){
    console.log(result.start.count);
});