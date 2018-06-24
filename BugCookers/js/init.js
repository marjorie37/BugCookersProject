$(document).ready(function(){
  //CAROUSEL INIT
    $('.carousel').slick({
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:6000,
      arrows:false,
      cssEase: "ease",
      fade:true
    });
    $('.centerx').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay:true,
      autoplaySpeed:10000,
      prevArrow: $('#controlLeft'),
      nextArrow: $('#controlRight'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  //ANIMATE SCROLL INIT
    AOS.init({
      offset: 150,
    duration: 600,
    easing: 'ease-in-quad',
    delay: 50
    });
  //LIGHTGALLERY init
  $('#lightgallery').lightGallery();

  //INIT DATEPICKER
  $(function () {
      $('#datetimepicker4').datetimepicker({
          format: 'L',
          locale:'fr'
      });
  });
});
