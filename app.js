const images = [
  { url: "images/pic1.jpg", caption: "Mountain View", favorite: true },
  { url: "images/pic2.jpg", caption: "Golden Retriever", favorite: false },
  { url: "images/pic3.jpg", caption: "Forest Path", favorite: true },
  { url: "images/pic4.jpg", caption: "Sunny Beach", favorite: false },
  { url: "images/pic5.jpg", caption: "City Lights", favorite: true },
  { url: "images/pic6.jpg", caption: "Desert Dunes", favorite: false }
];

const gallery = document.getElementById("gallery");
const modeToggle = document.getElementById("modeToggle");
const filterToggle = document.getElementById("filterToggle");

let showFavorites = false;

function renderGallery() {
  gallery.innerHTML = "";
  let data = images;
  if (showFavorites) {
    data = images.filter(img => img.favorite === true);
  }
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.caption;
    const caption = document.createElement("p");
    caption.textContent = item.caption;
    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);
  });
}

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

filterToggle.addEventListener("click", () => {
  showFavorites = !showFavorites;
  filterToggle.textContent = showFavorites ? "Show All" : "Show Favorites Only";
  renderGallery();
});

renderGallery();
