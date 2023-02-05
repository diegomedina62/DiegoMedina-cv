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
      <Navbar />
      <div className="flex flex-row">
        <div className="w-8 shrink-0 lg:w-72"></div>

        <div className="flex grow flex-col">
          <Home />
          <p className="mx-auto w-full max-w-screen-lg">
            <About />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
