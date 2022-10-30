$('.owl-carousel-rooms').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [$('.rooms-next'),$('.rooms-prev')],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-carousel-reviews').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [$('.reviews-next'),$('.reviews-prev')],
    responsive:{
        0:{
            items:2.2
        },
        600:{
            items:2.2
        },
        1000:{
            items:2.2
        }
    }
})