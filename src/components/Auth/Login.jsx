import React, { useState } from 'react'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { setLoginUserAction } from './../../redux/authReducer'

import { Box, Button, Container, TextField, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel, Snackbar, Alert } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {

  const dispatch = useDispatch()
  const redirect = useNavigate()
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleChangePassword = (prop) => (event) => {
    formik.setFieldValue('password', event.target.value );
  };

  const handleClickShowPassword = () => {
    formik.setFieldValue('showPassword', !formik.values.showPassword);
  };

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      showPassword: false
    },
    validationSchema: Yup.object({
      login: Yup.string().email().required("Required"),
      password: Yup.string()
      .required('No password provided.') 
      .min(8, 'Password is too short - should be 8 chars minimum.')
    }),
    onSubmit: (values) => {
      try {
        dispatch(setLoginUserAction(values.login, values.password))
        redirect('/')
      } catch (error) {
        setOpenSnackbar(true)
        formik.setFieldValue('login', '')
        formik.setFieldValue('password', '')
      }
    }
  })

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h4' textAlign='center' sx={{textTransform: 'uppercase'}}>log in</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '300px', mt: 3, mb: 3}}>
              <TextField 
              id="login" 
              label="Login" 
              type='email' 
              name='login'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.login}
              variant="outlined" />
              {formik.touched.login && formik.errors.login ? <Typography color='red'>{formik.errors.login}</Typography> : null}
              <FormControl sx= {{ mt: 3 }} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={formik.values.showPassword ? 'text' : 'password'}
                  name='password'
                  value={formik.values.password}
                  onChange={handleChangePassword('password')}
                  onBlur={formik.handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {formik.values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {formik.touched.password && formik.errors.password ? <Typography color='red'>{formik.errors.password}</Typography> : null}
              <Button sx={{mb: 3, mt: 3}} type='submit' variant="contained">LOG IN</Button>
              <Link to='../registration'>
                <Typography sx={{textAlign: 'center'}}>Create</Typography>
              </Link>
            </Box>
          </form>
      </Box>
      {openSnackbar ? 
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
            Check your login and password!
          </Alert>
        </Snackbar>
        :
        null
      }
    </Container>
  )
}

export default Login