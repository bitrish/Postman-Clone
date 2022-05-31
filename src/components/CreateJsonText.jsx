import React from 'react'
import { useContext } from 'react'
import { Typography, TextareaAutosize } from '@mui/material'
import { DataContext } from './context/DataProvider'

const textareaStyle = {
    width: '100%',
    padding: 10,
    background: 'url(http://i.imgur.com/2cOaJ.png)',
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 13,
    borderColor: '#ccc'
}
const CreateJsonText = () => {
    const {setJsonText,jsonText}=useContext(DataContext)
    const onValueChange=(e)=>{
        setJsonText(e.target.value)
        console.log(jsonText)
    }
    return (
        <>
            <Typography mt={2} mb={2}>JSON</Typography>
            <TextareaAutosize  value={jsonText}onChange={(e)=>onValueChange(e)}minRows={3} maxRows={5} style={textareaStyle}></TextareaAutosize>
        </>
    )
}

export default CreateJsonText