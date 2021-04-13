import React, {useState, useEffect} from 'react';
import Loader from '../components/Loader';
import '../styles/Home.css';

const Home = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, Math.floor(Math.random() * 500));
  }, []);

  if(pageLoading) {
    return <Loader/>
  } else {
    return (
      <section className="home">
        <div className="home__container">
          <div className="home__text">
            <h1>Lorem ipsum dolor</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde distinctio cumque praesentium, magni sapiente tempora ipsum saepe porro illum itaque.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;