$(document).ready(function(){

    $('.hamburger').click(() => {
        document.getElementById("hamburger-nav").style.height = "100%";
    })

    $('#hamburger-nav a').on('click', function(){
        document.getElementById("hamburger-nav").style.height = "0%";
    })

    $('.slider').slick({
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        slidesToShow: 4,
        infinite: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    function init() {
        document
            .querySelector('.record-form')
            .addEventListener('submit', event => {
                event.preventDefault();

                var formData = Array
                    .from(event.target.elements)
                    .filter(element => element.name)
                    .forEach(element => {
                        const {value, name, type } = element;

                        console.log(name, value);
                });         
        })
    }

    document.addEventListener('DOMContentLoaded', init)
});
