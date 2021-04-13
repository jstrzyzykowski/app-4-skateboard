// ! General
import React from 'react';
import { Link } from 'react-router-dom';
// ! Styles
import '../styles/Button.css';

const STYLES = ['btn-primary', 'btn-outline', 'btn-special'];
const SIZES = ['btn-medium', 'btn-large', 'btn-extra-large', 'btn-thin'];
const RADIUS = ['r-all', 'r-left', 'r-right', 'r-top-left', 'r-bottom-left', 'r-top-right', 'r-bottom-right'];
const LINKS = ['sign-in'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonRadius, linkAddress }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkLinkAddress = LINKS.includes(linkAddress) ? linkAddress : ''; 

  const checkButtonRadius = buttonRadius === undefined ? RADIUS[0] : buttonRadius;

  return(
    <Link to={`/${checkLinkAddress}`}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonRadius}`}
        onClick={onClick}
        type={type}
      >
        { children }
      </button>
    </Link>
  );
};