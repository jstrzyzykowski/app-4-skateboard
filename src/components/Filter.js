import React from 'react';
import '../styles/Filter.css';

const Filter = ({filterName, filterText, filterFunction, filterRadius, activeGalleryFilter}) => {

  const isChecked = activeGalleryFilter === filterText.toLowerCase() ? true : false;

  return (
    <label className="filter" onClick=  {filterFunction}>
      <input className="filter__input" type="radio" name={filterName} checked={isChecked}/>
      <span className="filter__text">{filterText}</span>
    </label>
  );
}

export default Filter;