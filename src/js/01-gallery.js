import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
  linkEl: document.querySelectorAll(".gallery__link"),
  imgEl: document.querySelectorAll(".gallery__image"),
  modalEl: document.querySelector(".basicLightbox__placeholder"),
};

const galleryMarkup = makeGalleryMarkup(galleryItems);

refs.galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
refs.galleryEl.addEventListener("click", onGalleryContainerClick);

function makeGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}" >
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description} " />
</a>
</li>
</div>`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  console.log(evt.target);
  evt.preventDefault();
  const isClickgContainsImg = evt.target.classList.contains("gallery__image");
  if (!isClickgContainsImg) {
    return;
  } else {
    onImageClick(evt.target);
  }
}

function onImageClick(image) {
  const originalImg = image.dataset.source;

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${originalImg}">`
  );

  instance.show();

  window.addEventListener("keydown", onEscClick);

  function onEscClick(evt) {
    console.log("click");
    const ESC = "Escape";
    const isEsc = evt.code === ESC;

    if (isEsc) {
      console.log("esc");
      instance.close();
      window.removeEventListener("keydown", onEscClick);
    }
  }
}

console.log(galleryItems);
