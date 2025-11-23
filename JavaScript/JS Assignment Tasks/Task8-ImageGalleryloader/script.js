const imageGrid = document.getElementById("imageGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");


async function fetchRandomImage() {
  
  const url = "https://source.unsplash.com/random/300x300?sig=" + Math.random();
  return url;
}


async function loadImages(count = 6) {
  for (let i = 0; i < count; i++) {
    const imgUrl = await fetchRandomImage();
    addImageToGrid(imgUrl);
  }
}


function addImageToGrid(url) {
  const img = document.createElement("img");
  img.src = url;

  
  img.onload = () => {
    img.classList.add("fade-in");
  };

  imageGrid.appendChild(img);
}


loadImages();


loadMoreBtn.addEventListener("click", () => {
  loadImages();
});
