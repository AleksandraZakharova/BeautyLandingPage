$(document).ready(function(){

    $('#hamburger-nav a').on('click', function(){
        closeNav();
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
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    
    /* Open */
    function openNav() {
        document.getElementById("hamburger-nav").style.height = "100%";
    }

    /* Close*/
    function closeNav() {
        document.getElementById("hamburger-nav").style.height = "0%";
    }

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
