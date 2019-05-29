import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Hobbies from './components/hobbies';
import Contact from './components/Contact';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component{
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Hobbies/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
