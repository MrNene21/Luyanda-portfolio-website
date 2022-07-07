$(document).ready(function(){
    //toggle navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    window.onload = function(){
        //This setTimeout function is meant to emulate page loading.
          setTimeout(function(){
            var el = document.getElementById('cont');
            el.classList.add('loaded');
          }, 5000)
        }
});
