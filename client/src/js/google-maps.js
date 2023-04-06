"use strict";


function initMap() {

    var map = new google.maps.Map(document.getElementById('map-full'), {
        zoom: 16,
        center: {
            lat: 37.791350,
            lng: -122.435883
        }
    });

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            icon: 'img/marker.png'
        });
    });

    var infowindows = locations_content.map(function(location_content, i) {
        return new google.maps.InfoWindow({
            content: location_content.content
        });
    });

    var infowindows_events = locations_content.map(function(infowindow, i) {
        markers[i].addListener('click', function () {
            infowindows[i].open(map, markers[i]);
        });
    });


    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations_content = [
    {
        content:
        '<div class="prop-i">' +
        '<a href="property.html" class="prop-i-img"><img src="img/1/props/prop1.jpg" alt=""></a>' +
        '<div class="prop-i-top">' +
        '<p class="prop-i-loc"><a href="#">Brooklyn</a>, <a href="#">USA</a></p>' +
        '</div>' +
        '<h3 class="prop-i-ttl"><a href="property.html">Apartment 21 Sqrt</a></h3>' +
        '<ul class="prop-i-rating"><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li></ul>' +
        '<ul class="prop-i-infolist">' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo1.png" alt=""></span>2100</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo2.png" alt=""></span>3</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo3.png" alt=""></span>2</li>' +
        '</ul>' +
        '<div class="prop-i-bottom">' +
        '<p class="prop-i-price"><span class="prop-i-price-val">$160,300</span></p>' +
        '<p class="prop-i-type"><a href="#">For Sale</a></p>' +
        '</div>' +
        '</div>',
    },
    {
        content:
        '<div class="prop-i">' +
        '<a href="property.html" class="prop-i-img"><img src="img/1/props/prop2.jpg" alt=""></a>' +
        '<div class="prop-i-top">' +
        '<p class="prop-i-loc"><a href="#">Brooklyn</a>, <a href="#">USA</a></p>' +
        '</div>' +
        '<h3 class="prop-i-ttl"><a href="property.html">Family Home 14 Sqrt</a></h3>' +
        '<ul class="prop-i-rating"><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li></ul>' +
        '<ul class="prop-i-infolist">' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo1.png" alt=""></span>2100</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo2.png" alt=""></span>3</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo3.png" alt=""></span>2</li>' +
        '</ul>' +
        '<div class="prop-i-bottom">' +
        '<p class="prop-i-price"><span class="prop-i-price-val">$160,300</span></p>' +
        '<p class="prop-i-type"><a href="#">For Sale</a></p>' +
        '</div>' +
        '</div>',
    },
    {
        content:
        '<div class="prop-i">' +
        '<a href="property.html" class="prop-i-img"><img src="img/1/props/prop3.jpg" alt=""></a>' +
        '<div class="prop-i-top">' +
        '<p class="prop-i-loc"><a href="#">Brooklyn</a>, <a href="#">USA</a></p>' +
        '</div>' +
        '<h3 class="prop-i-ttl"><a href="property.html">Loft 13 Sqrt</a></h3>' +
        '<ul class="prop-i-rating"><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li></ul>' +
        '<ul class="prop-i-infolist">' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo1.png" alt=""></span>2100</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo2.png" alt=""></span>3</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo3.png" alt=""></span>2</li>' +
        '</ul>' +
        '<div class="prop-i-bottom">' +
        '<p class="prop-i-price"><span class="prop-i-price-val">$160,300</span></p>' +
        '<p class="prop-i-type"><a href="#">For Sale</a></p>' +
        '</div>' +
        '</div>',
    },
    {
        content:
        '<div class="prop-i">' +
        '<a href="property.html" class="prop-i-img"><img src="img/1/props/prop4.jpg" alt=""></a>' +
        '<div class="prop-i-top">' +
        '<p class="prop-i-loc"><a href="#">Brooklyn</a>, <a href="#">USA</a></p>' +
        '</div>' +
        '<h3 class="prop-i-ttl"><a href="property.html">Condo 21 Sqrt</a></h3>' +
        '<ul class="prop-i-rating"><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li></ul>' +
        '<ul class="prop-i-infolist">' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo1.png" alt=""></span>2100</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo2.png" alt=""></span>3</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo3.png" alt=""></span>2</li>' +
        '</ul>' +
        '<div class="prop-i-bottom">' +
        '<p class="prop-i-price"><span class="prop-i-price-val">$160,300</span></p>' +
        '<p class="prop-i-type"><a href="#">For Sale</a></p>' +
        '</div>' +
        '</div>',
    },
    {
        content:
        '<div class="prop-i">' +
        '<a href="property.html" class="prop-i-img"><img src="img/1/props/prop5.jpg" alt=""></a>' +
        '<div class="prop-i-top">' +
        '<p class="prop-i-loc"><a href="#">Brooklyn</a>, <a href="#">USA</a></p>' +
        '</div>' +
        '<h3 class="prop-i-ttl"><a href="property.html">Apartment 21 Sqrt</a></h3>' +
        '<ul class="prop-i-rating"><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li></ul>' +
        '<ul class="prop-i-infolist">' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo1.png" alt=""></span>2100</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo2.png" alt=""></span>3</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo3.png" alt=""></span>2</li>' +
        '</ul>' +
        '<div class="prop-i-bottom">' +
        '<p class="prop-i-price"><span class="prop-i-price-val">$160,300</span></p>' +
        '<p class="prop-i-type"><a href="#">For Sale</a></p>' +
        '</div>' +
        '</div>',
    },
    {
        content:
        '<div class="prop-i">' +
        '<a href="property.html" class="prop-i-img"><img src="img/1/props/prop6.jpg" alt=""></a>' +
        '<div class="prop-i-top">' +
        '<p class="prop-i-loc"><a href="#">Brooklyn</a>, <a href="#">USA</a></p>' +
        '</div>' +
        '<h3 class="prop-i-ttl"><a href="property.html">Heart of Lower East Side</a></h3>' +
        '<ul class="prop-i-rating"><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li></ul>' +
        '<ul class="prop-i-infolist">' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo1.png" alt=""></span>2100</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo2.png" alt=""></span>3</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo3.png" alt=""></span>2</li>' +
        '</ul>' +
        '<div class="prop-i-bottom">' +
        '<p class="prop-i-price"><span class="prop-i-price-val">$160,300</span></p>' +
        '<p class="prop-i-type"><a href="#">For Sale</a></p>' +
        '</div>' +
        '</div>',
    },
    {
        content:
        '<div class="prop-i">' +
        '<a href="property.html" class="prop-i-img"><img src="img/1/props/prop1.jpg" alt=""></a>' +
        '<div class="prop-i-top">' +
        '<p class="prop-i-loc"><a href="#">Brooklyn</a>, <a href="#">USA</a></p>' +
        '</div>' +
        '<h3 class="prop-i-ttl"><a href="property.html">Clean and Private Room</a></h3>' +
        '<ul class="prop-i-rating"><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li><li><i class="ion-android-star"></i></li></ul>' +
        '<ul class="prop-i-infolist">' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo1.png" alt=""></span>2100</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo2.png" alt=""></span>3</li>' +
        '<li><span class="prop-i-info-icon"><img src="img/propinfo3.png" alt=""></span>2</li>' +
        '</ul>' +
        '<div class="prop-i-bottom">' +
        '<p class="prop-i-price"><span class="prop-i-price-val">$160,300</span></p>' +
        '<p class="prop-i-type"><a href="#">For Sale</a></p>' +
        '</div>' +
        '</div>',
    },
];

var locations = [
    {lat: 37.791350, lng: -122.435883},
    {lat: 37.794350, lng: -122.446883},
    {lat: 37.793350, lng: -122.446083},
    {lat: 37.790050, lng: -122.425883},
    {lat: 37.794750, lng: -122.420883},
    {lat: 37.795750, lng: -122.431883},
    {lat: 37.796750, lng: -122.431883},
];


(function (window, google) {
    $(document).ready(function () {
        if ($('#map-full').length) {

            initMap();

        }

        if ($('#prop-map').length) {
            var map_options = {
                    center: {
                        lat: 37.791350,
                        lng: -122.435883
                    },
                    zoom: 17,
                    scrollwheel: false
                },
                map_element = $('#prop-map')[0];
            var contentString = '<div class="prop-map-marker-cont">'+
                '<p>' +
                '<b>Comfortable Apartments 15 Sqrt</b><br>' +
                'Spain, Madrid, 774 NE 84th' +
                '</p>' +
                '</div>';

            // Map Init
            var map = new google.maps.Map(map_element, map_options);

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: 37.791350,
                    lng: -122.435883
                },
                map: map,
                icon: 'img/marker.png'
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        }
    });
}(window, google));