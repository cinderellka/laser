$(function(){
  $('.advertising__inner').slick({
      dots: false,
      slidesToShow: 1,
      prevArrow: '<button type="button" class="prev"><img src="img/prev__arrow.svg" alt="1"  class="prev-icon"></button>',
      nextArrow: '<button type="button" class="next"><img src="img/next__arrow.svg" alt="2"  class="next-icon"></button>',
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
      prevArrow: '<button type="button" class="prev__cities"><img src="img/prev__arrow.svg" alt="1"  class="prev-icon"></button>',
      nextArrow: '<button type="button" class="next__cities"><img src="img/next__arrow.svg" alt="2"  class="next-icon"></button>',
      responsive: [
        {
            breakpoint: 1140,
            settings:{
                slidesToShow:4
            }
        },
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
      prevArrow: '<button type="button" class="prev__cities"><img src="img/prev__arrow.svg" alt="1"  class="prev-icon"></button>',
      nextArrow: '<button type="button" class="next__cities"><img src="img/next__arrow.svg" alt="2"  class="next-icon"></button>',
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
        prevArrow: '<button type="button" class="prev__cities"><img src="img/prev__arrow.svg" alt="1"  class="prev-icon"></button>',
      nextArrow: '<button type="button" class="next__cities"><img src="img/next__arrow.svg" alt="2"  class="next-icon"></button>',
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