import React from 'react';
import ReactDOM from 'react-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
  document.getElementById('root'),
);
