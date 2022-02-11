jQuery(function(){
    $('#hamburger-nav a').on('click', function(){
        closeNav();
    })
})

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
    const recordForm = document.querySelector('.record-form');
    recordForm.addEventListener('submit', event => {
        event.preventDefault();
        const {phone} = recordForm.elements;
        const {name} = recordForm.elements;
        console.log('phone: ', phone.value);
        console.log('name: ', name.value);
    })
}

document.addEventListener('DOMContentLoaded', init)