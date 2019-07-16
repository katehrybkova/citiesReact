import React from 'react';
import './App.css';
import Header from './components/Header'
import FilterInput from './components/FilterInput'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <FilterInput/>
      <Footer/>
    </div>
  );
}

export default App;
