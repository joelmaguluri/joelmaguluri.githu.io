import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ParticleBackground from './components/Particle';

ReactDOM.render(
  <React.StrictMode>
    <Header /> 
    <MainContent/>
    <ParticleBackground/>
  </React.StrictMode>,
  document.getElementById('root')
);

