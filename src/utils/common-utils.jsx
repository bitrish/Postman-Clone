const checkValidJson = (text) => {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
    }else{
        return false;
    }
}

export const checkParams=(formData,paramsData,headersData,jsonText,setErrorMessage)=>{
   
    if(!formData.url){
        setErrorMessage('Request URL is missing')
        return false
    }
    if(!checkValidJson(jsonText))
   {
    setErrorMessage('Text is not valid Json')
    return false;

   }

    return true;
}

export const getHeadersandParameters=(objArr)=>{
      let obj={};
      objArr.forEach((data)=>{
          if(data.hasOwnProperty('check')&&data.check==true)
          {
              obj={...obj,[data.key]:data.value}
          }
      })
      return obj;
}
