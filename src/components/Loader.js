import React from 'react';
import '../styles/Loader.css';


const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__box"></div>
      <p className="loader__text">
        Loading
        <span className="loader__dot"></span>
        <span className="loader__dot"></span>
        <span className="loader__dot"></span>
      </p>
    </div>
  );
}
 
export default Loader;