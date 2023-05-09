import React from 'react'
import photoGrid from '../img/photo-grid.png'
export default function Hero(){
    return (
        <main className='hero'>
            <img src={photoGrid} alt='photo grid' />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    )
}