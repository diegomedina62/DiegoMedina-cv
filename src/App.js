import React from 'react';
import Formacion from './components/Formacion';
import Experiencia from './components/Experiencia';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-row">
        <div className="w-8 shrink-0 lg:w-72"></div>

        <div className="flex grow flex-col">
          <Home />
          <div className="mx-auto w-full max-w-screen-lg px-4 2xl:px-0">
            <About />
            <Skills />
            <Experiencia />
            <Formacion />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
