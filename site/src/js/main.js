import $ from 'jquery';
import {openDialogButton, validateConfig, phoneMask} from './constants'
import ApiService from './services/api-service';
import Utils from './utils';

$(document).ready(init());

async function init() {
    formValidationInit();
    initSlider();
    bindEvents();
    initMask();
    await initMasters();
    await initServices();
}

function formValidationInit(){
    $(".dialog__form").validate(validateConfig);
    $(".contacts-footer .record-form").validate(validateConfig);
}

function initSlider(){
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
}

function initMask(){
    const selector = document.getElementsByName("phone")
    const im = new Inputmask(phoneMask);
    im.mask(selector);
}

async function initMasters(){
    const masters = await ApiService.getMasters();

    const items = masters.map(element => {
        return {
            value : element.id,
            text : `${element.firstName} ${element.patronymic} ${element.surName}`
        }             
    });

    Utils.AddItemsToSelect('master', items);
}

async function initServices(){
    const services = await ApiService.getServices();

    const items = services.map(element => {
        return {
            value : element.id,
            text : `${element.name} (${element.description})`
        }             
    });

    Utils.AddItemsToSelect('service', items);
}

function bindEvents(){
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

    $('.hamburger').click(() => {
        document.getElementById("hamburger-nav").style.height = "100%";
    })

    $('#hamburger-nav a').click(() => {
        document.getElementById("hamburger-nav").style.height = "0%";
    })

    $('.cards button')
        .add('.card__img-wrap')
        .add('#record-online-btn')
        .on('click', () => {
        $(openDialogButton).click();
    });
}


