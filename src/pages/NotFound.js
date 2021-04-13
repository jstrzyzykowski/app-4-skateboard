import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import Loader from '../components/Loader';
import '../styles/Notfound.css';

const NotFound = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, Math.floor(Math.random() * 500));
  }, []);

  if(pageLoading === true) {
    return <Loader/>
  } else {
    return (
      <section className="notfound">
        <div className="notfound__container">
          <p className="notfound__code">404</p>
          <div className="notfound__text">
          <h3>Page not found</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <Button
          buttonStyle="btn-outline"
          >
            Back to Home
          </Button>
        </div>
      </section>
    );
  }
}

export default NotFound;