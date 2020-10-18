// Test
var data = [{
    abv: "1/1/2010",
    ibu: "benton",
    id: "ar",
    name: "us",
    style: "circle",
    brewery_id: "5 mins.",
    ounces: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  }];


// From data.js
var tableData = data;

// Create a variable for the table body
var tbody = d3.select("tbody");

// Function to fix typos (need to add to loop)
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// Use forEach to loop through all tableData and insert the data into the table
tableData.forEach(function(sighting) {
    // Create a new table row for each UFO sighting
    var row = tbody.append("tr");

    // Update that row with the data for that UFO sighting
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);

    });
});

var button = d3.selectAll(".filter");

var filters = {}

function runEnter() {

    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // select only the element that was changed
    var inputSelection = d3.select(this).select("input");

    var inputId = inputSelection.attr("id");
    
    var inputValue = inputSelection.property("value");

    filters[inputId] = inputValue;

    var newData = tableData;

    // filter by filters object
    Object.entries(filters).forEach(function([key, value]) {

        newData = newData.filter(x => x[key] === value);
        console.log(newData);
    });        

    newData.forEach(function(sighting) {
            var row = tbody.append("tr");

            // Update the row with the data for that UFO sighting
            Object.entries(sighting).forEach(function([key, value]) {
                    var cell = row.append("td");
                    cell.text(value);

        });
    });
};

button.on("change", runEnter);