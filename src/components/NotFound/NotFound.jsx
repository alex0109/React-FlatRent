import React from 'react'
import { Container, Box, Typography } from '@mui/material'

function NotFound() {
  return (
    <Container className='main'>
        <Box>
            <Typography variant='h3'>
                Page not found
            </Typography>
        </Box>
    </Container>
  )
}

export default NotFound