// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const createGalleryEl = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"></a>
 </li>`).join("");

galleryEl.insertAdjacentHTML("beforeend", createGalleryEl)

new SimpleLightbox('.gallery a', {
    captions: 'true',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250'
});