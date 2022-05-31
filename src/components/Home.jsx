import React from "react";
import Header from "./Header";
import Form from "./Form";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SelectTab from "./SelectTab";
import CreateTable from "./CreateTable";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";
import { checkParams } from "../utils/common-utils";
import SnackBar from "./SnackBar";
import { useState } from "react";
import { getData } from "../service/api";
const usestyles = makeStyles({
  component: {
    width: "60%",
    margin: "20px auto"
  },
});

const Home = () => {
  const classes = usestyles();
  const [error, setError] = useState(false)
  const [ErrorMessage, setErrorMessage] = useState('');
  const [ErrorResponse, setErrorResponse] = useState(false)
  const [apiResponse, setapiResponse] = useState({})

  const { formData, paramsData, headersData, jsonText } = useContext(DataContext)
  const onSendClick = async () => {

    if (!checkParams(formData, paramsData, headersData, jsonText, setErrorMessage)) {
      setError(true);
      return false;
    }
    const response = await getData(formData, paramsData, headersData, jsonText);
    if (response == 'error') {
      setErrorResponse(true);
    }
    else {
      setErrorResponse(false);
      setapiResponse(response.data);
    }
  }
  return (
    <>
      <Header />
      <Box className={classes.component}>
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {ErrorResponse? <ErrorScreen/>:<Response data={apiResponse}/>}
        {error && <SnackBar error={error} setError={setError} ErrorMessage={ErrorMessage} />}
      </Box>
    </>
  );
};

export default Home;
