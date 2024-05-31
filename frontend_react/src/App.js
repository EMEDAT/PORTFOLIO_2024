import React from 'react';

import { About, Footer, Header, Skills, Gallery, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Gallery />
    <Footer />
  </div>
);

export default App;
