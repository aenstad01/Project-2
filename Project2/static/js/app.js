// Populate BeerDb
const beerDbUrl = "/api/beersBrewJoin"

// Create a variable for the table body
var tbody = d3.select("tbody");

// Function to fix typos (need to add to loop)
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// function that populate data object into a html table body
function populateTable(data,datasetBody){
    data.forEach((rowData) => {
        var row = datasetBody.append("tr");
        Object.entries(rowData).forEach(([key, value]) => {
            // round abv to 4 decimal places
            if (key === 'abv' && value !== null ){
                value = value.toFixed(4);
            }
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// function initialize slider values
function initializeSliderInput(inputId,outputId) {
    var slider = document.getElementById(inputId);
    var output = document.getElementById(outputId);
    output.innerHTML = slider.value;
  };

// function update slider value
function updateSliderInput(outputId, value) {
    var output = document.getElementById(outputId);
    output.innerHTML = value;
  };
  
// load beer Db into the table
d3.json(beerDbUrl).then((beerData) => {
        populateTable(beerData,tbody)
    });

//  initialize
initializeSliderInput("ibuRange","selected-bitterness")
initializeSliderInput("abvRange", "selected-alcohol")

// select filter button
var button = d3.selectAll(".filter");

// initialize filters object
var filters = {}

function runEnter() {

    // clear existing table
    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // select only the element that was changed
    var inputSelection = d3.select(this).select("input");

    var inputId = inputSelection.attr("id");
    
    var inputValue = inputSelection.property("value");
    
    // populate filters object
    filters[inputId] = inputValue

    console.log(filters)

    d3.json(beerDbUrl).then((beerData) => {

        // initialize filteredData
        var filteredData = beerData;
        Object.entries(filters).forEach(function([key, value]) {

            if (key === "ibuRange"){
                updateSliderInput("selected-bitterness",value);
                filteredData = filteredData.filter(x => x[key] !== null && x["ibu"] <= parseFloat(value));
            }
            else if  (key === "abvRange") {
                updateSliderInput("selected-alcohol",value); 
                filteredData = filteredData.filter(x => x[key] !== null && x["abv"] <= parseFloat(value));
            }
            else {
                // Filter by substring
                filteredData = filteredData.filter(x => x[key] !== null && x[key].includes(value));
            }; 

            // clear the table
            tbody.html("");

            // populate the table
            populateTable(filteredData,tbody)

      });

    });

};

button.on("change", runEnter);