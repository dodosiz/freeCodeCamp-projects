$(document).ready(function(){
  
    /* ************************************
    Initially these elements are hidden
    ************************************* */
    
    // social media buttons
    $("a.button").hide();
    
    // the main header and subheader
    $("#welcome").hide();
    $("#welcome_p").hide();
    
    // contact form
    $("section.contact").hide();
    
    // description about yourself
    $("#about").hide();
    
    // this is the horizontal rule in the middle
    $("hr").hide();
    
    // the portfolio projects
    $("#portfolio").hide();
    
    // this is the parrent of the actual portfolio
    $(".portfolio").hide();

    
    /* ************************************
    These elements show after scroll
    ************************************* */
    $(document).scroll(function(){
        // project icons fade in
        $("#portfolio").fadeIn(3000);
        
        // contact form fades in
        $("section.contact").fadeIn(4000);
        
        // this is the horizontal rule in the middle
        $("hr").fadeIn(3000);
    });
    
    
    /* ************************************
    These elements show after click
    ************************************* */
    $(document).click(function(){
        // this is to allow the projects to show
        $(".portfolio").show();
        
        // the click anywhere message
        $("#just_click").hide();
        
        // the main header and subheader
        $("#welcome").fadeIn(500);
        $("#welcome_p").fadeIn(750);
        
        // social media buttons
        $("#twitter").fadeIn(1000);
        $("#linkdn").fadeIn(1500);
        $("#github").fadeIn(2000);
        
        // the description about yourself
        $("#about").slideDown(2000);
    });
});
