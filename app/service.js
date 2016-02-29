/**
 * Created by Eric on 2/23/16.
 */


var Service = (function(){
    var _dbURL = "https://api.mongolab.com/api/1/databases/dw-speaker-site/collections/Speakers?";
    var _apiKey = "apiKey=58cu-2QldVymMLNkPGww5JcERbEaotNr";
    var _queryDb = "q={'email': '123@yahoo.com'}$fo=true&";

    var _logInUser = function(un) {
        $.ajax({
            url: _dbURL + "q={'email': '" + un + "'}$fo=true&" + _apiKey,
            type: "GET",
            contentType: "application/json"
        }).done(function (data){
            console.log('data: ' , data)
        });
    };

    var _addUser = function(){

        var objUser = {
            "f_name": "Cheese",
            "l_name": "Burger",
            "email": "456@yahoo.com",
            "password": "password",
            "role": "user"
        };

        $.ajax({
            url: _dbURL + _apiKey,
            type: "POST",
            data: JSON.stringify(objUser),
            contentType: "application/json"
        }).done(function (data){
            console.log('data: ' , data)
        });
    };

    return {
        checkService: _logInUser,
        addUser: _addUser()
    }
})();