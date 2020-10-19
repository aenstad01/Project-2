// Populate BeerDb
const beerDbUrl = "../Resources/Data/beerDbJson.json"

// Create a variable for the table body
var tbody = d3.select("tbody");

// Function to fix typos (need to add to loop)
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// function that populate table into a table body
function populateTable(data,datasetBody){
    data.forEach((rowData) => {
        var row = datasetBody.append("tr");
        Object.entries(rowData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// load beer Db into the table
d3.json(beerDbUrl).then((beerData) => {
        populateTable(beerData,tbody)
    });


var button = d3.selectAll(".filter");


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


    filters[inputId] = inputValue

    d3.json(beerDbUrl).then((beerData) => {

        Object.entries(filters).forEach(function([key, value]) {

                // Filter by substring
                var filteredData = beerData.filter(x => x[key].includes(value));
                populateTable(filteredData,tbody)
            });  

    });

};

button.on("change", runEnter);