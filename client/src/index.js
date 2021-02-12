import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ParticleBackground from './components/Particle';

ReactDOM.render(
  <React.StrictMode>
    <ParticleBackground/>
    <Header /> 
  </React.StrictMode>,
  document.getElementById('root')
);

