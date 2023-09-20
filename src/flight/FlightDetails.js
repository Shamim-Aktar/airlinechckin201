import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
     Select, MenuItem, FormControl, InputLabel, Grid
} from "@mui/material";
import moment from 'moment'
// import { flightListData } from '../../data';



const FlightDetail = () => {

    const [flightDetail, setFlightDetail] = useState([]);
   const [selectedValue, setSelectedValue]=useState([])


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


    // const handleChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };



  



    return (

        <div>
               <Grid
        style={{ height: "100%", padding: "12px" }}
        container
        direction="column"
        justify="space-between"
      >
        <Grid item>
            <FormControl  variant="outlined"
            margin={"1"}
            style={{ width: "100%" }}>
            <InputLabel id="test-select-label" style={{top: '2.2em'}}>Flight Details</InputLabel>
            <Select
                sx={{
                    marginTop: 5,
                    width: 250,
                    height: 50,
                 
                }}
                value={selectedValue}
                onChange={handleChange}
                label='Flight Details'
                variant='outlined'
            >
                {flightDetail && flightDetail.map((row, i)=>{

            
                console.log(row);
                return(
                    <MenuItem key={row.id} value={row.id}>
                            {`${row.flightNo} ${row.fromPlace} - ${row.toPlace}
                                ${moment(row.departureDate).format("ddd MMM Do YYYY h:mm a")} 
                                ${moment(row.arrivalDate).format("ddd MMM Do YYYY h:mm a")}`
                            }
                          
                      
                    </MenuItem>
                )
                })}
            </Select>
            </FormControl>
            {/* <Paper sx={{ width: '90%', margin: "2% auto" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                              
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          Passenhger etail will come here
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper> */}
                </Grid>
                </Grid>
        </div>
    );
};

export default FlightDetail;