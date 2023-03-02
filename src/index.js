import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Top from './components/Top';
import Middle from "./components/Middle";
import Bottom from  './components/Bottom';
import ImageSlider from './components/ImageSlider'
import {SliderData} from './components/SliderData'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Top/><Middle/><ImageSlider slides={SliderData}/><Bottom/>
  </React.StrictMode>
);

