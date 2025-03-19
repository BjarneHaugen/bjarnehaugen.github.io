const apiKey = 'DEMO_KEY';

async function fetchPhoto(date) {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayPhoto(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayPhoto(data) {
    const dateElement = document.createElement('h3');
    dateElement.textContent = `Date: ${data.date}`;

    const titleElement = document.createElement('h2');
    titleElement.textContent = data.title;

    const imgElement = document.createElement('img');
    imgElement.src = data.url;
    imgElement.alt = data.title;
    imgElement.style.maxWidth = '100%';

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = data.explanation;

    document.body.appendChild(dateElement);
    document.body.appendChild(titleElement);
    document.body.appendChild(imgElement);
    document.body.appendChild(descriptionElement);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get('date') || new Date().toISOString().split('T')[0];
    fetchPhoto(date);
});