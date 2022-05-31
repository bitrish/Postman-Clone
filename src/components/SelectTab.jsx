import { Tab, Tabs } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import CreateTable from "./CreateTable";
import CreateJsonText from "./CreateJsonText";
import { useContext } from "react";
import DataProvider, { DataContext } from "./context/DataProvider";

const usestyles = makeStyles({
  component: {
    marginTop: 10,
    marginLeft: 10,
  },
  tab: {
    textTransform: ["none", "!important"],
    fontSize: 18,
  },
});

const SelectTab = () => {
  const classes = usestyles();
  const [value, setValue] = useState(0);
  const {paramsData,setParamsData,headersData,setHeadersData}=useContext(DataContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.component}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: { backgroundColor: "#F26B3A", height: 5, bottom: 2 },
        }}
        textColor="none"
      >
        <Tab label="Params" className={classes.tab} />
        <Tab label="Headers" className={classes.tab} />
        <Tab label="Body" className={classes.tab} />
      </Tabs>
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
       <CreateTable text="Query Params" data={paramsData} setData={setParamsData}/>
      </Box>

      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable text="Headers" data={headersData} setData={setHeadersData}/>
      </Box>

      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
       <CreateJsonText/>
      </Box>
    </Box>
  );
};

export default SelectTab;
