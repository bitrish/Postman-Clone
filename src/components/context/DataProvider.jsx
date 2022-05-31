import React,{createContext, useState} from 'react'

export const DataContext=createContext(null);


const DataProvider = ({children}) => {
    const [formData,setFormData]=useState({url:'',type:'POST'})
    const [paramsData,setParamsData]=useState([]);
    const [headersData,setHeadersData]=useState([]);
    const [jsonText,setJsonText]=useState('');
  return (
      <DataContext.Provider value={{
          formData,
          setFormData,
          paramsData,
          setParamsData,
          headersData,
          setHeadersData,
          jsonText,
          setJsonText
      }}>
          {children}
      </DataContext.Provider>
  )
}

export default DataProvider