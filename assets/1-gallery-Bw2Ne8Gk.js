import{S as e}from"./vendor-CgTBfC_f.js";document.addEventListener("DOMContentLoaded",()=>{const a=[{small:"https://picsum.photos/id/1015/250/150",large:"https://picsum.photos/id/1015/1000/600",description:"Image 1"},{small:"https://picsum.photos/id/1016/250/150",large:"https://picsum.photos/id/1016/1000/600",description:"Image 2"},{small:"https://picsum.photos/id/1018/250/150",large:"https://picsum.photos/id/1018/1000/600",description:"Image 3"}],s=document.querySelector(".gallery");if(!s)return;const i=a.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.large}">
        <img class="gallery-image" src="${t.small}" alt="${t.description}" />
      </a>
    </li>
  `).join("");s.innerHTML=i,new e(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})});
//# sourceMappingURL=1-gallery-Bw2Ne8Gk.js.map
