function createMap(breweryLayer) {

    // Create the tile layer that will be the background of our map
    // Add Tile Layer
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: mapbox_api_key
    });
    // Only one base layer can be shown at a time
    var baseMaps = {
        "Street Map": streetmap
    };

    // Overlays that may be toggled on or off
    var overlayMaps = {
        "Breweries": breweryLayer
    };


    // Create the map object with options
    // Create a map object
    var myMap = L.map("map", {
        center: [44.9778, -93.2650],
        zoom: 12,
        layers: [streetmap, breweryLayer]
    });

    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
}



// Loop Through Breweries and Create Markers
var breweryMarkers = [];

for (var i = 0; i < brewData.length; i++) {
  brewData[i].location = [brewData[i].coordinates.latitude, brewData[i].coordinates.longitude]


  // loop through the cities array, create a new marker, push it to the cityMarkers array
  breweryMarkers.push(
    L.marker(brewData[i].location)
    .bindPopup("<h3>" + brewData[i].name + "</h3> <hr> <h5>Rating: " + brewData[i].rating + "</h5> <hr> <h5>No. of Reviews: " + brewData[i].review_count + "</h5> <hr> <h5> <a href= " + brewData[i].url + 'target="_blank">Yelp URL</a></h5>')
  );
}
createMap(L.layerGroup(breweryMarkers));
