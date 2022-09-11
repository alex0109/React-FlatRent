import React from 'react'

import { Avatar, Container, Divider, Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';

import { innerTheme } from '../../../src/static/styles.js';

function Comment() {
  return (
    <ThemeProvider theme={innerTheme}>
        <Container sx={{ mb: 5 }}>
            <Grid container>
                <Grid item lg={1}>
                    <Avatar>Ok</Avatar>
                </Grid>
                <Grid item lg={11} >
                    <Typography sx={{ mb: 2 }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea mollitia repellendus fuga dignissimos non necessitatibus numquam illo at nostrum fugit aspernatur enim amet perferendis distinctio explicabo velit delectus accusantium, provident ipsa aliquid beatae. Quidem optio corporis dolorum iure assumenda ad dolores itaque, libero eveniet debitis fugiat amet laborum ut quas. Iusto perspiciatis veniam, numquam aliquam quis nam. Saepe dolor consequatur praesentium, in quo adipisci? Explicabo commodi optio quas rerum porro deserunt eligendi a incidunt autem, consequatur saepe iusto, nam quia?
                    </Typography>
                    <Divider/>
                </Grid>
            </Grid>
        </Container>
    </ThemeProvider>
  )
}

export default Comment