import React from 'react';
import '../styles/Scroller.css';

const Scroller = ({children, onClick}) => {
  return (
    <div className="scroller" onClick={onClick}>
        {children}
    </div>
  );
}
 
export default Scroller;