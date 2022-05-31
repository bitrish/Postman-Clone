import { Box, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles=makeStyles({
    error:{
        width:'80%',
        height:'auto',
        margin:'auto',
        objectPosition:'center 0%'
    }
})
const ErrorScreen = () => {
    const classes=useStyles();
    const logo='https://i.stack.imgur.com/01tZQ.png';
  return (
   <Box>
        <Typography mt={2} mb={2}>Response</Typography>
        <Box style={{display:"flex",justifyContent:'center'}}>
            <img src={logo} className={classes.logo}/>
        </Box>
   </Box>
  )
}

export default ErrorScreen