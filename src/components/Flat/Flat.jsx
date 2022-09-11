import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

import { Container, Box, Typography, Grid, Tab, Chip } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider } from '@mui/material/styles';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PetsIcon from '@mui/icons-material/Pets';
import SpaIcon from '@mui/icons-material/Spa';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BedIcon from '@mui/icons-material/Bed';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { innerTheme } from '../../../src/static/styles.js';
import city from '../../static/city.jpg'
import Comment from './Comment';

const Flat = () => {

    const flatID = useParams()
    const [tabValue, setTabValue] = useState('1');
    const flat = useSelector(state => state.flatReducer.flats.filter(flat => flat.id === Number(flatID.ID)))
    
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

  return (
    <ThemeProvider theme={innerTheme}>
        <Container>
            <Grid container color='dark.main'>
                <Grid item lg={12} md={12} sm={12}>
                    <Box component="img" sx={{height: '100%', width: '100%', borderRadius: 2}} src={city} alt="The house from the offer."/>
                </Grid>
                <Grid item lg={6} md={12} sm={12} sx={{mt: 3}}>
                    <Typography variant='h5'>
                        {flat[0].title}
                        <Chip label={`$${flat[0].price}`} variant="outlined" sx={{color: 'money.main', ml: 2}}/>
                    </Typography>
                </Grid>
                <Grid item lg={6} md={12} sm={12} sx={{mt: 3, color: 'blue.main'}}>
                    <WifiIcon sx={{ fontSize: 30, mr: 2}}/>
                    <LocalParkingIcon sx={{ fontSize: 30, mr: 2, ml: 2 }}/>
                    <PetsIcon sx={{ fontSize: 30, mr: 2, ml: 2 }}/>
                    <SpaIcon sx={{ fontSize: 30, mr: 2, ml: 2 }}/>
                    <FastfoodIcon sx={{ fontSize: 30, mr: 2, ml: 2 }}/>
                    <BedIcon sx={{ fontSize: 30, mr: 2, ml: 2 }}/>
                </Grid>
                <Grid item lg={12} md={12} sm={12} sx={{mt: 5}}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="About" value="1" />
                            <Tab label="Comments" value="2" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Typography>
                                {flat[0].body}
                            </Typography>
                        </TabPanel>
                        <TabPanel value="2">
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                        </TabPanel>
                    </TabContext>
                </Grid>
                <Grid item lg={12} md={12} sm={12} sx={{mt: 5}}>
                    <Box>
                        <Typography variant='h5'>Rent</Typography>
                        <Box>
                            <Typography><LocalPhoneIcon/> +11111111111</Typography>
                            <Typography><EmailIcon/> some@mail.com</Typography>
                            <Typography><TelegramIcon/> @telega</Typography>
                            <Typography><LocationOnIcon/> st. First Build 21</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </ThemeProvider>
    
  )
}

export default Flat