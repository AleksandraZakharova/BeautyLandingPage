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