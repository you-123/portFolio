  
     $("#showall").click( function(){  
  $("#apple").collapse("show");
  $("#cameras").collapse("show");
  $("#Computer").collapse("show");
  $("#fashion1").collapse("show");
  $("#fashion2").collapse("show");
  $("#fashion3").collapse("show");
  $("#art1").collapse("show");
  $("#art2").collapse("show");
  $("#art3").collapse("show");
}); 

$("#tecnology").click( function(){  
  $("#apple").collapse("show");
  $("#cameras").collapse("show");
  $("#Computer").collapse("show"); 
  $("#fashion1").collapse("hide");
  $("#fashion2").collapse("hide");
  $("#fashion3").collapse("hide");
  $("#art1").collapse("hide");
  $("#art2").collapse("hide");
  $("#art3").collapse("hide");     
});
$("#fashion").click( function(){  
  $("#apple").collapse("hide");
  $("#cameras").collapse("hide");
  $("#Computer").collapse("hide"); 
  $("#fashion1").collapse("show");
  $("#fashion2").collapse("show");
  $("#fashion3").collapse("show");
  $("#art1").collapse("hide");
  $("#art2").collapse("hide");
  $("#art3").collapse("hide");     
});
$("#art").click( function(){  
  $("#apple").collapse("hide");
  $("#cameras").collapse("hide");
  $("#Computer").collapse("hide"); 
  $("#fashion1").collapse("hide");
  $("#fashion2").collapse("hide");
  $("#fashion3").collapse("hide");
  $("#art1").collapse("show");
  $("#art2").collapse("show");
  $("#art3").collapse("show");     
});

   // Set the date we're counting down to
   var countDownDate = new Date("julay18, 2020 13:37:25").getTime();
    
   // Update the count down every 1 second
   var x = setInterval(function() {
   
     // Get today's date and time
     var now = new Date().getTime();
       
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
       
     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
     // Output the result in an element with id="demo"
     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
     + minutes + "m " + seconds + "s ";
       
     // If the count down is over, write some text 
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("demo").innerHTML = " Product is Live";
     }
   }, 1000);
   