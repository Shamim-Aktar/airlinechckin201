import React, { useState, useEffect } from 'react';
import './Seatmap.css'


import {Typography, Box} from '@mui/material/';
import Modal from '@mui/material/Modal';


const Seatmap = ({seatNumber, serviceName}) => {
   
console.log(serviceName)
//[''yes, 'no']
    //const {name}
    const [bookedSeat, setBookedSeat]=useState('')
    console.log(seatNumber)
    const numberOfrows = 26;
    const numCols = 6
    const gridCells = [];

   
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    // const handleClick=()=>{
    //     console.log('hi')
    // }
    useEffect(()=>{
            setBookedSeat(seatNumber)
    },[seatNumber])

    console.log('b', bookedSeat)

    for (let row = 0; row < numberOfrows; row++) {
        const rowLabel = String.fromCharCode(65 + row)
        for (let col = 0; col < numCols; col++) {
            const cellKey = `cell-${row}-${col}`;
            let seatnum=`${rowLabel}${col + 1}`
            let colors;
         //  serviceName === 'yes' ? 'red':'#5F8FDE'
           //'#5F8FDE'
            colors=bookedSeat.includes(seatnum.toString())  ? serviceName[3] === 'Yes' ? 'red':'#5F8FDE':'	#B2BEB5'
            gridCells.push(
              
                <div className='cell' key={cellKey} style={{ background: colors }} onClick={handleOpen}>
                    {`${rowLabel}${col + 1}`}
                </div>
            )
        }
    }
    return (
        <>
        <div className="container">
            {gridCells}
        </div>
          <div>
         
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        </>

    );
};

export default Seatmap;
