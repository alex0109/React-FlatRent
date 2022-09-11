import React from 'react'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { setAuthUserAction } from './../../redux/authReducer'

import { Box, Button, Container, TextField, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CreateAcc = () => {

  const dispatch = useDispatch()
  const redirect = useNavigate();

  const handleChangePassword = (prop) => (event) => {
    formik.setFieldValue('password', event.target.value );
  };

  const handleClickShowPassword = () => {
    formik.setFieldValue('showPassword', !formik.values.showPassword);
  };

  const handleChangeConfirmPassword = (prop) => (event) => {
    formik.setFieldValue('confirmPass', event.target.value );
  };

  const handleClickShowConfirmPassword = () => {
    formik.setFieldValue('showPassConfirm', !formik.values.showPassConfirm);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      login: '',
      password: '',
      confirmPass: '',
      showPassword: false,
      showPassConfirm: false
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      login: Yup.string().email().required("Required"),
      password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
      confirmPass: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required")
    }),
    onSubmit: (values) => {
      try {
        const userID = Date.now()
        dispatch(setAuthUserAction(userID, values.login, values.username, values.password))
        redirect('/')
      } catch (error) {
        console.log(error);
      }
    }
  })

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant='h4' textAlign='center' sx={{textTransform: 'uppercase'}}>Registration</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', maxWidth: '1024px', mt: 3, mb: 3}}>
            <TextField
            id="username" 
            label="Username" 
            type='text' 
            name='username'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="outlined" />
            {formik.touched.username && formik.errors.username ? <Typography color='red'>{formik.errors.username}</Typography> : null}
            <TextField sx={{ mt: 3 }} 
            id="login" 
            label="Login" 
            type='email' 
            name='login'
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            <FormControl sx= {{ mt: 3 }} variant="outlined">
              <InputLabel htmlFor="confirmPass">Confirm</InputLabel>
              <OutlinedInput
                id="confirmPass"
                type={formik.values.showPassConfirm ? 'text' : 'password'}
                name='confirmPass'
                value={formik.values.confirmPass}
                onChange={handleChangeConfirmPassword('password')}
                onBlur={formik.handleBlur}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {formik.values.showPassConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {formik.touched.confirmPass && formik.errors.confirmPass ? <Typography color='red'>{formik.errors.confirmPass}</Typography> : null}
            <Button sx={{mb: 3, mt: 3}} type='submit' variant="contained">Create</Button>
            <Link to='../login'>
              <Typography sx={{textAlign: 'center'}}>Log In</Typography>
            </Link>
          </Box>
        </Box>
      </form>
    </Container>
  )
}

export default CreateAcc