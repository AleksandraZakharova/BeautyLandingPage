$(document).ready(function(){

    $('#hamburger-nav a').on('click', function(){
        closeNav();
    })

    $('.slider').slick();
    
    /* Open */
    function openNav() {
        document.getElementById("hamburger-nav").style.height = "100%";
    }

    /* Close*/
    function closeNav() {
        document.getElementById("hamburger-nav").style.height = "0%";
    }

    function submitForm() {
        
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
