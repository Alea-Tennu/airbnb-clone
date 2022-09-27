import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Nav from './components/navbar';
import Hero from './components/hero';
import Cards from './components/card';
import data from './components/data';

function App(){

    const card = data.map((item) => (
            <Cards
                image={data.coverImg}
                rating={data.stats.ratings}
                reviewCount={data.stats.reviewCount}
                location={data.location}
                title={data.title}
                price={data.price} />))
// console.log(card)
    return(
         <div>
            <Nav />
            <Hero />
            {card}            
         </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))