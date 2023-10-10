const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=20';


const catImagesDiv = document.getElementById('catImages');

fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code: ' + response.status);
    }
  })
  .then(data => {
    // Process the response data and display cat images
    data.forEach(cat => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('cat-card');

      const imageElement = document.createElement('img');
      imageElement.src = cat.url;
      imageElement.alt = 'Cat Image';

      cardDiv.appendChild(imageElement);
      catImagesDiv.appendChild(cardDiv);
    });
  })
  .catch(error => {
    console.error('An error occurred:', error.message);
  });
