// install the xhr2 library to the terminal
// npm install xhr2

// reqire the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    // console.log(xhr.responseText);

    for (let country of countries) {
        console.log(country["flag"]);
        console.log(country["name"]);
        console.log(country["region"]);
        console.log(country["subregion"]);
        console.log(country["population"]);
    }

};

xhr.send();