import React, { useContext } from "react";
import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { DataContext } from "./context/DataProvider";

const usestyles = makeStyles({
  dropdown: {
    width: 120,
    height: 40,
  },
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textfeild: {
    width: "65%",
    backgroundColor: "#F6F6F6",
  },
  button: {
    width: 120,
  },
});
const Form = ({onSendClick}) => {
  const classes = usestyles();
  const { formData, setFormData } = useContext(DataContext);
  const handleSelect = (e) => {
    setFormData({ ...formData, type: e.target.value });
    console.log(formData);
  };

  const handleText = (e) => {
    setFormData({ ...formData, url: e.target.value });
    console.log(formData);
  };

  return (
    <Box className={classes.component}>
      <Select
        label="GET"
        className={classes.dropdown}
        value={formData.type}
        onChange={(e) => handleSelect(e)}
      >
        <MenuItem value={"GET"}>GET</MenuItem>
        <MenuItem value={"POST"}>POST</MenuItem>
      </Select>
      <TextField
        className={classes.textfeild}
        size="small"
        id="outlined-basic"
        variant="outlined"
        placeholder="Enter your URL"
        value={formData.url}
        onChange={(e) => handleText(e)}
      />
      <Button onClick={()=>onSendClick()}className={classes.button} variant="contained" >
        Send
      </Button>
    </Box>
  );
};

export default Form;
