function initMap() {
    
    // pegar a lat e long puxadas do firebase guardadas no localStorage
    var myLatLng = {lat: -15.899639, lng: -47.771333};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
    });
}