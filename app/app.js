/**
 * Created by Eric on 2/9/16.
 */

function setBindings() {
    var menuDisplayed = false;
    $(".logo").click(function(e){

        if(menuDisplayed)
        {
            $(".contentWrapper").animate({
                left: "0"

            }, 500, function(){
                menuDisplayed = false;
            });
        } else {
            $(".contentWrapper").animate({
                left: "20%"

            }, 500, function(){
                menuDisplayed = true;
                console.log(menuDisplayed);
            });
        }
    });

    /*$(".guide").click(function(e){
        $(".guide").css("display", "none");
    });*/

    $(".exit").click(function(e) {
        $(".guide").css("display", "none");
    });

    $(".tSubmit").click(function(){
        $(".guide").css("display", "block");
    });

    $("#form").submit(function(){
        console.log("yes");
        $(".guide").css("display", "none");
        $(".formValid").css("display", "block");

        $(".formValid").fadeOut(2000, function() {

        });
        return false;
    })
}

$(document).ready(function(){
    console.log("loaded");
    setBindings();
});