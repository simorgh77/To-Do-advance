import React from "react";
import {Modal ,Button} from 'react-bootstrap'
import Pencilcontent from '../ContentOfModal/PencilContent'
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
    Editshow:boolean
    setEditShow:Function
    handleclose:Function
    handleShow:Function
    AddTask:ITask[]
    setAddTask:Function
    EditId:Date | undefined
    setEditId:Function
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
const Example:React.FC<IModal>=({Editshow,setEditShow,handleclose,handleShow,
    AddTask,setAddTask,EditId,setEditId,TemporaryTaskName,
    setTemporaryTaskName,
    TemporaryPriority,
    setTemporaryPriority,
    TemporaryStatus,
    setTemporaryStatus,
    TemporaryDeadline,
    setTemporaryDeadline,
    TemporaryTaskDetail,
    setTemporaryTaskDetail
})=> {
    return (

        <>
        <Modal
        size="sm"
        show={Editshow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
         View Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        < Pencilcontent
         AddTask={AddTask} setAddTask={setAddTask}
         EditId={EditId}
         setEditId={setEditId}
         TemporaryTaskName={TemporaryTaskName}
            setTemporaryTaskName={setTemporaryTaskName}
            TemporaryPriority={TemporaryPriority}
            setTemporaryPriority={setTemporaryPriority}
            TemporaryStatus={TemporaryStatus}
            setTemporaryStatus={setTemporaryStatus}
            TemporaryDeadline={TemporaryDeadline}
            setTemporaryDeadline={setTemporaryDeadline}
            TemporaryTaskDetail={TemporaryTaskDetail}
            setTemporaryTaskDetail={setTemporaryTaskDetail}
            setEditShow={setEditShow}
   />
        </Modal.Body>
      </Modal>
        
      </>
    );
  }

export default Example