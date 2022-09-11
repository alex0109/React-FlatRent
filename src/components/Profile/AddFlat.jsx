import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { addFlatAction } from './../../redux/flatReducer'
import { innerTheme } from '../../../src/static/styles.js';

function AddFlat() {

    const dispatch = useDispatch()
    const redirect = useNavigate();

    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
            price: ''
        }, 
        validationSchema: Yup.object({
          title: Yup.string().max(18).required("Required"),
          body: Yup.string().required("Required"),
          price: Yup.number().max(1_000_000_000).positive("Must be positive price!").required("Required")
        }),
        onSubmit: (values) => {
          dispatch(addFlatAction(Date.now(), values.title, values.body, values.price))
          redirect('/profile')
        }
    })

  return (
    <ThemeProvider theme={innerTheme}>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant='h4' sx={{ mb: 3 }}>Add your flat</Typography>
            <TextField
              id='title'
              label='Title' 
              variant='outlined'
              type='text'
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {formik.touched.title && formik.errors.title ? <Typography color='red'>{formik.errors.title}</Typography> : null}
            <TextField 
              sx={{ mt: 3 }}
              id='body'
              label='body' 
              variant='outlined'
              type='text'
              name='body'
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {formik.touched.body && formik.errors.body ? <Typography color='red'>{formik.errors.body}</Typography> : null}
            <TextField 
              sx={{ mt: 3 }}
              id='price'
              label='Price' 
              variant='outlined'
              type='number'
              name='price'
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {formik.touched.price && formik.errors.price ? <Typography color='red'>{formik.errors.price}</Typography> : null}
            <Button type='submit' sx={{ mt: 3 }} variant='contained'>Add</Button>
          </Box>
        </form>
    </Container>
    </ThemeProvider>
  )
}

export default AddFlat