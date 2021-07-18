import React from "react";
import {Modal ,Button} from 'react-bootstrap'
import Content_Of_Modal from '../ContentOfModal/Content'
import './Modal.css' 
interface IModal{
    show:boolean
    setShow:Function
    handleclose:Function
    handleShow:Function
      AddTask:Object
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
}
const Example:React.FC<IModal>=({show,setShow,handleclose,handleShow,AddTask,setAddTask,
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
         New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Content_Of_Modal 
         AddTask={AddTask} setAddTask={setAddTask}
         TemporaryTaskName={TemporaryTaskName} setTemporaryTaskName={setTemporaryTaskName}
         TemporaryPriority={TemporaryPriority} setTemporaryPriority={setTemporaryPriority}
         TemporaryStatus={TemporaryStatus} setTemporaryStatus={setTemporaryStatus}
         TemporaryDeadline={TemporaryDeadline} setTemporaryDeadline={setTemporaryDeadline}
         TemporaryTaskDetail={TemporaryTaskDetail} setTemporaryTaskDetail={setTemporaryTaskDetail}
         setShow={setShow}
   />
        </Modal.Body>
      </Modal>
        
      </>
    );
  }

export default Example