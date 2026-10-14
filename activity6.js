$(document).ready(function(){
  $("*").css("font","arial")

    $("#btn").click(function(){
        $(this).css("background", "rgb(65, 132, 196)")

        $("#title").text("Welcome, Students!")     
    })

    $("#btn").dblclick(function(){
        $(this).css("background", "rgb(65, 132, 196)")

        $("#title").text("My Student Profile")     
    })

    $("#course").click(function(){
        $("#message1").text("Course selection is active.") 
    })

    $("#course").click(function(){
       $("#message1").text("Course selection is inactive") 
    })

    $(".btn1").click(function(){
        $("#info").hide("slow")
    })
     $(".btn2").dblclick(function(){
        $("#info").show(1000)
    })

    $("th").css("background",  "rgb(255, 186, 221)")

    $("tr:even").css("background",  "rgb(176, 191, 255)")

    $("#btn3").click(function(){
        $(this).css("background", "rgb(65, 132, 196)")
})
    $("tr:odd").css("background",  "rgb(165, 153, 231)")




    $("#btn").mouseenter(function(){
        $("#message").text("Your mouse reached the button")
    })

    $("#btn").mouseleave(function(){
        $("#message").text("Your mouse left the button")
    })

    $("#btn").mousedown(function(){
        $(this).css("background", "rgb(129, 103, 202)")
    })

    $("#btn").mouseup(function(){
       $(this).css("background", "rgb(78, 137, 226)")
    })

    $("#btn1").mousedown(function(){
        $(this).css("background", "rgb(129, 103, 202)")
    })

    $("#btn1").mouseup(function(){
       $(this).css("background", "rgb(78, 137, 226)")
    })

    $("#btn2").mousedown(function(){
        $(this).css("background", "rgb(129, 103, 202)")
    })

    $("#btn2").mouseup(function(){
       $(this).css("background", "rgb(78, 137, 226)")
    })

    $(".btn2").mousedown(function(){
        $(this).css("background", "rgb(104, 65, 196)")
    })

    $(".btn2").mouseup(function(){
       $(this).css("background", "rgb(78, 137, 226)")
    })
    $(".btn3").mousedown(function(){
        $(this).css("background", "rgb(104, 65, 196)")
    })

    $(".btn3").mouseup(function(){
       $(this).css("background", "rgb(78, 137, 226)")
    })
    $(".btn4").mousedown(function(){
        $(this).css("background", "rgb(104, 65, 196)")
    })

    $(".btn4").mouseup(function(){
       $(this).css("background", "rgb(78, 137, 226)")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })
    
    $("[href]").css("color", "black")




})