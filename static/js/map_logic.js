
// Create a map object
var myMap = L.map("map", {
  center: [44.9778, -93.2650],
  zoom: 12,
});

// Loop Through Breweries and Create Markers
var breweryMarkers = [];

for (var i = 0; i < brewData.length; i++) {
  brewData[i].location = [brewData[i].coordinates.latitude, brewData[i].coordinates.longitude]

// Check Data
console.log(brewData);
console.log(brewData[i].location);

  // loop through the cities array, create a new marker, push it to the cityMarkers array
  breweryMarkers.push(
    L.marker(brewData[i].location)
    .bindPopup("<h1>" + brewData[i].name + "</h1> <hr> <h2>Rating: " + brewData[i].rating + "</h2> <hr> <h2>No. of Reviews: " + brewData[i].review_count + "</h2>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var breweryLayer = L.layerGroup(breweryMarkers);

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


myMap.addLayer(baseMaps);
myMap.addLayer(overlayMaps);

L.control.layers(baseMaps, overlayMaps).addTo(myMap);