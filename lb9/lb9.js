document.addEventListener('DOMContentLoaded', () => {
    const dogListContainer = document.getElementById('dog-list');
    const dogModal = document.getElementById('dog-modal');
    const closeModalButton = document.querySelector('.close-button');
    const dogDetailsContainer = document.getElementById('dog-details');

    async function fetchDogs() {
        const response = await fetch('https://usersdogs.dmytrominochkin.cloud/dogs');
        const dogs = await response.json();
        return dogs;
    }

    function createDogItem(dog) {
        const dogItem = document.createElement('div');
        dogItem.classList.add('dog-item');

        const dogImage = document.createElement('img');
        dogImage.src = `https://usersdogs.dmytrominochkin.cloud${dog.dogImage}`;
        dogItem.appendChild(dogImage);

        const dogInfo = document.createElement('div');
        dogInfo.classList.add('dog-info');
        dogInfo.innerHTML = `<h4>${dog.title}</h4><p>Age: ${dog.age}</p><p>Sex: ${dog.sex}</p>`;
        dogItem.appendChild(dogInfo);

        dogItem.addEventListener('click', () => showDogDetails(dog));

        return dogItem;
    }

    function showDogDetails(dog) {
        dogDetailsContainer.innerHTML = `
            <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}">
            <h2>${dog.title}</h2>
            <p><strong>Age:</strong> ${dog.age}</p>
            <p><strong>Sex:</strong> ${dog.sex}</p>
            <p>${dog.description}</p>
            <button class="adopt-button">Adopt me</button>
        `;
        dogModal.style.display = 'block';
    }

    closeModalButton.addEventListener('click', () => {
        dogModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === dogModal) {
            dogModal.style.display = 'none';
        }
    });

    fetchDogs().then(dogs => {
        dogs.forEach(dog => {
            const dogItem = createDogItem(dog);
            dogListContainer.appendChild(dogItem);
        });
    });
});
