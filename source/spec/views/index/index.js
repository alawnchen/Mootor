(function ($) {
    
    "use strict";

    var view = m.app.view("index");
    
    view.on("load", function() {
        // code here
    });
    
    var goToTestview = function() {
        var email = $("#inputEmail")[0].value;
        m.app.go("#welcome/" + email );
    }
    
    $("#btnLogin").on("tap", goToTestview);
    $("#btnLogin").on("click", goToTestview);


}(window.$));
