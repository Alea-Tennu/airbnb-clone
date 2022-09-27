import React from 'react';
import Picgrid from '../images/photo-grid.png';

export default function Hero(){
    return(
        <div>
            <section className='hero'>
                <img
                    src= {Picgrid}
                    alt=''     
                    className='hero-photo'           
                />
                <h1 className='hero-header'>Online Experiences</h1>
                <p className='hero-text'>Join unique interactive activities
                    led by one-of-a-kind host, all without leaving home</p>
            </section>
        </div>
    )
}