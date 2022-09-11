import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Flat from './components/Flat/Flat';
import Main from './components/Main/Main';
import Login from './components/Auth/Login'
import NotFound from './components/NotFound/NotFound';
import CreateAcc from './components/Auth/CreateAcc';
import HeaderOne from './components/Header/HeaderOne';
import Profile from './components/Profile/Profile';
import AddFlat from './components/Profile/AddFlat';



function Root() {
  return (
    <BrowserRouter>
      <HeaderOne/>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<CreateAcc/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addflat' element={<AddFlat/>}/>
        <Route path='/flat/:ID' element={<Flat/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default Root