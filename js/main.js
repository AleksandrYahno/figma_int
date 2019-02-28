'use strict';

$(document).ready(function ($) {

    var minh = $(window).height()/2;

    $('.description_text').readmore({
        speed: 1000,
        collapsedHeight: minh,
        moreLink: '<a href="#" class="row_text"></a>',
        lessLink: '<a href="#" class="row_text row_up"></a>'
    });

});

window.onload = function () {

    // btn group
    function menuPopActive() {
        document.getElementsByClassName("menu_pop")[0].classList.add("menu_pop_active");
        document.getElementById("main").classList.add("main-hide");
    }

    function menuPopHide() {
        document.getElementsByClassName("menu_pop")[0].classList.remove("menu_pop_active");
        document.getElementById("main").classList.remove("main-hide");
        document.getElementsByTagName("header")[0].classList.remove("header_white");
    }

    function menuPopActive2() {
        document.getElementsByClassName("menu_pop")[0].classList.add("menu_pop_active");
        document.getElementById("main").classList.add("main-hide");
        document.getElementsByClassName("request_pop")[0].classList.remove("request_pop_active");
    }

    function requestPopActive() {
        document.getElementsByClassName("request_pop")[0].classList.add("request_pop_active");
        document.getElementById("main").classList.add("main-hide");
    }


    function getId(y) {
        return document.getElementById(y);
    }

    getId("btn").onclick = function () {
        menuPopActive();
    };
    getId("btn2").onclick = function () {
        menuPopActive2();
    };
    getId("btnHide").onclick = function () {
        menuPopHide();
    };
    getId("request").onclick = function () {
        requestPopActive();
    };
    getId("request2").onclick = function () {
        requestPopActive();
    };

    // scroll
    window.onscroll = function () {

        var y = document.getElementById('scrollRegion').getBoundingClientRect().top - 84;

        var f = document.getElementById("scrollRegionFooter").getBoundingClientRect().top - 84;

        var h = document.getElementsByTagName("header")[0];
        if (y < 0 && f > 0 ) {
            h.classList.add("header_white");
        } else if (f < 0) {
            h.classList.remove("header_white");
        } else {
            h.classList.remove("header_white");
        }
    };


};

