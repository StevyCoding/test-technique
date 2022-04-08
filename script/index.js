$(document).ready(function(){

    $(".level").each(function(){
        $(this).html() == "Faible" ? $(this).css("color","#0FBDE6") : null;
        $(this).html() == "Moyenne" ? $(this).css("color","#F8C201") : null;
        $(this).html() == "Forte" ? $(this).css("color","#F98434") : null;
        $(this).html() == "Très forte" ? $(this).css("color","#BB0D4C") : null;

        $(this).html() == "Faible" ? $(this).css("background","#0FBDE61F") : null;
        $(this).html() == "Moyenne" ? $(this).css("background","#F8C2011F") : null;
        $(this).html() == "Forte" ? $(this).css("background","#F984341F") : null;
        $(this).html() == "Très forte" ? $(this).css("background","#F6E2E9") : null;
    });
    $("#newContent").hide();
    $("#advForm").hide();
    $("#overlay").hide();

    

    $("#new").click(function(){
        $("#newContent").toggle();
    }
    )
    // Modal element

    $("#newSprint").click(function(){

        $("#modal").css("display","block");
        $("#overlay").show();

    })

    $("#close").click(function(){
        $("#modal").css("display","none");
        $("#overlay").hide();

    })

    $("#annuler").click(function(){
        $("#modal").css("display","none");
        $("#overlay").hide();

    })
    
    $("#addRiskBtn").click(function(){
        $("#advForm").show();
        $(this).hide();
        $("#lbVelocity").hide();
        $("#velocity").hide();
    })

     
});