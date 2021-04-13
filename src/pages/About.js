// ! General
import React, {useState, useEffect} from 'react';
// ! Components
import Card from '../components/Card';
import Loader from '../components/Loader';
// ! Images
import { setImages } from '../images/index';
// ! Style
import '../styles/About.css';


const About = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, Math.floor(Math.random() * 500));
  }, []);

  const Cards = Object.keys(setImages).map((key) => (<Card
    cardImage={setImages[key]}
    cardTitle={key}
  />));

  if(pageLoading) {
    return <Loader/>
  } else {
    return (
      <section className="about">
        <div className="about__container">
          <div className="about__text">
            <p className="sub-header">About Me</p>
            <h2>Josh Overton</h2>
            <p className="about__text-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis error architecto odit ab perferendis quas sequi. Labore nobis laborum et temporibus expedita, quidem atque dignissimos officia. Animi fuga perferendis omnis!</p>
            <div className="about__socials">
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-youtube-square"></i>
            </div>
          </div>
          <div className="about__set">
          <p className="sub-header">Main Set</p>
            <div className="about__set-container">
              {Cards}
            </div>
          </div>
          <div className="about__photo">
  
          </div>
        </div>
      </section>
    );
  }
}

export default About;