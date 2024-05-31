import React, { useEffect } from 'react';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import { About, Footer, Header, Skills, Gallery, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  useEffect(() => {
    inject();
    injectSpeedInsights();
  }, []);

  return (
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
};

export default App;