import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <h1>My Work</h1>
      <p>Checkout the stuff I've done:</p>
      <Link to="/portfolio/1">Item One</Link><br/>
      <Link to="/portfolio/2">Item Two</Link>
  </div>
);

export default Portfolio;