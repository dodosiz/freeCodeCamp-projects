$(document).ready(function(){
  
    // Initially those elements don't show
    $("a.column").hide();
    $("a.button").hide();
    $("#portfolio").hide();
    $("#welcome").hide();
    $("#welcome_p").hide();
    $("section.contact").hide();
    $("#about").hide();
    $("hr").hide();
    $(".portfolio").hide();

    $(document).scroll(function(){
        //$("a.column").fadeIn(3000);
        $("#portfolio").fadeIn(3000);
        $("section.contact").fadeIn(4000);
        $("hr").fadeIn(3000);
    });
    
    $(document).click(function(){
        // Animations while 
        $(".portfolio").show();
        $("#just_click").hide();
        $("#welcome").fadeIn(500);
        $("#welcome_p").fadeIn(750);
        $("#twitter").fadeIn(1000);
        $("#linkdn").fadeIn(1500);
        $("#github").fadeIn(2000);
        $("#about").slideDown(2000);
    });
});
