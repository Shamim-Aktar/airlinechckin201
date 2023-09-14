import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
        { id: 'flightnumber', name: 'Flight Number' },
        { id: 'departure', name: 'Departure Airport' },
        { id: 'arrival', name: 'Arrival Airport' },
        { id: 'date', name: 'Date' },
        { id: 'time', name: 'Time' }
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
                                            console.log(row)
                                            let value = row[column.id];
                                            console.log(value)
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