import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'https://placekitten.com/300/200',
    original: 'https://placekitten.com/1200/800',
    description: 'Cute kitten 1',
  },
  {
    preview: 'https://placekitten.com/301/200',
    original: 'https://placekitten.com/1201/800',
    description: 'Cute kitten 2',
  },
  {
    preview: 'https://placekitten.com/302/200',
    original: 'https://placekitten.com/1202/800',
    description: 'Cute kitten 3',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img 
            class="gallery-image" 
            src="${preview}" 
            alt="${description}" 
          />
        </a>
      </li>`
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
