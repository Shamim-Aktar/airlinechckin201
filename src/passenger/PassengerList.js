import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Grid, Box
} from "@mui/material";
import './Passengerlist.css'
import Seatmap from '../flight/Seatmap'




const PassengerList = ({ flightId, serviceName }) => {
  console.log(serviceName)
  const [passengerlist, setPassengerList] = useState([])
  const [checked, setChecked] = useState(true)

  const [seatno, setSeatNo] = useState('')
  const [wheelchair, setWheelChair] = useState('')


  // const [filteredPassengerList, setFilteredPassengerList]=useState([])

  let passengerMappedSeat = passengerlist.map((passenger) => {
    return {
      seat_no: passenger.seat_no,
      wheelChair: passenger.wheelChair,
      infant: passenger.infant
    }
  })



  useEffect(() => {

    setChecked(checked)
    const fetchPassengerList = async () => {
      const listUrl = 'http://localhost:4000/PassengerDetailData'
      console.log(flightId)


      if (flightId) {

        const response = await axios.get(`${listUrl}?flight_id=${flightId}${serviceName.length > 0 ? serviceName.map((s) => `&${s}=${checked ? 'Yes' : 'No'}`).join('') : ''}`);


        console.log(response.data)
        let seatnumber = response.data.map(item => item.seat_no)
        let wheelchairservice = response.data.map(item => item.wheelChair)
        setWheelChair(wheelchairservice)
        console.log(wheelchairservice)
        // seatnumber=seatnumber
        setSeatNo(seatnumber)
        console.log('seat', seatnumber)
        setPassengerList(response.data)
      }
    }

    fetchPassengerList()



  }, [flightId, serviceName, checked])

  return (

    <>
      {
        passengerlist.length <= 0 ? <div><p>No Flight selected</p></div> :
          <div className='passenger-list'>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TableContainer component={Paper} >
                    <Table aria-label="simple table" stickyHeader>
                      <TableHead sx={{
                        "& th": {
                          color: "#ffffff",
                          backgroundColor: "#1976d2"
                        }
                      }} >
                        <TableRow >
                          <TableCell component="th" scope="row" align="center">First Name</TableCell>
                          <TableCell align="center">Last Name</TableCell>
                          <TableCell align="center">DOB</TableCell>
                          <TableCell align="center">Gender</TableCell>
                          <TableCell align="center">Address</TableCell>
                          <TableCell align="center">Mobile number</TableCell>


                          <TableCell align="center">Seat number</TableCell>

                          <TableCell align="center">Passport</TableCell>
                          <TableCell align="center">Wheelchair</TableCell>
                          <TableCell align="center">Infant</TableCell>
                          <TableCell align="center">Status</TableCell>
                          <TableCell align="center">Special meal</TableCell>
                          <TableCell align="center">Ancillary</TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {passengerlist.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell align="center">{row.first_name}</TableCell>
                            <TableCell align="center">{row.last_name}</TableCell>
                            <TableCell align="center">{row.date_of_birth}</TableCell>
                            <TableCell align="center">{row.gender}</TableCell>
                            <TableCell align="center">{row.address}</TableCell>
                            <TableCell align="center">{row.mobile_no}</TableCell>
                            <TableCell align="center">{row.seat_no}</TableCell>
                            <TableCell align="center">{row.passport}</TableCell>
                            <TableCell align="center">{row.wheelChair}</TableCell>
                            <TableCell align="center">{row.infant}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center">{row.special_meals}</TableCell>
                            <TableCell align="center">{row.ancillary}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>

              </Grid>
            </Box>
            {<Seatmap seatNumber={seatno} serviceName={wheelchair} passengerMap={passengerMappedSeat} />}
          </div>
      }
    </>

  );
};

export default PassengerList;