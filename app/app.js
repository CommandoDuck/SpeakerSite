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
        var currentModal = this.parentElement.parentElement.className;
        console.log($(e));
        $(".modal").css("display", "none");
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
    });

    $(".submit").click(function(e){
        e.preventDefault();

        var un = userName.value;
        var ps = password.value;
        var isEmailValid = validateEmail(un);

        console.log(un);
        console.log(ps);

        if(ps != "" && un != "")
        {

        } else
        {
            alert("You must fill out both input boxes.");
        }


        if(isEmailValid != true)
        {
            $(".signUp").css("display", "none");
            alert(isEmailValid);
        } else
        {
            //TODO need to make a deferred on the service
            Service.checkService(un);
            alert(isEmailValid);
        }
    });

    $(".login").click(function(){
        $(".signUp").css("display", "block")
    });

    $(".signUp").click(function(){
        $(".signUpModal").css("dispaly", "block");
    })

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(document).ready(function(){
    console.log("loaded");
    setBindings();
});