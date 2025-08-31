const images = [
  { url: "pic1.jpeg", caption: "Mountain View", favorite: true },
  { url: "pic2.jpeg", caption: "Golden Retriever", favorite: false },
  { url: "pic3.jpeg", caption: "Forest Path", favorite: true },
  { url: "pic4.jpeg", caption: "Sunny Beach", favorite: false },
  { url: "pic5.jpeg", caption: "City Lights", favorite: true },
  { url: "pic6.jpeg", caption: "Desert Dunes", favorite: false }
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
