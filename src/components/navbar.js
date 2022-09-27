import React from 'react';
import airlogo from '../images/airbnb-logo.png';

export default function Nav(){
    return(
        
        <nav>
            <img 
            className='nav-logo'
            src={airlogo}
            alt=''
        />
        </nav>
    )
}
