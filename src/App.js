import React from 'react';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Objetivos from './components/Objetivos';
import Extras from './components/Extras';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="absolute left-64 pl-4">
        <Home />
        <Objetivos />
        <Experiencia />
        <Educacion />
        <Extras />
      </div>
    </React.Fragment>
  );
}

export default App;
