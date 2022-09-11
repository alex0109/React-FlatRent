import React from "react";
import { Box } from '@mui/material'
import './App.scss'
import Root from "./router";

const App = () => {
  return (
    <>
      <Box sx={{ minHeight: '100%', height: '100%' }}>
        <Root/>
      </Box>
    </>
    
  );
}

export default App;
