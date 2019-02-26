var clMap=new function() {
    var map = "";
    var lat = "";
    var log = "";
    /*var address="";*/
    this.onclkMaps = function () {
        var myLatlng = new google.maps.LatLng(17.3850, 78.4867)
        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatlng,
            zoom: 13
        });


        var marker = new google.maps.Marker({
            position: myLatlng,
            animation: google.maps.Animation.BOUNCE
        });

        marker.setMap(map);
        /* google.maps.event.addListener(map, 'click', function(event) {alert(event.latLng);});*/

        var searchInp = document.getElementById("searchInput");
        var autocomplete = new google.maps.places.Autocomplete(searchInp);
        autocomplete.bindTo('bounds', map);
        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            map: map
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        autocomplete.addListener('place_changed', function () {
            infowindow.close();
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }

            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            marker.setPlace({
                placeId: place.place_id,
                location: place.geometry.location
            });
            marker.setVisible(true);

            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-id'].textContent = place.place_id;
            infowindowContent.children['place-address'].textContent =
                place.formatted_address;
            infowindow.open(map, marker);
        });

    }

    this.getAddressDetails = function () {

        var input = document.getElementById('input-address');
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
            placeId: placeIdVal
        }, function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                setAddressDetails(place.name, place.formatted_address);
            }
        });

    };
    this.setAddressDetails=function(place, address)
    {
        document.getElementById("pininfo").innerHTML=name;
        document.getElementById("state").innerHTML=address;

    }




   /* google.maps.event.addListener(map, 'click', function(event){
        placeMarker(map,event.latLng)
    })
    this.placeMarker=function(map,curloc)
    {
        var marker=new google.maps.Marker({
            position:curloc,
            map:map
        });


    */





};