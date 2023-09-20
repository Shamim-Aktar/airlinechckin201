import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Grid
} from "@mui/material";
import './Passengerlist.css'


const PassengerList = ({ flightId }) => {
  console.log(flightId)
  const [passengerlist, setPassengerList] = useState([])



  useEffect(() => {
    const fetchPassengerList = async () => {
      const listUrl = 'http://localhost:4000/PassengerDetailData'
      console.log(flightId)
      // const response = await axios.get(`${listUrl}`)
      const response = await axios.get(`${listUrl}?flight_id=${flightId}`)
        .catch((error) => {
          console.log('Err', error)
        })
      console.log(response.data)
      setPassengerList(response.data)
    }
    fetchPassengerList()
  }, [flightId])

  return (
    <div className='passenger-list'>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead >
              <TableRow >
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Mobile number</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Infant</TableCell>
                <TableCell align="center">Wheelchair</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Seat number</TableCell>
                <TableCell align="center">DOB</TableCell>
                <TableCell align="center">Passport</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Special meal</TableCell>
                <TableCell align="center">Ancillary</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {passengerlist.map((row, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{row.first_name}</TableCell>
                  <TableCell align="center">{row.last_name}</TableCell>
                  <TableCell align="center">{row.mobile_no}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                  <TableCell align="center">{row.infant}</TableCell>
                  <TableCell align="center">{row.wheelChair}</TableCell>
                  <TableCell align="center">{row.seat_no}</TableCell>
                  <TableCell align="center">{row.passport}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.special_meals}</TableCell>
                  <TableCell align="center">{row.ancillary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
};

export default PassengerList;