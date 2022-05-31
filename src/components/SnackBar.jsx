import React from 'react'
import { Snackbar } from '@mui/material'
const SnackBar = ({error,setError,ErrorMessage}) => {

    const handleClose=()=>{
        setError(false)
    }
    console.log(ErrorMessage)
    return (
        
        <Snackbar
            open={error}
            autoHideDuration={4000}
            onClose={handleClose}
            message={ErrorMessage}
        />
    )
}

export default SnackBar