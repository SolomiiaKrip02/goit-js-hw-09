import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const images = [
    {
      small: 'https://picsum.photos/id/1015/250/150',
      large: 'https://picsum.photos/id/1015/1000/600',
      description: 'Image 1',
    },
    {
      small: 'https://picsum.photos/id/1016/250/150',
      large: 'https://picsum.photos/id/1016/1000/600',
      description: 'Image 2',
    },
    {
      small: 'https://picsum.photos/id/1018/250/150',
      large: 'https://picsum.photos/id/1018/1000/600',
      description: 'Image 3',
    },
  ];

  const galleryEl = document.querySelector('.gallery');
  if (!galleryEl) return;

  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.large}">
        <img class="gallery-image" src="${img.small}" alt="${img.description}" />
      </a>
    </li>
  `
    )
    .join('');

  galleryEl.innerHTML = markup;

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
});
