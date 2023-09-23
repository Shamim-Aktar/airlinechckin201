import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    Select, MenuItem, FormControl, InputLabel, Grid,
} from "@mui/material";
import moment from 'moment'
import PassengerList from '../passenger/PassengerList';
// import { flightListData } from '../../data';



const FlightDetails = () => {

    const [flightDetail, setFlightDetail] = useState([]);
    // const [selectedValue, setSelectedValue]=useState([])

    const [flightId, setFlightId] = useState("")
    const [wheelchair, setWheelchair] = useState("")
    // const [show, setShow] = useState(false)
    // const [singlePassenger, setSinglePassenger]=useState([])
    // const [filter, setFilter] = useState({
    //     weelchair: false,
    //     infant: false,
    //     specialMeals: false,
    //     checkedIn: false,
    // })

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

    const handleStatusChangeEvent = (event) => {
        console.log(event.target.value)
        // const listUrl = 'http://localhost:4000/PassengerDetailData'
        // const response = await axios.get(`${listUrl}?flight_id=${event.target.value}`)
        // console.log(response)
        setWheelchair(event.target.value)


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



                    <FormControl variant="outlined" margin={"normal"} sx={{ m: 1, minWidth: 120 }} >
                        <InputLabel htmlFor="groupstatus" style={{ top: '2.2em' }}>Grouping</InputLabel>
                        <Select native defaultValue="" id="groupstatus"
                            label="Grouping" sx={{ marginTop: 5, width: 250, height: 50 }}
                            onChange={handleStatusChangeEvent}>
                            <option aria-label="None" value="" />
                            <optgroup label="Status">
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </optgroup>
                            <optgroup label="Wheelchair">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </optgroup>
                            <optgroup label="Infant">
                                <option value={1}>Yes</option>
                                <option value={2}>No</option>
                            </optgroup>
                        </Select>
                    </FormControl>

                </Grid>

            </Grid>

            {!!flightId && wheelchair && <PassengerList flightId={flightId} wheelchair={wheelchair.toString()} />}

        </div>
    );
};

export default FlightDetails;