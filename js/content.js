$(document).ready(function(){
    $("#dropdown1").click(function(){
        $("#model1").toggle();
    });
    $("#dropdown2").click(function(){
        $("#model2").toggle();
    });

    $("#car1").hover(function(){
        $("#car1>.details").toggle();
    })
})