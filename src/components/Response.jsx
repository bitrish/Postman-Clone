import React from "react";
import { Typography, TextareaAutosize } from "@mui/material";
const textareaStyle = {
    width: "100%",
    padding: 10,
    background: "url(http://i.imgur.com/2cOaJ.png)",
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    paddingLeft: 35,
    paddingTop: 13,
    borderColor: "#ccc",
};

const Response = ({data}) => {
    let resObj=data;
    let readableobj='{\n';
    for(let key in resObj)
    {
        readableobj+='\t';
        readableobj+=(typeof resObj[key]==='string')? `${key}:"${resObj[key]}"`: `${key}:${resObj[key]}`
        if(Object.keys(resObj).pop()!==key.toString())
        {
            readableobj+=',\n';
        }
    }
    readableobj+='\n}';

    return (
        <>
            <Typography mt={2} mb={2}>
                Response
            </Typography>
            <TextareaAutosize
                minRows={3}
                maxRows={5}
                disabled="disabled"
                style={textareaStyle}
                value={readableobj}
            ></TextareaAutosize>
        </>
    );
};

export default Response;
