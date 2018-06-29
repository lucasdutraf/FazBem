

let latitudes = localStorage.getItem('@institution-lat')
let longitudes = localStorage.getItem('@institution-lng')

tokensLat = latitudes.split(',')
tokensLng = longitudes.split(',')

let latInstitution = parseFloat(tokensLat[index])
let lngnstitution = parseFloat(tokensLng[index])


function initMap() {
    
    // pegar a lat e long puxadas do firebase guardadas no localStorage
    var myLatLng = {lat: latInstitution, lng: lngnstitution};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
    });
}