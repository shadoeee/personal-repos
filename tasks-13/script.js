document.addEventListener('DOMContentLoaded', () => {
    const getFactButton = document.getElementById('getFactButton');
    const numberInput = document.getElementById('number');
    const typeSelect = document.getElementById('type');
    const factResult = document.getElementById('factResult');

    getFactButton.addEventListener('click', () => {
        const number = numberInput.value;
        const type = typeSelect.value;

        if (!number) {
            factResult.textContent = 'Please enter a number.';
            return;
        }

        const apiUrl = `http://numbersapi.com/${number}/${type}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.text();
            })
            .then(data => {
                factResult.textContent = data;
            })
            .catch(error => {
                console.error('Error:', error);
                factResult.textContent = 'Error fetching fact.';
            });
    });
});