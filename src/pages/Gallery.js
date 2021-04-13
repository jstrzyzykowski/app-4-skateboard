// ! General
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
// ! Components
import {Button} from '../components/Button';
import Card from '../components/Card';
import Filter from '../components/Filter';
import Scroller from '../components/Scroller';
import GalleryModal from '../components/GalleryModal';
// ! Photos
import {photoItems} from '../images/index'; 
// ! Style
import '../styles/Gallery.css';

const Gallery = () => {
  const [galleryFilter, setGalleryFilter] = useState('newest');
  const [yPos, setYPos] = useState(0);
  const [cardHeight, setCardHeight] = useState(232);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalSrc, setModalSrc] = useState('');

  const showModal = (imageSrc) => {
    setIsModalVisible(true);
    setModalSrc(imageSrc); 
  };

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const Cards = photoItems.map((item, index) => (
    <Card
      key={index}
      cardImage={item.src}
      cardImageTimestamp={item.timestamp}
      cardStyle='card-extended'
      onClick={() => showModal(item.src)}
    />
  ));

  const sortByTimestamp = (array, filter) => {
    let sortedArray = array.sort((a, b) => dayjs(a.timestamp) - dayjs(b.timestamp));

    if(filter === 'newest') return sortedArray.reverse();
    else return sortedArray;
  };

  const handleClick = (scrollerType) => {
    switch (scrollerType) {
      case 'max-up':
        setYPos(0);
        console.log('UP MAX');
        break;
      case 'up':
        if(yPos !== 0) {
          setYPos(yPos + cardHeight);
          console.log('UP +1');
        }
        break;
      case 'max-down':
        setYPos(-wrapperHeight + (2 * cardHeight));
        console.log('DOWN MAX');
        break;
      case 'down':
        if(yPos > -wrapperHeight + (2 * cardHeight)) {
          setYPos(yPos - cardHeight);
          console.log('DOWN -1');
        }
        break;
      default:
        break;
    }
  }

  const handleClickFilter = (filter) => {
    if(galleryFilter !== filter) {
      setGalleryFilter(filter);
      sortByTimestamp(photoItems, filter);
    }
  }

  const galleryModalComponent = isModalVisible ? <GalleryModal src={modalSrc} close={closeModal}/> : null;

  useEffect(() => {
    setWrapperHeight(document.querySelector('.gallery__wrapper').clientHeight);
    sortByTimestamp(photoItems, 'newest');
  }, [])

  return (
    <section className="gallery">
      <div className="gallery__container">
        <p className="sub-header">Legendary Shots</p>
        <h2>Lorem ipsum dolor</h2>
        <div className="gallery__filters">
          <Filter
            filterName="gallery"
            filterFunction={() => handleClickFilter('newest')}
            filterText="Newest"
            activeGalleryFilter={galleryFilter}
          />
          <Filter
            filterName="gallery"
            filterFunction={() => handleClickFilter('oldest')}
            filterText="Oldest"
            activeGalleryFilter={galleryFilter}
          />
        </div>
        <div className="gallery__photos">
          <div className="gallery__wrapper" style={{
            top: `${yPos}px`
          }}>
            {Cards}
          </div>
        </div>
        <div className="gallery__controllers">
          <Scroller
            onClick={() => {handleClick('max-up')}}
          >
            <i className="fas fa-angle-double-up"></i>
          </Scroller>
          <Scroller
            onClick={() => {handleClick('up')}}
          >
            <i className="fas fa-angle-up"></i>
          </Scroller>
          <Scroller
            onClick={() => {handleClick('down')}}
          >
            <i className="fas fa-angle-down"></i>
          </Scroller>
          <Scroller
            onClick={() => {handleClick('max-down')}}
          >
            <i className="fas fa-angle-double-down"></i>
          </Scroller>
        </div>
      </div>
      { galleryModalComponent }
    </section>
  );
}

export default Gallery;