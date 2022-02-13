import $ from 'jquery';
import 'slick-carousel';
import { Fancybox } from "@fancyapps/ui";
import Inputmask from 'inputmask';

const $openDialogButton = $('#open-dialog-btn');

$(document).ready(function(){
    var selector = document.getElementsByName("phone")
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    $('.hamburger').click(() => {
        document.getElementById("hamburger-nav").style.height = "100%";
    })

    $('#hamburger-nav a').click(() => {
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

    $('.cards button')
        .add('.card__img-wrap')
        .add('#record-online-btn')
        .on('click', () => {
        $openDialogButton.click();
    });

    init();
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
