import { Container, Grid, Paper, TextField, Button} from '@mui/material';
import React, { useState } from 'react';

const Login = () => {
    const [values, setValues]=useState({
        eamil:'',
        pass:''
    })
    return (
        <Container maxWidth='sm'>
                <Grid container spacing={2} direction={'column'} 
                justifyContent={'center'} style={{minHeight:"100vh"}}>
                    <Paper elevation={2} sx={{padding:5}}>
                        <Grid container direction="column" sacing={2}>
                            <Grid item>
                                <TextField type='email' placeholder='enter your email'
                                fullWidth variant='outlined' label='email'/>
                            </Grid>
                            <Grid item>
                                <TextField type='password' placeholder='enter your password'
                                fullWidth variant='outlined' label="password"/>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' fullWidth>Sign in</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
        </Container>
    );
};

export default Login;