// Update the URL to fetch country data from Rest Countries API
async function fetchCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();

        // Loop through the countries and create Bootstrap cards
        const countryCards = document.getElementById('countryCards');
        countries.forEach(country => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            card.innerHTML = `
                <div class="card">
                    <img src="https://flagcdn.com/w80/${country.cca2.toLowerCase()}.png" class="card-img-top" alt="Flag">
                    <div class="card-body">
                        <h5 class="card-title">${country.capital}</h5>
                        <p class="card-text">Latlng: ${country.latlng.join(', ')}</p>
                        <p class="card-text">Region: ${country.region}</p>
                        <p class="card-text">Country codes: ${Object.values(country.cca2).join(', ')}</p>
                        <button class="btn btn-primary" onclick="fetchWeather('${country.capital}')">Get Weather</button>
                    </div>
                </div>
            `;
            countryCards.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

// Call the function to fetch country data
fetchCountryData();

