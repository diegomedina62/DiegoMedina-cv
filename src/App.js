import React from 'react';
import Formacion from './components/Formacion';
import Experiencia from './components/Experiencia';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-row">
        <div className="w-8 shrink-0 lg:w-72"></div>

        <div className="flex grow flex-col">
          <Home />
          <div className="mx-auto w-full max-w-screen-lg px-3 2xl:px-0">
            <About />
            <Experiencia />
            <Formacion />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
