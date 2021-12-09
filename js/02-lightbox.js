import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
.map(({preview,original,description})=>
`<li class = "gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
)
.join("");


galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event){
    event.preventDefault();

    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) {
    return
};

let lightBox = new SimpleLightbox('.gallery a', {
    captionsData:"alt",
    captionDelay:250,
    scrollZoomFactor:0.5,
    navText:['←','→'],
    captionPosition:'bottom',
});
lightBox.on('show.simplelightbox')
};
