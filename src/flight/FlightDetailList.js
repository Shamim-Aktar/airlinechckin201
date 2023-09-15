import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import moment from 'moment'
// import { flightListData } from '../../data';



const FlightDetailList = () => {

    const [rows, rowChange] = useState([]);

    const fetchFlightList = async () => {

        const listUrl = 'http://localhost:4000/flightListData'
        const response = await axios.get(`${listUrl}`)
            .catch((error) => {
                console.log('Err', error)
            })
        console.log(response.data)
        rowChange(response.data)
    }

    useEffect(() => {
        fetchFlightList()
    }, [])


    const columns = [
        { id: 'airline', name: 'Airline' },
        { id: 'flightNo', name: 'Flight Number' },
        { id: 'departureStation', name: 'Departure Airport' },
        { id: 'arrivalStation', name: 'Arrival Airport' },
        { id: 'departureDate', name: 'Departure Date/Time' },
        { id: 'arrivalDate', name: 'Arrival Date/Time' },
        // { id: 'time', name: 'Time' }
    ]



    return (

        <div>
            <Paper sx={{ width: '90%', margin: "2% auto" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>{column.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows.map((row, i) => {
                                return (
                                    <TableRow key={i}>
                                        {columns && columns.map((column, i) => {

                                            let value = row[column.id];

                                            if (column.id === 'arrivalDate' || column.id === 'departureDate') {
                                                value = moment(value).format("ddd, MMM Do YYYY, h:mm:ss a")
                                            }
                                            return (
                                                <TableCell key={i}>
                                                    {value}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>
    );
};

export default FlightDetailList;