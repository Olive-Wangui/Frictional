$(document).ready(function(){
    $("#design-1").hide();
    $("#picture-1").click(function() {
        if($("#design-1").is(":visible")){
           $("#design-1").show();
        }else{
            $("#design-1").hide();
        }
    })
})
$(document).ready(function(){
    $("#dev-2").hide();
    $("#picture-2").click(function() {
        if($("#dev-2").is(":visible")){
           $("#dev-2").show();
        }else{
            $("#dev-2").hide();
        }
    })
})
$(document).ready(function(){
    $("#product3").hide();
    $("#picture-3").click(function() {
        if($("#product3").is(":visible")){
           $("#product3").show();
        }else{
            $("#product3").hide();
        }
    })
})