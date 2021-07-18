import React from "react"
import colors from "../../Colors/Colors";
import { HiOutlineArrowUp, HiEye, HiPencil, HiTrash } from "react-icons/hi";
import { ProgressBar } from "react-bootstrap";
import SlideBar from "../SlideBar/SlideBar";
interface ITask {
    TaskName: string;
    Priority: string;
    Status: string;
    Deadline: Date;
    TaskDetail: string;
    id: Date;
  }
interface IsetTable{
    AddTask:ITask[]
setAddTask:Function
Search:string
setSearch:Function
handleShow:Function
handleEditShow:Function
handeleDelete:Function
sliderState:boolean
setsliderState:Function
FilterPriority?:string
setFilterPriority?:Function
FilterStatus?:string
setFilterStatus?:Function
FilterDeadline?:string
setFilterDeadline?:Function
NumberOfObject:number
setNumberOfObject:Function

}
const SetToTable:React.FC<IsetTable>=(props)=>{



    
    function CheckFilters(){
    if(props.FilterPriority=='All'){
       let temp:ITask[]= props.AddTask
        
      let filter= CheckStatus(temp)
       
       return  filter
    }   
    if(props.FilterPriority=='high'){
        let temp:ITask[]= props.AddTask.filter((item)=>(item.Priority=='high'))
        
        let filter= CheckStatus(temp)
         
         return  filter
    }   
    if(props.FilterPriority=='low'){

        let temp:ITask[]= props.AddTask.filter((item)=>(item.Priority=='low'))
        
        let filter= CheckStatus(temp)
         
         return  filter
    }   
    if(props.FilterPriority=='medium'){
        let temp:ITask[]= props.AddTask.filter((item)=>(item.Priority=='medium'))
        
        let filter= CheckStatus(temp)
         
         return  filter
    } 
    else{
        let temp:ITask[]= props.AddTask
        
        let filter= CheckStatus(temp)
         
         return  filter
    }
}  




// *************************

function CheckStatus(item:ITask[]){
    if(props.FilterStatus=='All'){
        
    let filter=CheckDeadline(item)
       return  filter
    }   
    if(props.FilterStatus=='To do'){
      let temp:ITask[]= item.filter((item)=>(item.Status=='To do'))
        let filter=CheckDeadline(temp)
       return  filter
       
    }   
    if(props.FilterStatus=='Done'){
        let temp:ITask[]=  item.filter((item)=>(item.Status=='Done'))
        let filter=CheckDeadline(temp)
       return  filter

    }   
    if(props.FilterStatus=='Doing'){
        let temp:ITask[]= item.filter((item)=>(item.Status=='Doing'))
        let filter=CheckDeadline(temp)
       return  filter
    } 
    else{
        let filter= CheckDeadline(item)
        return filter
    }
}  


// *********************************


function CheckDeadline(item:ITask[]){
    if(props.FilterDeadline=='All'){
       return  item
    }   
    if(props.FilterDeadline=='Overdue'){
       return item.filter((item)=>(item.Deadline.getDate()<new Date().getDate()))
    }   
    if(props.FilterDeadline=='For today'){
        return item.filter((item)=>(item.Deadline.getDate()==new Date().getDate()))
    }   
    if(props.FilterDeadline=='For the future'){
        return item.filter((item)=>(item.Deadline.getDate()>new Date().getDate()))
    } 
    else{
        return item
    }
}  
  
        return(
    <>
    {
     CheckFilters()?.filter((item) =>
        item.TaskName.toLowerCase().includes(props.Search.toLowerCase())
        ).map((item,index:number) => (
                 index < props.NumberOfObject &&  <tr>
         
          <td>{item.TaskName}</td>

          {item.Priority == "low" && (
            <td>
              <span
                className="px-3 py-1 text-white"
                style={{
                  border: "None",
                  borderRadius: "18px",
                  backgroundColor: colors.Low,
                }}
                >
                {item.Priority}
              </span>{" "}
            </td>
          )}
          {item.Priority == "high" && (
            <td>
              <span
                className="px-3 py-1 text-white"
                style={{
                  border: "None",
                  borderRadius: "18px",
                  backgroundColor: colors.High,
                }}
                >
                {item.Priority}
              </span>{" "}
            </td>
          )}
          {item.Priority == "medium" && (
            <td>
              <span
                className="px-3 py-1 text-white"
                style={{
                  border: "None",
                  borderRadius: "18px",
                  backgroundColor: colors.Medium,
                }}
                >
                {item.Priority}
              </span>{" "}
            </td>
          )}

          {item.Status == "Doing" && (
            <td>
              <span
                className=" px-3 py-1 text-white"
                style={{
                  border: "None",
                  borderRadius: "18px",
                  backgroundColor: colors.Doing,
                }}
                >
                {item.Status}
              </span>
            </td>
          )}
          {item.Status == "To do" && (
            <td>
              <span
                className=" px-3 py-1 text-white"
                style={{
                  border: "None",
                  borderRadius: "18px",
                  backgroundColor: colors.ToDo,
                }}
                >
                {item.Status}
              </span>
            </td>
          )}
          {item.Status == "Done" && (
            <td>
              <span
                className=" px-3 py-1 text-white"
                style={{
                  border: "None",
                  borderRadius: "18px",
                  backgroundColor: colors.Done,
                }}
                >
                {item.Status}
              </span>
            </td>
          )}
          {item.Deadline.getDate() -new Date().getDate() >= 0 ? (
            <td>
              <span
                className=" px-3 py-1 "
                style={{
                  border: "1px solid green",
                  borderRadius: "18px",
                  backgroundColor: "transparent",
                  color: "green",
                }}
                >
                {item.Deadline.toLocaleDateString()}
              </span>
            </td>
          ) : (
            <td>
              <span
                className=" px-3 py-1 "
                style={{
                  border: "1px solid red",
                  borderRadius: "18px",
                  backgroundColor: "transparent",
                  color: "red",
                }}
                >
                {item.Deadline.toLocaleDateString()}
              </span>
            </td>
          )}
          <td>
            <HiEye
              style={{ cursor: "pointer", fill: "#757575" }}
              onClick={() => props.handleShow(item.id)}
              className='mx-2'                />
            <HiPencil style={{ cursor: "pointer", fill: "#757575" }}
             onClick={() =>props.handleEditShow(item.id)}
             className='mx-2'
             />
            <HiTrash
              style={{ cursor: "pointer", fill: "#757575" }}
              onClick={() => props.handeleDelete(item.id)}
              className='mx-2'
              />
          </td>
        </tr>
      ))}
</>

        )}
export default SetToTable