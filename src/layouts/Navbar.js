// ! General
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// ! Customs
import { Button } from '../components/Button';
// ! Styles
import '../styles/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleClickExpander = () => setIsExpanded(!isExpanded);
  
  // Resize Watcher
  const watchResize = () => {
    if(window.innerWidth < 1025) {
      setMobile(true);
    } else {
      setMobile(false);
      setClick(false);
    }

    if(window.innerWidth < 1200) {
      setIsExpanded(false);
    }
  }

  useEffect(() => {
    watchResize();
  }, []);

  window.addEventListener('resize', watchResize);

  return (
    <>
      <nav className={`${isExpanded ? 'navbar expanded' : 'navbar'}`}>
        <div className="navbar__expander" onClick={handleClickExpander}>
          <i className="fas fa-angle-double-left"></i>
        </div>
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <i className="fab fa-sith"></i>
            {isExpanded && 'SK8'}
          </Link>
          <div className="navbar__toggle" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'navbar__menu mobile-active' : 'navbar__menu'}>
            <li className="navbar__item">
              <NavLink to="/" exact className="navbar__link" onClick={closeMobileMenu}>
                {isExpanded ? 'Home' : <i className="fas fa-home"></i>}
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/about" className="navbar__link" onClick={closeMobileMenu}>
              {isExpanded ? 'About' : <i className="fas fa-address-card"></i>}
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/gallery" className="navbar__link" onClick={closeMobileMenu}>
              {isExpanded ? 'Gallery' : <i className="fas fa-camera"></i>}
              </NavLink>
            </li>
            <li className="navbar__btn">
              {/* <Link to="/sign-up" className="navbar__link-mobile">
                Sign Up
              </Link> */}
              <Button 
              buttonStyle="btn-special" 
              buttonSize={mobile ? 'btn-extra-large' : 'btn-medium'} 
              onClick={closeMobileMenu}
              linkAddress="sign-in"
              >
                {isExpanded ? 'SIGN IN' : <i className="fas fa-sign-in-alt"></i>}
              </Button>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn-outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

