document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById('newPostDialog');
  const postBtn = document.querySelector('.profileBtn');
  const form = document.getElementById('newPostForm');
  const cardContainer = document.querySelector('.gallery_grid');
  const divWrapper = document.querySelector('.wrapperrr');

  // Show Dialog when profile Btn is clicked
  postBtn.addEventListener('click', () => {
    dialog.showModal();
  });

  // Close Dialog with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      dialog.close();
    }
  });

  // Close Dialog when clicking outside of it
  dialog.addEventListener('click', (e) => {
    if (!divWrapper.contains(e.target)) {
      dialog.close();
    }
  });

  // Load saved cards on page load
  const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
  savedCards.forEach(cardData => createCard(cardData.imageUrl, cardData.text));

  // Form submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const text = form.text.value;
    const file = form.imageFile.files[0];
    const imageUrlInput = form.imageUrl.value.trim();

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageUrl = e.target.result;
        createCard(imageUrl, text);
        saveCardToStorage(imageUrl, text);
      };

      reader.readAsDataURL(file);
    } else if (imageUrlInput) {
      createCard(imageUrlInput, text);
      saveCardToStorage(imageUrlInput, text);
    } else {
      alert("Please provide either an image file or a URL.");
    }

    form.reset();
    dialog.close();
  });

  function createCard(imageUrl, text) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${imageUrl}" alt="Card Image" />
      <div class="content">
          <p id="text1">${text}</p>
          <i class="fa-regular fa-heart"></i>
      </div>
    `;

    cardContainer.appendChild(card);
  }

  function saveCardToStorage(imageUrl, text) {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    savedCards.push({ imageUrl, text });
    localStorage.setItem('cards', JSON.stringify(savedCards));
  }
});