document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('results');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        searchDictionary(searchTerm);
    });

    function searchDictionary(term) {
        // Clear previous search results
        resultsContainer.innerHTML = '';

        // Make a request to the DictionaryAPI
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(term)}`)
            .then(response => response.json())
            .then(data => {
                const wordData = data[0];

                if (wordData) {
                    // Display word definition
                    const definition = wordData.meanings[0].definitions[0].definition;
                    const example = wordData.meanings[0].definitions[0].example;

                    const resultItem = document.createElement('div');
                    resultItem.classList.add('result-item');
                    resultItem.innerHTML = `
                        <h2>${term}</h2>
                        <p><strong>Definition:</strong> ${definition}</p>
                        <p><strong>Example:</strong> ${example}</p>
                    `;

                    resultsContainer.appendChild(resultItem);
                } else {
                    // Display error message if word not found
                    const errorItem = document.createElement('div');
                    errorItem.classList.add('result-item', 'error');
                    errorItem.textContent = `Word not found in the dictionary`;

                    resultsContainer.appendChild(errorItem);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});