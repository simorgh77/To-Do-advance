import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { HiOutlineArrowUp,HiOutlineArrowDown, HiEye, HiPencil, HiTrash } from "react-icons/hi";
import colors from "../../Colors/Colors";
import EyesModal from "../Modal/EyesModal";
import PencilModal from '../Modal/PencilModal'
import SlideBar from "../SlideBar/SlideBar"
import SetToTable from '../setToTable/SetToTable'
import MyPagination from "../MyPagination/MyPagination"
import "./MyTable.css"
interface ITask {
  TaskName: string;
  Priority: string;
  Status: string;
  Deadline: Date;
  TaskDetail: string;
  id: Date;
}
interface ITable{
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
NumberOfObject:number
setNumberOfObject:Function
}

const My_table: React.FC<ITable> = ({
  AddTask,
  setAddTask,
  Search,
  setSearch,
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
  sliderState,
setsliderState,
NumberOfObject,
setNumberOfObject

}) => {
  const [FilterPriority, setFilterPriority] = useState('');
  const [FilterStatus, setFilterStatus] = useState('');
  const [FilterDeadline, setFilterDeadline] = useState('');

  let [over,setOver]=useState(false);
  const [sortPriority, setsortPriority] = useState<number>(0);
  const [sortstatus, setsortstatus] = useState<number>(0);
  const [sortDeadline,setsortDeadline] = useState<number>(0);

  function handeleDelete(id: Date) {
    setAddTask(
      AddTask.filter((item) => {
        return item.id != id;
      })
    );
  }
  const handleClose = () => setShow(false);
  const handleShow = (id: Date) => {
    setId(id);
    return setShow(true);
  };
  const [Show, setShow] = useState(false);
  const [Id, setId] = useState<Date>();
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = (id: Date) => {
    setEditId(id);
    return setEditShow(true);
  };
  const [EditShow, setEditShow] = useState(false);
  const [EditId, setEditId] = useState<Date>();
  function TonumberPriority(item:string):number{
    if(item=='high')
    return 2;

    else if(item=="medium" )
    return 1;

    else if(item=='low' ){
      return 0
    }
    else{
      return -1
    }
  }
  function TonumberStatus(item:string):number{
    if( item=='To do')
    return 2;

    else if( item=='Doing')
    return 1;

    else if(item=='Done'){
      return 0
    }
    else{
      return -1
    }
  }
  function sort_Priority() {
    if(sortPriority==0){
     setAddTask(AddTask.sort((a,b)=>TonumberPriority(a.Priority)-TonumberPriority(b.Priority)))
    }
    if(sortPriority==1){
     setAddTask(AddTask.sort((a,b)=>TonumberPriority(b.Priority)-TonumberPriority(a.Priority)))
    }
    if(sortPriority==2){
     setAddTask(AddTask.sort((a,b)=>b.id.valueOf()-a.id.valueOf()))
    }
  }


  function sort_Status() {
    if(sortstatus==0){
     setAddTask(AddTask.sort((a,b)=>TonumberStatus(a.Status)-TonumberStatus(b.Status)))
    }
    if(sortstatus==1){
     setAddTask(AddTask.sort((a,b)=>TonumberStatus(b.Status)-TonumberStatus(a.Status)))
    }
    if(sortstatus==2){
     setAddTask(AddTask.sort((a,b)=>b.id.valueOf()-a.id.valueOf()))
    }
  }
  function sort_Deadline() {
    if(sortDeadline==0){
      setAddTask(AddTask.sort((a,b)=>b.Deadline.getDate()-a.Deadline.getDate()))
    }
    if(sortDeadline==1){
      setAddTask(AddTask.sort((a,b)=>b.Deadline.getDate()-a.Deadline.getDate()))
    }
    if(sortDeadline==2){
     setAddTask(AddTask.sort((a,b)=>a.id.valueOf()-b.id.valueOf()))
    }
  }
  return (
    <>
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>Task</th>
            <th style={{cursor:'pointer'}}
        onClick={sortPriority==0?()=>{setsortPriority(1) ; sort_Priority();} :
          sortPriority==1?()=>{setsortPriority(2) ; sort_Priority();}:()=>{setsortPriority(0); sort_Priority();}}
            >Priority
          < HiOutlineArrowUp className={sortPriority==1?"ArrowDown":sortPriority==2?"ArrowUp":'41'}/>
</th>

            <th style={{cursor:'pointer'}}   onClick={sortstatus==0?()=>{setsortstatus(1);sort_Status()}:
          sortstatus==1?()=>{setsortstatus(2) ; ;sort_Status()}:()=>{setsortstatus(0);sort_Status()}}>Status


 < HiOutlineArrowUp className={sortstatus==1?"ArrowDown":sortstatus==2?"ArrowUp":'41'}/>
  
             </th>
            <th style={{cursor:'pointer'}} onClick={sortDeadline==0?()=>{setsortDeadline(1);sort_Deadline()}:
          sortDeadline==1?()=>{setsortDeadline(2) ;sort_Deadline()}:()=>{setsortDeadline(0);sort_Deadline()}}>
              Deadline
              < HiOutlineArrowUp className={sortDeadline==1?"ArrowDown":sortDeadline==2?"ArrowUp":'41'}/>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
{/* ************************************************************** */}
  
{ <SetToTable   AddTask={AddTask} setAddTask={setAddTask}
        Search={Search}
        setSearch={setSearch} handleShow={handleShow}
        handleEditShow={handleEditShow}
        handeleDelete={handeleDelete}
        sliderState={sliderState}
        setsliderState={setsliderState} 
        FilterPriority={FilterPriority}
        FilterStatus={FilterStatus}
        FilterDeadline={FilterDeadline}
        NumberOfObject={NumberOfObject}
        setNumberOfObject={setNumberOfObject}/>
  }



{/* ************************************************************** */}
        
          {Id &&<EyesModal
            show={Show}
            setShow={setShow}
            handleclose={handleClose}
            handleShow={handleShow}
            AddTask={AddTask}
            setAddTask={setAddTask}
            Id={Id}
            setId={setId}
            />
          }
          {EditId&&
<PencilModal
            Editshow={EditShow}
            setEditShow={setEditShow}
            handleclose={handleClose}
            handleShow={handleShow}
            AddTask={AddTask}
            setAddTask={setAddTask}
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
            />
}
       
        </tbody>
       
           
   {sliderState && <SlideBar sliderState={sliderState}
setsliderState ={setsliderState }
FilterPriority={FilterPriority}
setFilterPriority={setFilterPriority}
FilterStatus={FilterStatus}
setFilterStatus={setFilterStatus}
FilterDeadline={FilterDeadline}
setFilterDeadline={setFilterDeadline}
AddTask={AddTask}
setAddTask={setAddTask}
/>
}
      </Table>
    </>
  );
};

export default My_table;
