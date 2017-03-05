$(document).ready(function(){
  
    // Initially those elements don't show
    $("a.column").hide();
    $("a.button").hide();
    $("#welcome").hide();
    $("#welcome_p").hide();

    $(document).click(function(){
        // Animations while 
        $("#just_click").hide();
        $("#welcome").fadeIn(500);
        $("#welcome_p").fadeIn(750);
        $("#twitter").fadeIn(1000);
        $("#linkdn").fadeIn(1500);
        $("#github").fadeIn(2000);
        $("a.column").slideDown("slow");
    });
});
