var clMap=new function()
{
    var  map="";
    var lat="";
    var log="";
    /*var address="";*/
    this.onclkMaps=function ()
    {
        var myLatlng = new google.maps.LatLng(17.3850, 78.4867)
        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatlng,
            zoom: 13
        });


        var marker = new google.maps.Marker({
            position:myLatlng,
            animation:google.maps.Animation.BOUNCE
        });

        marker.setMap(map);
        google.maps.event.addListener(map, 'click', function(event) {alert(event.latLng);});

    };

   /* google.maps.event.addListener(map, 'click', function(event){
        placeMarker(map,event.latLng)
    })
    this.placeMarker=function(map,curloc)
    {
        var marker=new google.maps.Marker({
            position:curloc,
            map:map
        });


    }*/




};