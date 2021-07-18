import React, { ChangeEvent } from 'react'
import { useState } from 'react';
import {Form,Col,Button} from 'react-bootstrap'
import DataPicker from 'react-datepicker'
import { start } from 'repl';
interface ITask {
    TaskName: string;
    Priority: string;
    Status: string;
    Deadline: Date;
    TaskDetail: string;
    id: Date;
  }
interface ITable {
    AddTask: ITask[];
    setAddTask: Function;
    Id:Date | undefined
    setId:Function
  }
  
const Content:React.FC<ITable>=({AddTask,setAddTask,Id ,setId})=> {

    return (
      <div >
        
    {
        
        AddTask.map((item)=>(

    
            
           item.id==Id&& <Form >
  <Form.Row >
    <Form.Group as={Col} controlId="form" >
      <Form.Label></Form.Label>
    </Form.Group>
      <Form.Control type="text" value={item.TaskName} />

    <Form.Group as={Col} controlId="formGridState">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Priority</Form.Label>
      <Form.Control as="select"  >
        <option value='0' selected>{item.Priority}</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Status</Form.Label>
      <Form.Control as="select" >
        <option value='0' selected>{item.Status}</option>
       
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState" >
 
    <Form.Control as="text" className='datepicker' >
    {item.Deadline.toLocaleDateString()}
    </Form.Control>
    </Form.Group>
  </Form.Row>
      <Form.Group controlId="exampleForm.ControlTextarea1">
          
    <Form.Control as="textarea" rows={3} value={item.TaskDetail}
   />
  </Form.Group>
    </Form.Group>
  </Form.Row>

</Form>

   ))
}
        </div>
    )
}

export default Content