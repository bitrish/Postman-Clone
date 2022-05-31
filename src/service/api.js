import axios from "axios";
import {getHeadersandParameters} from '../utils/common-utils'

export const getData=async(formData,paramsData,headersData,jsonText)=>{

    const apiType=formData.type.toLowerCase();
    const apiUrl=formData.url;
    const apiHeaders=getHeadersandParameters(headersData)
    const apiParams=getHeadersandParameters(paramsData)

    try{
        return await axios({
            method:apiType,
            url:apiUrl,
            body:jsonText,
            headers:apiHeaders,
            params:apiParams
        })
    }
    catch(error){
        console.log('Error while getting Data',error)
        return 'error';
    }
}