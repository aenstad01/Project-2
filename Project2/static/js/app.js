// Populate BeerDb
const beerDbUrl = "../Resources/Data/beerDbJson.json"

var tableData = data;
console.log(tableData)


// Create a variable for the table body
var tbody = d3.select("tbody");

// Function to fix typos (need to add to loop)
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// function that loads json Url into a table body
function loadTableData(dataUrl,datasetBody){
    d3.json(dataUrl).then((beerData) => {
        beerData.forEach((rowData) => {
            var row = datasetBody.append("tr");
            Object.entries(rowData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
        });
    });
};

// load the full BeerDb
loadTableData(beerDbUrl,tbody);


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
    
    // example filters : {beer_name: "Ale"}
    // console.log(filters)

    d3.json(beerDbUrl).then((beerData) => {

        Object.entries(filters).forEach(function([key, value]) {

                // Filter by substring
                var filteredData = beerData.filter(x => x[key].includes(value));
                filteredData.forEach(function(beer) {
                    var row = tbody.append("tr");
                    // Update the row with the data matches the filter
                    Object.entries(beer).forEach(function([key, value]) {
                            var cell = row.append("td");
                            cell.text(value);
        
                    });
                });
                
            });  

    });

};

button.on("change", runEnter);