$(document).ready(function(){
    console.log('Test')

    $(".icon").click(function(){
        $(".card").toggleClass("card--visible");
    });

});