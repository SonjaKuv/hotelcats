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
    center: true,
    stagePadding: 100,
    loop:false,
    margin:10,
    nav:true,
    navText: [$('.reviews-next'),$('.reviews-prev')],
    items: 3,
    responsive:{
        0:{
            items:2.5
        },
        600:{
            items:2.5
        },
        1000:{
            items:2.5
        }
    }
})