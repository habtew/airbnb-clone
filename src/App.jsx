import React from 'react';
import data from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';


function App() {
  console.log(data)
  const cardElement = data.map(item => <Card props={item} />)
  return (
    <>
    <Navbar />
    <Hero />
    <div className='card-container'>
      {cardElement}
    </div>
    </>
  )
}

export default App
