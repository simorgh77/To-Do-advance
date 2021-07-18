import React from "react";
import {Nav,Button,Navbar,FormControl,Form,InputGroup} from "react-bootstrap";
import { BiListCheck } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import My_modal from "../Modal/My_modal";
import {useState} from 'react'
import { HiOutlinePencilAlt, HiOutlineFilter } from "react-icons/hi";
interface ITask{
  TaskName:string
  Priority:string
  Status:string
  Deadline:Date
  TaskDetail:string
  id:Date
}
interface INav{
  AddTask:ITask[]
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
  Search:string
  setSearch:Function
  sliderState:boolean
setsliderState:Function
}
const  Nav_bar:React.FC<INav>=({AddTask,setAddTask,
  TemporaryTaskName,
  setTemporaryTaskName,
  TemporaryPriority,
  setTemporaryPriority,
  TemporaryStatus,
  setTemporaryStatus,
  TemporaryDeadline,
  setTemporaryDeadline,
  TemporaryTaskDetail,
  setTemporaryTaskDetail,
  Search,
  setSearch,
  sliderState,
  setsliderState})=> {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Show, setShow] = useState(false);
  return (
    <>
      <Navbar id='nav' variant="dark" >
        <Navbar.Brand href="#home">
          <BiListCheck style={{ fontSize: "40px" }} />
          My To-Do Tasks Search
        </Navbar.Brand>
        <Form  className="w-100   d-flex align-items-center  ">
          <InputGroup className="  h-100 d-flex justify-content-end align-items-center">
            
            {
              <InputGroup className="w-50 ">
                          
              <FormControl
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={e=>setSearch(e.target.value)}
              />
           
             
              <BsSearch
                style={{
                  color: "gray",
                  fontSize: "2rem",
                  padding: "5px 0",
                  position: "relative",
                  right: "2.2rem",
                  top: "3px",
                }}
              />
              <HiOutlineFilter
                style={{
                  fontSize: "1.8rem",
                  color: "white",
                  cursor: "pointer",
                }}
               className='mt-1'
               onClick={()=>setsliderState(true)}
              />
              <HiOutlinePencilAlt
              
                style={{
                  fontSize: "1.8rem",
                  color: "white",
                  cursor: "pointer",
                }}
                className="ml-4 mt-1"
                onClick={handleShow}
              />
            </InputGroup>
             }
            <InputGroup.Append></InputGroup.Append>
          </InputGroup>
        </Form>

        <My_modal show={Show} 
        setShow={setShow} 
        handleclose={handleClose}
        handleShow={handleShow}
        AddTask={AddTask} setAddTask={setAddTask}
        TemporaryTaskName={TemporaryTaskName} setTemporaryTaskName={setTemporaryTaskName}
        TemporaryPriority={TemporaryPriority} setTemporaryPriority={setTemporaryPriority}
        TemporaryStatus={TemporaryStatus} setTemporaryStatus={setTemporaryStatus}
        TemporaryDeadline={TemporaryDeadline} setTemporaryDeadline={setTemporaryDeadline}
        TemporaryTaskDetail={TemporaryTaskDetail} setTemporaryTaskDetail={setTemporaryTaskDetail}
        />
      </Navbar>
    </>
  );
}
export default Nav_bar