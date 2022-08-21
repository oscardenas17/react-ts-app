import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/quartz/bootstrap.min.css'
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App title="React and TypeScript" />
  </React.StrictMode>
);
