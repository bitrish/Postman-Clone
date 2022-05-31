import { TableCell, TableRow, Checkbox, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import React from "react";
import { rootShouldForwardProp } from "@mui/material/styles/styled";
const useStyles = makeStyles({
  tablecell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
  checkbox: {
    padding: ["2px 4px", "!important"],
  },
  Textfield:{
      width:'100%'
  }
});
const AddRow = ({Addrows,rowId,data,setData}) => {
  const classes = useStyles();
  const [checkbox,setcheckbox]=useState(false);

  const handleChange=(e)=>{
    let result=data.filter(entry=>entry.id===Number(e.target.name))[0];
     if(!checkbox)
     {
       Addrows(oldArr=>[...oldArr,rowId])
       setcheckbox(true)
       result={...result,id:rowId,check:true}
     }
     else
     {
       setcheckbox(false);
       result={...result,id:rowId,check:false}
     }
     let index=data.findIndex(value=>value.id===Number(e.target.name))
    if(index==-1)
    {
      setData(oldArr=>[...oldArr,result])
    }else{
      const newArray=Object.assign([...data],{[index]:result})
      setData(newArray)
    }
    console.log(data)
  }
  const onTextChange=(e)=>{
    let result=data.filter(entry=>entry.id===rowId)[0];
    result={...result,id:rowId,[e.target.name]:e.target.value}
    let index=data.findIndex(value=>value.id===rowId)
    if(index==-1)
    {
      setData(oldArr=>[...oldArr,result])
    }else{
      const newArray=Object.assign([...data],{[index]:result})
      setData(newArray)
    }
    console.log(data)
  }

  return (
    <TableRow>
      <TableCell className={classes.tablecell}>
        <Checkbox name={rowId}checked={checkbox} className={classes.checkbox} size="large"  onChange={(e)=>handleChange(e)}/>
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField name="key"onChange={(e)=>onTextChange(e)}className={classes.Textfield} inputProps={{style:{height:30,padding:'0 5px'}}}/>
      </TableCell>
      <TableCell className={classes.tablecell}>
        <TextField name="value" onChange={(e)=>onTextChange(e)}className={classes.Textfield} inputProps={{style:{height:30,padding:'0 5px'}}}/>
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
