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