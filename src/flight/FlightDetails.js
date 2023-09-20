import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    Select, MenuItem, FormControl, InputLabel, Grid
} from "@mui/material";
import moment from 'moment'

import PassengerList from '../passenger/PassengerList';
// import { flightListData } from '../../data';



const FlightDetails = () => {

    const [flightDetail, setFlightDetail] = useState([]);
    // const [selectedValue, setSelectedValue]=useState([])

    const [flightId, setFlightId] = useState("")
    // const [show, setShow] = useState(false)
    // const [singlePassenger, setSinglePassenger]=useState([])


    const fetchFlightDetail = async () => {

        const listUrl = 'http://localhost:4000/flightDetails'
        const response = await axios.get(`${listUrl}`)
            .catch((error) => {
                console.log('Err', error)
            })
        console.log(response.data)
        setFlightDetail(response.data)
    }

    useEffect(() => {
        fetchFlightDetail()
    }, [])

    const handleChangeEvent = (event) => {
        console.log(event.target.value)
        // const listUrl = 'http://localhost:4000/PassengerDetailData'
        // const response = await axios.get(`${listUrl}?flight_id=${event.target.value}`)
        // console.log(response)

        setFlightId(event.target.value)

    };


    return (

        <div>
            <Grid
                style={{ height: "100%", padding: "12px" }}
                container
                direction="column"
                justify="space-between"
            >
                <Grid item><FormControl variant="outlined" margin={"normal"}>
                    <InputLabel id="test-select-label" style={{ top: '2.2em' }}>Flight Details</InputLabel>
                    <Select
                        sx={{ marginTop: 5, width: 250, height: 50 }}
                        onChange={handleChangeEvent}
                        label='Flight Details'
                        variant='outlined'
                        value={flightId}
                    >
                        {flightDetail && flightDetail.map((row, i) => {


                            console.log(row);
                            return (
                                <MenuItem key={row.flight_id} value={row.flight_id}>
                                    {`${row.flightNo} ${row.fromPlace} - ${row.toPlace}
                                ${moment(row.departureDate).format("ddd MMM Do YYYY h:mm a")} 
                                ${moment(row.arrivalDate).format("ddd MMM Do YYYY h:mm a")}`
                                    }


                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                </Grid>
            </Grid>

            {!!flightId && <PassengerList flightId={flightId} />}
        </div>
    );
};

export default FlightDetails;