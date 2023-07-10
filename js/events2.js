$('#myCarousel').carousel({
    interval: 3000,
  })
  $(window).scroll(function () {
      var sc = $(window).scrollTop()
      if (sc > 150) {
          $("#main-navbar").addClass("navbar-scroll")
      } 
      else {
          $("#main-navbar").removeClass("navbar-scroll")
      }
  });
  
  
  
  
  