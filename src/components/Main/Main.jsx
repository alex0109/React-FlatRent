import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Grid, Box, TextField, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { innerTheme } from '../../../src/static/styles.js';
import FlatCard from '../Flat/FlatCard';
import { fetchFlats } from '../../redux/asyncAction/flats.js';

const filterFlats = (searchText, listOfFlats) => {
    if (!searchText) {
      return listOfFlats;
    }
    return listOfFlats.filter(({ title }) =>
        title.toLowerCase().includes(searchText.toLowerCase())
    );
}

const Main = () => {

    const dispatch = useDispatch()
    const flats = useSelector(state => state.flatReducer.flats)
    const [searchTerm, setSearchTerm] = useState('')
    const [filtredFlatList, setfiltredFlatList] = useState(flats);
    

    useEffect(() => {
        const Debounce = setTimeout(() => {
          const filteredFlats = filterFlats(searchTerm, flats);
          setfiltredFlatList(filteredFlats);
        }, 300);
    
        return () => clearTimeout(Debounce);
    }, [searchTerm, flats]);

  return (
        <ThemeProvider theme={innerTheme}>
            <Container sx={{ bgcolor: 'white.main', borderRadius: 5, pt: 3, pb: 5}}>
                <Box>
                    <TextField id="standard-basic" 
                    type='search' 
                    label="Search..." 
                    variant="standard"
                    onChange={(event) => setSearchTerm(event.target.value)} />
                </Box>
                <Grid container rows={{ xs: 4, md: 12 }} spacing={2}>
                    {
                        filtredFlatList.length > 0 
                        ? 
                        filtredFlatList.map(flat =>
                            <Grid key={flat.id} item lg={4} md={6} xs={12}>
                                <FlatCard
                                    id={flat.id}
                                    title={flat.title}
                                    body={flat.body}
                                    price={flat.price}/>
                            </Grid>
                        )
                        :
                        <Grid item lg={12} md={12} xs={12}>
                            <Typography textAlign='center' variant='h5'>No flats</Typography>
                        </Grid>
                    }
                    <Grid item lg={12} xs={12}>
                        <Button onClick={() => dispatch(fetchFlats())}>Load more</Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
  )
}

export default Main