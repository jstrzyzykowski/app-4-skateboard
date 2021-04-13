import React from 'react';
import '../styles/GalleryModal.css';

const GalleryModal = ({ src, close }) => {
  return (
    <div className="galleryModal">
      <i class="fas fa-times" onClick={close}></i>
      <div className="galleryModal__image-wrapper">
        <img src={src}></img>
      </div>
    </div>
  );
}

export default GalleryModal;