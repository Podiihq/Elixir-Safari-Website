

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
