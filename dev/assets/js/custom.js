
// // slider 

// $('.slider-template').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 1,
//         }
//       },
//       {
//         breakpoint: 575,
//         settings: {
//           slidesToShow: 1,
//           dots: true,
//           arrows: false,
//         }
//       },
//     ]
//   });


// mobileOnlySlider(".slider-template", false, false, 1200);

// function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
//   var slider = $($slidername);
//   var settings = {
//     mobileFirst: true,
//     dots: $dots,
//     arrows: $arrows,
//     responsive: [
//       {
//         breakpoint: $breakpoint,
//         settings: "unslick"
//       }
//     ]
//   };

//   slider.slick(settings);

//   $(window).on("resize", function () {
//     if ($(window).width() > $breakpoint) {
//       return;
//     }
//     if (!slider.hasClass("slick-initialized")) {
//       return slider.slick(settings);
//     }
//   });
// }

$('.slider-template').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        }
      },
    ]
  });