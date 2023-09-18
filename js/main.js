$(function(){
  $('.advertising__inner').slick({
      dots: false,
      slidesToShow: 1,
      prevArrow: "<img src='img/left_arrow.svg' class='prev' alt='1'>",
      nextArrow: "<img src='img/right_arrow.svg' class='next' alt='2'>",
      responsive: [
        {
            breakpoint: 767,
            settings: "unslick"
        },
    
    ] 
  });


});


$(function(){
  $('.cities__inner').slick({
      dots: false,
      slidesToShow: 5,
      prevArrow: "<img src='img/left_arrow.svg' class='prev__cities' alt='1'>",
      nextArrow: "<img src='img/right_arrow.svg' class='next__cities' alt='2'>",
      responsive: [
      {
          breakpoint: 1040,
          settings:{
              slidesToShow:3
          }
      },
      {
        breakpoint: 840,
        settings:{
            slidesToShow: 2
        }
    },
      {
          breakpoint: 601,
          settings:{
              slidesToShow: 1
          }
      },
  ] 
  });


});

$(function(){
  $('.testimonials__inner').slick({
      dots: false,
      slidesToShow: 4,
      prevArrow: "<img src='img/left_arrow.svg' class='prev__cities' alt='1'>",
      nextArrow: "<img src='img/right_arrow.svg' class='next__cities' alt='2'>",
      responsive: [
      {
          breakpoint: 1040,
          settings:{
              slidesToShow:3
          }
      },
      {
        breakpoint: 840,
        settings:{
            slidesToShow: 2
        }
    },
      {
          breakpoint: 601,
          settings:{
              slidesToShow: 1
          }
      },
  ] 
  });


});









$(function(){
    $('.carousel__inner').slick({
        dots: false,
        slidesToShow: 5,
        prevArrow: "<img src='img/left_arrow.svg' class='prev__cities' alt='1'>",
        nextArrow: "<img src='img/right_arrow.svg' class='next__cities' alt='2'>",
        responsive: [
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 4
            }
        },
        {
            breakpoint: 841,
            settings:{
                slidesToShow: 3
            }
        },
        {
            breakpoint: 650,
            settings:{
                slidesToShow: 2
            }
        },
        {
            breakpoint: 580,
            settings:{
                slidesToShow: 1
            }
        },
    ] 
    });
  
  
  });



  $(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        
    });

    $('ul li a').click(function() {
        if ( $('.header__burger,.header__menu').hasClass('active')) {
         $('.header__burger,.header__menu').removeClass('active');
        }
     }) 


});