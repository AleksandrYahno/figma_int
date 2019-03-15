function initMap() {
    var map = new google.maps.Map(
        document.getElementById('map'), {
            mapTypeControl: false,
            zoom: 16,
            center: {lat: 50.402, lng: 30.63},
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#444444"}]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#262626"}]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"color": "#000000"}, {"saturation": -100}, {"lightness": 45}]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"color": "#444444"}, {"visibility": "simplified"}]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"color": "#444444"}, {"visibility": "on"}]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#000000"}, {"visibility": "on"}]
            },
            ]
        });
    var marker = new google.maps.Marker({
        position: {lat: 50.40341, lng: 30.6304689}, map: map,
        title: 'web-intellectus.com',
        icon: {
            url: "../img/map-logo.png",
            scaledSize: new google.maps.Size(160, 37)
        }
    });
}


jQuery(document).ready(function ($) {

    const minh = $(window).height() / 2;

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
        let geid = document.getElementById(y);
        if (geid !== null) {
            return geid;
        } else if (geid == null) {
            // return this;
        }
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
    getId("frontFooterRequest").onclick = function () {
        requestPopActive();
    };

    // scroll
    window.onscroll = function () {

        let y = document.getElementById('scrollRegion').getBoundingClientRect().top - 84;

        let f = document.getElementById("scrollRegionFooter").getBoundingClientRect().top - 84;

        let h = document.getElementsByTagName("header")[0];

        if (y < 0 && f > 0) {
            h.classList.add("header_white");
        } else if (f < 0) {
            h.classList.remove("header_white");
        } else {
            h.classList.remove("header_white");
        }
    };


};

console.log("check-in");
