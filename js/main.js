//get the current year of the copyright
$('#year').text(new Date().getFullYear());


//SERVICES COLOUR SWITCH
const services = document.querySelectorAll('.service');
const service = document.querySelector('.service');

console.log(services);
services.forEach((service) => {
    service.addEventListener('mouseover', () => {
        const activeServ = document.querySelector('.activeServ')

        if (service.classList.contains('activeServ')) {
            return;
        } else {
            activeServ.classList.remove('activeServ');
            service.classList.add('activeServ');
        }
    })
})

//slick carousel
$('.testimonials').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // prevArrow: "<i class='fas fa-angle-left fa-3x' style='position: absolute; top: 50%; left: -40px; transform: translateY(-50%); cursor: pointer;'></i>",
    // nextArrow: "<i class='fas fa-angle-right fa-3x' style='position: absolute; top: 50%; right: -40px; transform: translateY(-50%); cursor: pointer;'></i>",
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//init scrollspy
$('body').scrollspy({ target: '#mainNav' });

//smoothscroll
$('#mainNav a').on('click', function (e) {
    if (this.hash !== "") {
        //  e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});