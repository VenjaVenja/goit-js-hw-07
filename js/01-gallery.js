import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const imagesMarkup = galleryItems
.map(({preview,original,description}) => 
`<div class = "gallery__item">
<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a></div>`)
.join("");


galleryEl.insertAdjacentHTML('afterbegin',imagesMarkup);

galleryEl.addEventListener('click', onImageClick)

function onImageClick (event){
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
    return;
}

const modalWindow = basicLightbox.create(
    `<div class='modal'>
 <img src='${event.target.dataset.source}' width='800' height='600'>
</div>`, {
    onShow: (modalWindow)=>{
        window.addEventListener('keydown', onKeyboardEscClick);
        // console.log('onShow', modalWindow)
    },
    onClose: (modalWindow)=>{
        window.removeEventListener('keydown', onKeyboardEscClick);
        // console.log('onClose', modalWindow)
    }
})
modalWindow.show()
function onKeyboardEscClick (event) {
if(event.code === 'Escape'){
    modalWindow.close();
    // window.removeEventListener('keydown', onKeyboardEscClick);
    };
    };
};