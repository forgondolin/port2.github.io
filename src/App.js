import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import Skills from './components/skills';
import Carrossel from './components/carrossel';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Wallpaper" />
      <About />
      <Skills />
      <Carrossel />
      <Footer />
    </div>
  );
};

export default App;


/////