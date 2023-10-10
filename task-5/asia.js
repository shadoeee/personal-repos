

// Fetch the data from the API

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function() {
    if (xhr.status === 200) {
        let countries = JSON.parse(xhr.responseText);

        // Problem 1: Get all the countries from Asia continent/region using Filter function
        const countriesInAsia = countries.filter(country => country.region === 'Asia');
        console.log('Countries in Asia:', countriesInAsia);

        // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
        const countriesWithLowPopulation = countries.filter(country => country.population < 200000);
        console.log('Countries with population less than 2 lakhs:', countriesWithLowPopulation);

        // Problem 3: Print the name, capital, and flag using forEach function
        countries.forEach(country => {
            console.log('Name:', country.name.common);
            console.log('Capital:', Array.isArray(country.capital) && country.capital.length > 0 ? country.capital[0] : 'N/A');
            console.log('Flag:', country.flags.svg);
            console.log('---------------------------------');
        });

        // Problem 4: Calculate the total population of countries using reduce function
        const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
        console.log('Total population of countries:', totalPopulation);

        // Problem 5: Print the country which uses US Dollars as currency
        const usDollarCountries = countries.filter(country => country.currencies && country.currencies.USD);
        console.log('Countries using US Dollars as currency:', usDollarCountries);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.send();
