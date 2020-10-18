// Test
var example_data = [{
    abv: 0.6,
    ibu: 6,
    id: 12345,
    name: "Raspberry Sour",
    style: "Sour",
    brewery_id: 77777,
    ounces: 8,
    ibuRange: "med"
  },
  {
    abv: 0.9,
    ibu: 6,
    id: 23456,
    name: "Peanut Butter Porter",
    style: "Porter",
    brewery_id: 88888,
    ounces: 8,
    ibuRange: "med"
  },
  {
    abv: 0.6,
    ibu: 2,
    id: 34567,
    name: "Raspberry Sour",
    style: "Sour",
    brewery_id: 99999,
    ounces: 6,
    ibuRange: "Not very bitter"
  },

];





// From data.js
var tableData = example_data;

// Create a variable for the table body
var tbody = d3.select("tbody");

// Function to fix typos (need to add to loop)
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// Use forEach to loop through all tableData and insert the data into the table
tableData.forEach(function(beer) {
    // Create a new table row for each UFO sighting
    var row = tbody.append("tr");

    // Update that row with the data for that UFO sighting
    Object.entries(beer).forEach(function([key, value]) {
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


    filters[inputId] = inputValue

    var newData = tableData;

    // filter by filters object
    Object.entries(filters).forEach(function([key, value]) {

        // Filter by substring
        newData = newData.filter(x => x[key].includes(value));
        console.log(newData);
    });  
    


    newData.forEach(function(beer) {
            var row = tbody.append("tr");

            // Update the row with the data for that UFO sighting
            Object.entries(beer).forEach(function([key, value]) {
                    var cell = row.append("td");
                    cell.text(value);

        });
    });
};

button.on("change", runEnter);