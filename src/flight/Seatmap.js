import React, { useState, useEffect } from 'react';
import './Seatmap.css'


import { Typography, Box } from '@mui/material/';
import Modal from '@mui/material/Modal';


const Seatmap = ({ seatNumber, serviceName, passengerMap }) => {
  console.log(passengerMap)

  //[''yes, 'no']
  //const {name}
  const [bookedSeat, setBookedSeat] = useState('')
  const [services, setServices] = useState('Yes')
  console.log(seatNumber)
  const numberOfrows = 26;
  const numCols = 6
  const gridCells = [];


  const noticeCls = [
    {
      circle: 'Booked Seat',
      color: '#8BDBF9'
    },
    {
      circle: 'Booked Seat with Wheelchair',
      color: '#FA6060'
    },
    {
      circle: 'Booked Seat with Infant',
      color: '#6262FB'
    },
    {
      circle: 'Booked Seat with Wheelchair && Infant',
      color: '#5fad60'
    },

    {
      circle: 'Empty Seat',
      color: '#F6F6DF'
    }]

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

  useEffect(() => {
    setBookedSeat(seatNumber)
    setServices(serviceName)
  }, [seatNumber, serviceName])

  console.log('b', bookedSeat)
  console.log('ser', services)



  for (let row = 0; row < numberOfrows; row++) {
    const rowLabel = String.fromCharCode(65 + row)
    for (let col = 0; col < numCols; col++) {
      const cellKey = `cell-${row}-${col}`;
      let seatnum = `${rowLabel}${col + 1}`
      let colors;


      let seat = passengerMap.find(s => s.seat_no === seatnum)

      if (seat && seat.wheelChair === 'Yes' && seat.infant === 'Yes') {
        colors = '#5fad60'
      }
      else if (seat && seat.wheelChair === 'Yes') {
        colors = '#FA6060'
      }
      else if (seat && seat.infant === 'Yes') {
        colors = '#6262FB'
      }
      else if (seat) {
        colors = '#8BDBF9'
      }
      else {
        colors = '#F6F6DF'
      }

      // if (bookedSeat.includes(seatnum.toString()) && sample[0].wheelChair === 'Yes') {
      //   colors = 'red'
      // }

      // else if (bookedSeat.includes(seatnum.toString())) {
      //   colors = 'blue'
      // }

      // else {
      //   colors = '#B2BEB5'
      // }

      gridCells.push(

        <div className='cell' key={cellKey} style={{ background: colors }} onClick={handleOpen}>
          {`${rowLabel}${col + 1}`}
        </div>
      )
    }
  }
  return (
    <>

      <ul className="colorIdentify">
        {

          noticeCls.map((data, i) => (
            <li key={i}>
              <div className="clsName" style={{ background: `${data.color}` }}></div> {data.circle}
            </li>
          ))
        }
      </ul>
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
