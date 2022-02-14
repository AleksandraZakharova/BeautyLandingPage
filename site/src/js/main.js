import $ from 'jquery';
import {openDialogButton, validateConfig, phoneMask} from './constants'
import ApiService from './services/api-service';
import Utils from './utils';
import OrderForm from './forms/order-form';

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
    debugger;
    const masters = await ApiService.getMasters();

    const items = masters.map(element => {
        return {
            value : element.id,
            text : `${element.firstName} ${element.patronymic} ${element.surName}`
        }             
    });

    Utils.AddItemsToSelect('masterId', items);
}

async function initServices(){
    const services = await ApiService.getServices();

    const items = services.map(element => {
        return {
            value : element.id,
            text : `${element.name} (${element.description})`
        }             
    });

    Utils.AddItemsToSelect('serviceId', items);
}

function showFullOrderSuccessAlert(){
    $("#full-order-success").show();
}

function showShortOrderSuccessAlert(){
    $("#short-order-success").show();
}

function bindEvents(){
    document.getElementById('full-record-form').addEventListener('submit', e => { OrderForm.submitFormEvent(e, showFullOrderSuccessAlert)})
    document.getElementById('short-record-form').addEventListener('submit', e => {OrderForm.submitFormEvent(e, showShortOrderSuccessAlert)})

    $('.carousel__button').click(() => {
        $("#order-success").hide();
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


