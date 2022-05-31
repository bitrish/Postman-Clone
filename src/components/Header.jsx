import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    logo:{
        width:200,
        margin:"8px"
    }
})
const Header = () => {

  const classes=useStyles();
  const logo='https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png';
  return (
    <img src={logo} className={classes.logo}/>
  )
}

export default Header