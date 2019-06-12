// from data.js
var tableData = data;

// Select the filter button
const filter_ = d3.select("#filter-btn");

filter_.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    const inputElement = d3.select("#datetime");

    // Get the value property of the input element
    const inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Grab relevant data
    const filteredData = tableData.filter(event => event.datetime === inputValue);

    console.log(filteredData);

    // Place data into table
    const tbody = d3.select("tbody");

    filteredData.forEach((ufoReport) => {
        const row = tbody.append("tr");
        for (key in ufoReport){
            const cell = tbody.append("td");
            cell.text(ufoReport[key]);
        }
    });
});