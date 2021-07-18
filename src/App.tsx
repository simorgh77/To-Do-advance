import React from "react";
import {useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emptyTask from '../src/emptyTask.svg'
import Nav_bar from "./components/nav_bar/nav_bar";
import "./App.css";
import My_table from "./components/MyTable/My_table";
import MyPagination from "./components/MyPagination/MyPagination"
interface ITask{
  TaskName:string
  Priority:string
  Status:string
  Deadline:Date
  TaskDetail:string
  id:Date
}
interface ISideBar{
  Priority:string
  Status:string
  Deadline:string
}

export default function App() {
  AOS.init();
  const [AddTask,setAddTask]=useState<ITask[]>([])
  const [TemporaryTaskName,setTemporaryTaskName]=useState('')
  const [TemporaryPriority,setTemporaryPriority]=useState('')
  const [TemporaryStatus,setTemporaryStatus]=useState('')
  const [TemporaryDeadline,setTemporaryDeadline]=useState(new Date())
  const [TemporaryTaskDetail,setTemporaryTaskDetail]=useState('')
  const [Search, setSearch] = useState('');
  const [NumberOfObject,setNumberOfObject]=useState<number>(1000)
  const [sliderState,setsliderState]= useState(false)
  return (
    < >
 <Nav_bar 
      AddTask={AddTask} setAddTask={setAddTask}
      TemporaryTaskName={TemporaryTaskName} setTemporaryTaskName={setTemporaryTaskName}
      TemporaryPriority={TemporaryPriority} setTemporaryPriority={setTemporaryPriority}
      TemporaryStatus={TemporaryStatus} setTemporaryStatus={setTemporaryStatus}
      TemporaryDeadline={TemporaryDeadline} setTemporaryDeadline={setTemporaryDeadline}
      TemporaryTaskDetail={TemporaryTaskDetail} setTemporaryTaskDetail={setTemporaryTaskDetail}
      Search={Search} setSearch = {setSearch} sliderState={sliderState}
      setsliderState={setsliderState}
/>


{AddTask.length==0 &&
<div  className='d-flex w-100 h-100  justify-content-center pic'> 
<img src={emptyTask} width="400rem" />
</div>
}
{AddTask.length>0 && <My_table  
      AddTask={AddTask}
      setAddTask={setAddTask}
      Search={Search}
      setSearch={setSearch}
      TemporaryTaskName={TemporaryTaskName} setTemporaryTaskName={setTemporaryTaskName}
      TemporaryPriority={TemporaryPriority} setTemporaryPriority={setTemporaryPriority}
      TemporaryStatus={TemporaryStatus} setTemporaryStatus={setTemporaryStatus}
      TemporaryDeadline={TemporaryDeadline} setTemporaryDeadline={setTemporaryDeadline}
      TemporaryTaskDetail={TemporaryTaskDetail} setTemporaryTaskDetail={setTemporaryTaskDetail}
      sliderState={sliderState}
      setsliderState={setsliderState}  
      NumberOfObject={NumberOfObject}
setNumberOfObject={setNumberOfObject}
  />
} 
{AddTask.length>0 &&<MyPagination 
NumberOfObject={NumberOfObject}
setNumberOfObject={setNumberOfObject}/>

}      </>
  );
}
