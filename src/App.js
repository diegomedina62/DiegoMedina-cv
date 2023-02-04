import React from 'react';
import Educacion from './components/Educacion';
import Experiencia from './components/Experiencia';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

import Extras from './components/Extras';

function App() {
  return (
    <React.Fragment>
      <div className="relative md:container md:mx-auto">
        <Navbar />
        <div className="absolute left-8 right-0 md:left-72">
          <Home />
          <About />
          <Experiencia />
          <Educacion />
          <Extras />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
