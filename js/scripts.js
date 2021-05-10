  $(document).ready(function(){
  $("#button1").mouseenter(function(){
  $("#myForm1").fadeTo("2s", 1);
  $("#bgimg").addClass("buttonsbgimgone");
  $("#button1").mouseleave(function() {
  $("#myForm1").fadeTo("0.2s", 0);
  $("#bgimg").removeClass("buttonsbgimgone");});})
  $("#button2").mouseenter(function(){
  $("#myForm2").fadeTo("2s", 1);
  $("#form").fadeTo("0.2s", 1);
  $("#bgimg").addClass("buttonsbgimgtwo");
  $("#button2").mouseleave(function() {
  $("#myForm2").fadeTo("0.2s", 0);
  $("#form").fadeTo("0.2s", 0.8);
  $("#bgimg").removeClass("buttonsbgimgtwo");});})
  $("#button3").mouseenter(function(){
  $("#myForm3").fadeTo("2s", 1);
  $("#form").fadeTo("0.2s", 1);
  $("#bgimg").addClass("buttonsbgimgthree");
  $("#button3").mouseleave(function() {
  $("#myForm3").fadeTo("0.2s", 0);
  $("#form").fadeTo("0.2s", 0.8);
  $("#bgimg").removeClass("buttonsbgimgthree");});})
  $("#button4").mouseenter(function(){
  $("#myForm4").fadeTo("2s", 1);
  $("#form").fadeTo("0.2s", 1);
  $("#bgimg").addClass("buttonsbgimgfour");
  $("#button4").mouseleave(function() {
  $("#myForm4").fadeTo("0.2s", 0);
  $("#form").fadeTo("0.2s", 0.6);
  $("#bgimg").removeClass("buttonsbgimgfour");

});})});

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  $(document).ready(function(){
    $("#button1").mouseenter(function(){
      $("#myForm1").animate({
        margin: '12.5% 55% 0% -600%',
        height: '12vw',
        width: '24vw',
        overflow: 'hidden',
        opacity: '1',
      }),$("#button1").animate({
        opacity: '0.4'
      }),$("#button2, #button3, #button4").animate({
        opacity:  '0'
      },  {
        duration: 2000,
        easing: "linear",
      });;
    });
    $("#button1").mouseleave(function(){
      $("#myForm1").animate({
        margin: '12.5% 55% 0% -600%',
        height: '12vw',
        width: '24vw',
        opacity:  '0',
        overflow: 'hidden'
      }),$("#button1").animate({
        opacity: '1'
      }),$("#button2, #button3, #button4").animate({
        opacity:  '1'
      },  {
        duration: 500,
        easing: "linear",
      });;
    });
  });
  $(document).ready(function(){
    $("#button2").mouseenter(function(){
      $("#myForm2").animate({
        height: '12vw',
        width: '24vw',
        overflow: 'hidden',
        opacity: '1'
      }),$("#button1, #button3, #button4").animate({
        opacity:  '0'
      }),$("#button2").animate({
        opacity: '0.4'
      }), {
        duration: 2000,
        easing: "linear",
      };
    });
    $("#button2").mouseleave(function(){
      $("#myForm2").animate({
        height: '12vw',
        width: '24vw',
        overflow: 'hidden',
        opacity:  '0'
      }),$("#button1, #button3, #button4").animate({
        opacity:  '1',
      }),$("#button2").animate({
        opacity: '1'
      }), {
        duration: 500,
        easing: "linear",
      };
    });
  });
  $(document).ready(function(){
  $("#button3").mouseenter(function(){
    $("#myForm3").animate({
      margin: '12.5% 55% 0% 630%',
      height: '12vw',
      width: '24vw',
      overflow: 'hidden',
      opacity: '1'
    }),$("#button1, #button2, #button4").animate({
      opacity:  '0'
    }),$("#button3").animate({
      opacity: '0.4'
    }), {
      duration: 2000,
      easing: "linear",
    };
  });
  $("#button3").mouseleave(function(){
    $("#myForm3").animate({
      margin: '12.5% 55% 0% 630%',
      height: '12vw',
      width: '24vw',
      overflow: 'hidden',
      opacity:  '0'
    }),$("#button1, #button2, #button4").animate({
      opacity:  '1',
    }), $("#button3").animate({
      opacity: '1'
    }),{
      duration: 500,
      easing: "linear",
    };
  });
;});
$(document).ready(function(){
  $("#button4").mouseenter(function(){
    $("#myForm4").animate({
      height: '12vw',
      width: '24vw',
      overflow: 'hidden',
      opacity: '1'
    }),$("#button1, #button2, #button3").animate({
      opacity:  '0',
    }),$("#button4").animate({
      opacity: '0.4'
    }), {
      duration: 2000,
      easing: "linear",
    };
  });
  $("#button4").mouseleave(function(){
    $("#myForm4").animate({
      height: '12vw',
      width: '24vw',
      overflow: 'hidden',
      opacity:  '0'
    }),$("#button1, #button2, #button3").animate({
      opacity:  '1',
    }),$("#button4").animate({
      opacity: '1'
    }), {
      duration: 500,
      easing: "linear",
    };
  });
;});
$(document).ready(function(){
  $("#banner1").mouseenter(function(){
    $("#card3").addClass("card3hover");
    $("#wbanner3").fadeTo("0.6s", 1);
    $("#wbanner4").fadeTo("0.6s", 1);
    $("#banner1").mouseleave(function(){
    $("#card3").removeClass("card3hover");
    $("#wbanner3").fadeTo("0.6s", 0);
    $("#wbanner4").fadeTo("0.6s", 0);
})})});
$(document).ready(function(){
  $("#banner2").mouseenter(function(){
    $("#card1").addClass("card1hover");
    $("#bannertext1").fadeTo("0.6s", 0);
    $("#bannertext2").fadeTo("0.6s", 0);
    $("#bannertext3").fadeTo("0.6s", 1);
    $("#bannertext4").fadeTo("0.6s", 1);
    $("#banner2").mouseleave(function(){
      $("#card1").removeClass("card1hover");
      $("#bannertext1").fadeTo("0.6s", 1);
      $("#bannertext2").fadeTo("0.6s", 1);
      $("#bannertext3").fadeTo("0.6s", 0);
      $("#bannertext4").fadeTo("0.6s", 0);
})})});
$(document).ready(function(){
  $("#bannerrust1").mouseenter(function(){
    $("#card2").addClass("card2hover");
    $("#bannerrusttext1").fadeTo("0.8s", 0);
    $("#bannerrust2").fadeTo("0.8s", 1);
    $("#bannerrust3").fadeTo("0.8s", 1);
    $("#bannerrust4").fadeTo("0.8s", 1);
    $(".bannerinfotextinner").fadeTo("0.8s", 1);
    $("#bannerrust1").mouseleave(function(){
      $("#card2").removeClass("card2hover");
      $("#bannerrusttext1").fadeTo("0.8s", 1);
      $("#bannerrust2").fadeTo("0.8s", 0);
      $("#bannerrust3").fadeTo("0.8s", 0);
      $("#bannerrust4").fadeTo("0.8s", 0);
      $(".bannerinfotextinner").fadeTo("0.8s", 0);
})})});



$(document).ready(function(){
  $("#banner4").mouseenter(function(){
    $("#card4").addClass("card4hover");
    $("#socialbannertext3").fadeTo("0.8s", 1);
    $("#socialbannertext4").fadeTo("0.8s", 1);
    $(".card").addClass("cardhover");
  $("#banner4").mouseleave(function() {
    $("#card4").removeClass("card4hover");
    $("#socialbannertext3").fadeTo("0.8s", 0);
    $("#socialbannertext4").fadeTo("0.8s", 0);
    $(".card").removeClass("cardhover");
  });
});
});
$(document).ready(function(){
  $("#contact").mouseenter(function(){
  $("#card5").addClass("card5hover");
  $("#cbannertext1").fadeTo("4.0s", 1); 
  $("#cbannertext2").delay(1000).fadeTo("4.0s", 1);
  $("#cbannertext3").delay(2000).fadeTo("4.0s", 1);
  $("#cbannertext4").delay(3000).fadeTo("4.0s", 1);
  $("#contact").mouseleave(function() {
  $("#card5").removeClass("card5hover");
  $("#cbannertext2").fadeTo("0.8s", 0);
  $("#cbannertext3").fadeTo("0.8s", 0);
  $("#cbannertext4").fadeTo("0.8s", 0);

  });;})});
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.left = "0px";
  document.getElementById("main").style.marginLeft = "0px";
};

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.left = "-250px";
  document.getElementById("main").style.marginLeft = "-250px";
};


//Right side Sever stats animation begins //
  $(document).ready(function(){
    $(".rightsidebutton").click(function(){
      $("#serverstats").animate({
        "margin-right": '0%',
      }), {
        duration: 1000,
        easing: "linear",
      };
    });
    $(".rightsidebutton").mouseleave(function(){
      $("#serverstats").animate({
        "margin-right": '-180%',

      }),{
        duration: 100,
        easing: "linear",
      };
    });
  ;});



  
  //Left side Sever stats animation begins //
    $(document).ready(function(){
      $(".leftsideservers").click(function(){
        $("#comingsoon").animate({
          "margin-left": '0%',
  
        }), {
          duration: 1000,
          easing: "linear",
        };
      });
      $(".leftsideservers").mouseleave(function(){
        $("#comingsoon").animate({
          "margin-left": '-180%',
  
        }),
        {
          duration: 1000,
          easing: "linear",
        };
      });
    ;});

    $(document).ready(function(){
      $("#Gaming").addClass("activebutton");
      $("#servers2").addClass("zindex");
      $("#Community").click(function(){
        $("#servers1").fadeTo("0.1s", 1);
        $("#servers1").addClass("zindex");
        $("#Community").addClass("activebutton");
        $("#Community").removeClass("sbutton");
        $("#servers2").fadeTo("0.1s", 0);
        $("#servers2").removeClass("zindex");  
        $("#Gaming").removeClass("activebutton");
        $("#Gaming").addClass("sbutton");
        $("#servers3").fadeTo("0.1s", 0);
        $("#servers3").removeClass("zindex");  
        $("#Servers").addClass("sbutton");
        $("#Servers").removeClass("activebutton");});
      $("#Gaming").click(function() {
        $("#servers1").fadeTo("0.1s", 0);
        $("#servers1").removeClass("zindex"); 
        $("#Community").removeClass("activebutton");
        $("#Community").addClass("sbutton");
        $("#servers2").fadeTo("0.1s", 1);
        $("#servers2").addClass("zindex");
        $("#Gaming").addClass("activebutton");
        $("#Gaming").removeClass("sbutton"); 
        $("#servers3").fadeTo("0.1s", 0);
        $("#servers3").removeClass("zindex"); 
        $("#Servers").removeClass("activebutton");
        $("#Servers").addClass("sbutton");});
      $("#Servers").click(function() {
        $("#servers1").fadeTo("0.1s", 0);
        $("#servers1").removeClass("zindex"); 
        $("#Community").removeClass("activebutton");
        $("#Community").addClass("sbutton");
        $("#servers2").fadeTo("0.1s", 0);
        $("#servers2").removeClass("zindex"); 
        $("#Gaming").removeClass("activebutton");
        $("#Gaming").addClass("sbutton");
        $("#servers3").fadeTo("0.1s", 1);
        $("#servers3").addClass("zindex");
        $("#Servers").addClass("activebutton");
        $("#Servers").removeClass("sbutton");});
      });

      