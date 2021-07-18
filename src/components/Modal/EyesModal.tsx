import React from "react";
import {Modal ,Button} from 'react-bootstrap'
import  EyesContent from '../ContentOfModal/EyesContent'
import './Modal.css' 
interface ITask {
    TaskName: string;
    Priority: string;
    Status: string;
    Deadline: Date;
    TaskDetail: string;
    id: Date;
  }
interface IModal{
    show:boolean
    setShow:Function
    handleclose:Function
    handleShow:Function
    AddTask:ITask[]
    setAddTask:Function
    Id:Date | undefined
    setId:Function
}
const Example:React.FC<IModal>=({show,setShow,handleclose,handleShow,
    AddTask,setAddTask,Id,setId
})=> {
    return (

        <>
        <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
         View Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <EyesContent 
         AddTask={AddTask} setAddTask={setAddTask}
         Id={Id}
         setId={setId}
   />
        </Modal.Body>
      </Modal>
        
      </>
    );
  }

export default Example