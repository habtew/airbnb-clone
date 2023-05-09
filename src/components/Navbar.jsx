import React from 'react'
import airbnbLogo from '../img/airbnb-logo.png'

export default function Navbar(){
    return (
        <nav className='nav'>
            <img src={airbnbLogo} alt="airbanb logo" />
        </nav>
    )
}