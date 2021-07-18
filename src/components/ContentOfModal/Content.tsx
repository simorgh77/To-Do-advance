import React from 'react'
import { useState } from 'react';
import DataPicker from 'react-datepicker'
import {Form,Col,Button} from 'react-bootstrap'
import { render } from "react-dom";
import './style.css'

interface IContent{
  AddTask:any
  setAddTask:Function
  TemporaryTaskName :string
  setTemporaryTaskName:Function
  TemporaryPriority:string
   setTemporaryPriority:Function
  TemporaryStatus:string
   setTemporaryStatus:Function
  TemporaryDeadline :Date
  setTemporaryDeadline :Function
  TemporaryTaskDetail:string
  setTemporaryTaskDetail:Function
  setShow:Function
}

const Content:React.FC<IContent>=({AddTask,setAddTask,
  TemporaryTaskName,
  setTemporaryTaskName,
  TemporaryPriority,
  setTemporaryPriority,
  TemporaryStatus,
  setTemporaryStatus,
  TemporaryDeadline,
  setTemporaryDeadline,
  TemporaryTaskDetail,
  setTemporaryTaskDetail,setShow})=> {



    const  NewTask=(e:React.FormEvent)=> {
    e.preventDefault()
    setAddTask([...AddTask,{
    TaskName:TemporaryTaskName,
    Priority:TemporaryPriority,
    Status:TemporaryStatus,
    Deadline:TemporaryDeadline,
    TaskDetail:TemporaryTaskDetail,
    id:Date.now()
  }])
  setShow(false)
    }
    function submitExample({start}:any ) {
      console.log("value ", start);
    }
    return (

      <div >
            <Form >
  <Form.Row >
    <Form.Group as={Col} controlId="form" >
      <Form.Label></Form.Label>
    </Form.Group>
      <Form.Control type="text" placeholder="Task Name" onChange={(e)=>setTemporaryTaskName(e.target.value)} />

    <Form.Group as={Col} controlId="formGridState">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Priority</Form.Label>
      <Form.Control as="select"  onChange={(e)=>setTemporaryPriority(e.target.value)}>
        <option value='0'>Choose</option>
        <option value='high'>high</option>
        <option value='medium'>medium</option>
        <option value='low'>low</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Status</Form.Label>
      <Form.Control as="select"  onChange={(e)=>setTemporaryStatus(e.target.value)}>
        <option value='0'>Choose</option>
        <option value='To do'>To do</option>
        <option value='Doing'>Doing</option>
        <option value='Done'>Done</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState" >
     Deadline  
      { <DataPicker selected={TemporaryDeadline} 
      onChange={(date) => setTemporaryDeadline(date)} className='data_picker'/> 
    }
    </Form.Group>
  </Form.Row>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} placeholder='Task Details (Optional)' 
    onChange={(e)=>setTemporaryTaskDetail(e.target.value)}/>
  </Form.Group>
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit" className='w-100' onClick={NewTask}>
    تایید
  </Button>
</Form>
        </div>
    )
}

export default Content