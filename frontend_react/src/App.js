import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

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
    <Analytics />
    <SpeedInsights />
  </div>
);

export default App;
