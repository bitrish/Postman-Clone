import React from "react";
import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Typography } from "@mui/material";
import AddRow from "./AddRow";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tablecell: {
    border: "1px solid rgba(224,224,224,1)",
    borderCollapse: "collapse",
    padding: ["7px 5px", "!important"],
  },
});
const CreateTable = ({ text,data,setData }) => {
  const classes = useStyles();
  const [rows,Addrows]=useState([0])
  return (
    <div>
      <Box>
        <Typography mt={2}>{text}</Typography>
        <Table
          sx={{ minWidth: "100%", border: "1px solid rgba(224,224,224,1)" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tablecell}></TableCell>
              <TableCell className={classes.tablecell}>Key</TableCell>
              <TableCell className={classes.tablecell}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {
             rows.map((row,index)=>(
               <AddRow Addrows={Addrows} rowId={index} key={index} data={data} setData={setData}/>
             ))
           }
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default CreateTable;
