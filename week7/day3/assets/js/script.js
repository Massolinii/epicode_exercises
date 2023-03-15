async function fetchBooks() {
  let response = await fetch("https://striveschool-api.herokuapp.com/books");
  let books = await response.json();
  displayBooks(books);
}

function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "col-12 col-sm-6 col-md-4 mb-3";
  card.innerHTML = `
      <div class="card h-100">
        <img src="${book.img}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h6 class="card-title">${book.title}</h6>
          <p class="card-text">Prezzo: ${book.price}€</p>
          <div class="d-flex justify-content-between">
          <button class="btn btn-success discard-btn">Compra ora</ion-icon></button>
          <button class="btn btn-danger discard-btn"><ion-icon name="trash-bin-outline"></ion-icon></button>
          </div>
        </div>
      </div>
    `;
  card
    .querySelector(".discard-btn")
    .addEventListener("click", () => card.remove());
  return card;
}

function displayBooks(books) {
  const container = document.getElementById("books-container");
  books.forEach((book) => {
    container.appendChild(createBookCard(book));
  });
}

fetchBooks();
