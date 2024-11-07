document.getElementById('fetch-fact').addEventListener('click', fetchFact);

function fetchFact() {
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('fact').textContent = data.text;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('fact').textContent = 'Failed to fetch a fact. Please try again.';
        });
}