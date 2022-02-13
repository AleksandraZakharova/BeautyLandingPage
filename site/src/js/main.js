import $ from 'jquery';
import {openDialogButton, validateConfig, phoneMask} from './constants'
import ApiService from './services/api-service';

$(document).ready(init());

function initMask(){
    const selector = document.getElementsByName("phone")
    const im = new Inputmask(phoneMask);
    im.mask(selector);
}

async function initMasters(){
    const masters = await ApiService.getMasters();
    console.log(masters);
}

async function initServices(){
}

async function init() {
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

    $(".dialog__form").validate(validateConfig);
    $(".contacts-footer .record-form").validate(validateConfig);

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
        $(openDialogButton).click();
    });

    initMask();

    await initMasters();
}
