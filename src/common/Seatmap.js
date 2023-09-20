import React from 'react';
import { seatMap } from '../data/seatmap';
import Deck from '../Seatmapcomponent/Deck';



const Seatmap = () => {
    return (
        <div>
              {seatMap.data[0].decks.map((deck, i) => (
        <Deck deck={deck} key={i} />
      ))}
        </div>
    );
};

export default Seatmap;
