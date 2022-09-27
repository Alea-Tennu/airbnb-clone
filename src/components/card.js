import React from 'react';
import star from '../images/star.png';
 

export default function Cards(props){
    // console.log(props)
    return(
        <div className='card'>
            <img 
                src={props.image}
                alt=''
                className='card-image'
            />
            <div className='card-stats'>
                <img src={star} alt='' className='card-star'/>
                <span>{props.rating}</span>
                <span className='grey'>({props.reviewCount}) .</span>
                <span className='grey'>{props.location}</span>
            </div>
                 <p>{props.title}</p>
                <p><span className='bold'>From {props.price}$</span> / person</p>

        </div>
    )
}