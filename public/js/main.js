
$(document).ready(function() {
  var scrollbarPosition = $("#navbar").position().top;

  $(document).on("scroll", function() {

    var windowPosition = $(document).scrollTop();
        
    if (windowPosition >= scrollbarPosition) {
      $("#navbar").addClass("sticky");
    }
    else{
      $("#navbar").removeClass("sticky");
    }

  });

  $('.hcaption').hcaptions({
    effect:"fade"
  });



  var profile_divs=new Array("#emma-profile","#cori-profile","#abby-profile", "#amal-profile","#chris-profile","#ryan-profile","#rahul-profile","#dan-profile","#matt-profile","#ben-profile","#blake-profile","#bryce-profile","#bobby-profile","#mike-profile");


  function close_all_but(div_id) {
    _.each(profile_divs, function(element){
      if (div_id != element) {
        $(element).slideUp("slow");
      } else {
        $(element).slideDown("slow");
      }
    });
  }

  function close(div_id) {
    $(div_id).slideUp("slow");
  }


  $('#cori-portrait').mouseenter(function() {
    close_all_but('#cori-profile');
  });
  // $('#cori-profile').mouseleave(function() {
  //   close('#cori-profile');
  // });

  $('#emma-portrait').mouseenter(function() {
    close_all_but('#emma-profile');
  });
  // $('#emma-profile').mouseleave(function() {
  //   close('#emma-profile');
  // });

  $('#abby-portrait').mouseenter(function() {
    close_all_but('#abby-profile');
  });
  // $('#abby-profile').mouseleave(function() {
  //   close('#abby-profile');
  // });

  $('#amal-portrait').mouseenter(function() {
    close_all_but('#amal-profile');
  });
  // $('#amal-profile').mouseleave(function() {
  //   close('#amal-profile');
  // });

  $('#chris-portrait').mouseenter(function() {
    close_all_but('#chris-profile');
  });
  // $('#chris-profile').mouseleave(function() {
  //   close('#chris-profile');
  // });

  $('#ryan-portrait').mouseenter(function() {
    close_all_but('#ryan-profile');
  });
  // $('#ryan-profile').mouseleave(function() {
  //   close('#ryan-profile');
  // });

  $('#rahul-portrait').mouseenter(function() {
    close_all_but('#rahul-profile');
  });
  // $('#rahul-profile').mouseleave(function() {
  //   close('#rahul-profile');
  // });

  $('#dan-portrait').mouseenter(function() {
    close_all_but('#dan-profile');
  });
  // $('#dan-profile').mouseleave(function() {
  //   close('#dan-profile');
  // });

  $('#matt-portrait').mouseenter(function() {
    close_all_but('#matt-profile');
  });
  // $('#matt-profile').mouseleave(function() {
  //   close('#matt-profile');
  // });

  $('#ben-portrait').mouseenter(function() {
    close_all_but('#ben-profile');
  });
  // $('#ben-profile').mouseleave(function() {
  //   close('#ben-profile');
  // });

  $('#blake-portrait').mouseenter(function() {
    close_all_but('#blake-profile');
  });
  // $('#blake-profile').mouseleave(function() {
  //   close('#blake-profile');
  // });

  $('#bryce-portrait').mouseenter(function() {
    close_all_but('#bryce-profile');
  });
  // $('#bryce-profile').mouseleave(function() {
  //   close('#bryce-profile');
  // });

  $('#bobby-portrait').mouseenter(function() {
    close_all_but('#bobby-profile');
  });
  // $('#bobby-profile').mouseleave(function() {
  //   close('#bobby-profile');
  // });

  $('#mike-portrait').mouseenter(function() {
    close_all_but('#mike-profile');
  });
  // $('#mike-profile').mouseleave(function() {
  //   close('#mike-profile');
  // });


});
