// ! General
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// ! Customs
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
// ! Styles
import '../styles/App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/sign-in' component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
