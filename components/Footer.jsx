import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const container = {
    background:"#000",
    height:"180px",
    width:"100%",
    color:"white",
    padding:"20px",
    borderRadius:"40px 40px 0 0"
}

const mainText = {
      fontSize:"15px",
      
}


const Footer = () => {
  return (
   <footer style={container}>
        <Box>
            <Typography sx={mainText} variant="h6">Tel:</Typography>
            <Typography sx={mainText} variant="h6">Tel:</Typography>
            <Typography sx={mainText} variant="h6">Tel:</Typography>
        </Box>
   </footer>
  )
}

export default Footer