import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import FlatCard from '../Flat/FlatCard';
import { innerTheme } from '../../../src/static/styles.js';

const Profile = () => {

    const flats = useSelector(state => state.flatReducer.flats)

  return (
    <ThemeProvider theme={innerTheme}>
        <Container>
            <Box>
                <Typography textAlign='center' variant='h4'>Profile</Typography>
                <Grid container sx={{ backgroundColor: 'white.main', borderRadius: 5, p: 3 }}>
                    <Grid item textAlign='left' xs={6} sm={6}>
                        <Typography variant='h4'>AccName</Typography>
                    </Grid>
                    <Grid item textAlign='right' xs={6} sm={6}>
                        <Link to='/addflat'>
                            <Button variant='contained'>Add Flat</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{p: 7}}>
                        <Divider sx={{ mb: 3}}/>
                        {
                            flats.length > 0 
                            ? 
                            flats.map(flat =>
                                    <FlatCard 
                                        key={flat.id}
                                        id={flat.id} 
                                        title={flat.title}
                                        body={flat.body}
                                        price={flat.price}/>
                            )
                            :
                            <Typography textAlign='center' variant='h5'>No flats</Typography>
                        }
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default Profile