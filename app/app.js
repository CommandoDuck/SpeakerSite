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

    $(".guide").click(function(e){
        $(".guide").css("display", "none");
    })
}

$(document).ready(function(){
    console.log("loaded");
    setBindings();
});