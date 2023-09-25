import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    Select, MenuItem, FormControl, InputLabel, Grid, ListItemText, Checkbox, OutlinedInput
} from "@mui/material";
import moment from 'moment'
import PassengerList from '../passenger/PassengerList';
// import { flightListData } from '../../data';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const servicenames = [
    'wheelChair',
    'infant'
];

const FlightDetails = () => {

    const [flightDetail, setFlightDetail] = useState([]);
    // const [selectedValue, setSelectedValue]=useState([])

    const [flightId, setFlightId] = useState("")
    const [serviceName, setServiceName] = useState([]);


    const baseUrl = 'http://localhost:4000'
    const fetchFlightDetail = async () => {

        const listUrl = `${baseUrl}/flightDetails`
        console.log(listUrl)
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

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log('val', value)
        setServiceName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };





    return (

        <div>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>

                    <FormControl variant="outlined" margin={"normal"} sx={{ m: 1, minWidth: 120 }}>
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

                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={serviceName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {servicenames.map((row) => (
                                <MenuItem key={row} value={row}>
                                    <Checkbox checked={serviceName.indexOf(row) > -1} />
                                    <ListItemText primary={row} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>




                </Grid>

            </Grid>

            {(flightId || serviceName) && <PassengerList flightId={flightId} serviceName={serviceName} />}


        </div>
    );
};

export default FlightDetails;