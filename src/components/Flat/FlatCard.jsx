import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { Card, CardContent, CardMedia, CardActions, Typography, Button, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import city from '../../static/city.jpg'
import { innerTheme } from '../../static/styles.js';
import { deleteFlatAction } from '../../redux/flatReducer'

const FlatCard = (props) => {

    const dispatch = useDispatch()

    const deleteFlat = (flat) => {
        dispatch(deleteFlatAction(flat))
    }

  return (
    <ThemeProvider theme={innerTheme}>
        <Card sx={{ position: 'relative', minHeight: '400px', mt: 3, mb: 5 }}>
            <CardMedia
                component="img"
                height="140"
                image={city}
                alt="flat"
            />
            <CardContent sx={{ minHeight: '100% '}}>
                <Typography gutterBottom variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography variant="body2">
                {props.body.length>250 ?
                    `${props.body.slice(0, 250)}...`
                    :
                    props.body
                }
                </Typography>
            </CardContent>
            <CardActions sx={{ position: 'absolute', 
                                bottom: 0, 
                                width: '100%', 
                                display: 'flex'}}>
                <Box sx={{ textAlign: 'left' }}>
                    <Link to={`../flat/${props.id}`}>
                        <Button size="small" color="blue">Info</Button>
                    </Link>
                </Box>
                <Box>
                    <Button color='red' onClick={() => deleteFlat(props.id)}>DEL</Button>
                </Box>
                <Box sx={{ width: '100%', textAlign: 'right', pr: 3 }}>
                    <Typography sx={{ justifyContent: 'right', color: 'money.main' }}>${props.price ? props.price : 'free'}</Typography>
                </Box>
            </CardActions>
        </Card>
    </ThemeProvider>
    
  )
}

export default FlatCard