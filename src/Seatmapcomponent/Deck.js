import React from 'react';
import Seat from './Seat'


const displaySeats=(seatList)=>{
    return <div>
        {seatList.map((seat, index)=>{
            return <Seat number={seat.number}
             x={seat.coordinates.x} 
             y={seat.coordinates.y} 
             availability={seat.travelerPricing[0].seatAvailabilityStatus}
             key={index}
             />
        })}
        
        </div>
}

const Deck = (props) => {

    const width=props.deck.deckConfiguration.width;
    const length=props.deck.deckConfiguration.length;
    const seatList = props.deck.seats;
    return (
        <div>
             <div id="deck" style={{width:`${width*2.2}em`, height:`${length*2.1}em`}}>
                 {displaySeats(seatList)}.
    </div>
            
        </div>
    );
};

export default Deck;