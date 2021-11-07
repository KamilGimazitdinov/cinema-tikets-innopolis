$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        center:true,
        responsive:{
            0:{
                items:1
            },
            1024: {
                items:3
            }
        }
    })
  }); 