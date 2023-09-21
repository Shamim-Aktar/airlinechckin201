import React from 'react';
import './Seatmap.css'

const Seatmap = () => {
    const numberOfrows = 26;
    const numCols = 6
    const gridCells = [];

    for (let row = 0; row < numberOfrows; row++) {
        const rowLabel = String.fromCharCode(65 + row)
        for (let col = 0; col < numCols; col++) {
            const cellKey = `cell-${row}-${col}`;
            gridCells.push(
                <div className='cell' key={cellKey}>
                    {`${col + 1}${rowLabel}`}
                </div>
            )
        }
    }
    return (
        <div className="container">
            {gridCells}
        </div>
    );
};

export default Seatmap;