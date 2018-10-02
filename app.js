// from data.js;
// var tableData = data;


var sightings = data;

var submit = d3.select('#filter-btn');

submit.on('click', function(){
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime');

    var inputValue =inputElement.property('value');

    console.log(inputValue);
    console.log(sightings);


    var filteredData = sightings.filter(sighting => sighting.datetime == inputValue);
    console.log(filteredData);

    var tbody = d3.select('tbody');
    tbody.html('');

    filteredData.forEach(function(sighting){
        console.log(sighting);
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append('td');
            cell.text(value);
        });
    });

    // data.forEach((filteredData => {
    //     var row = tbody.append('tr');
    //     Object.entries(filteredData).forEach(([key, value]) => {
    //         var cell = tbody.append('td');
    //         cell.text(value);
    //     });      
    // }));
});
