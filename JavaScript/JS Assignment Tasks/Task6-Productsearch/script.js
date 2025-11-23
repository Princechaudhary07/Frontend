const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");

let products = [];


async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  products = await res.json();
  displayProducts(products);
}


function displayProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div>${p.title}</div>
      <div class="price">$${p.price}</div>
    `;
    grid.appendChild(card);
  });
}


function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function handleSearch() {
  const text = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(text)
  );
  displayProducts(filtered);
}


searchInput.addEventListener("input", debounce(handleSearch, 300));


loadProducts();
