import React from 'react'
import {Form} from "react-bootstrap"
import "./MyPagination.css"
interface Ipagination{
    NumberOfObject:number | undefined
setNumberOfObject:Function
}
const MyPagination:React.FC<Ipagination>=({NumberOfObject,setNumberOfObject})=> {
    return (
        <div className='w-25 d-flex pagination '>
           <div className='pt-2 mt-1'>Rows per pages:</div> 
         <Form.Control as="select"  className='w-25 ml-3 h-25 form' 
       onChange={(e)=>setNumberOfObject(e.target.value)} >
    <option value={5}>5</option>
    <option  value={10}>10</option>
    <option value={15}>15</option>
    <option selected value={1000}>All</option>
  </Form.Control>  
        </div>
    )
}

export default MyPagination
