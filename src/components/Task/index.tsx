import { Container, TasksStatusArea, TitleStatus } from "./style";

import taskIcon from "../../assets/task.svg";
import timeIcon from "../../assets/time.svg";
import doneIcon from "../../assets/done.svg";
import taskeditImg from "../../assets/taskedit.svg";
import {TaskMap} from './taskMap'
import { useTodo } from "../../contexts/TodoContext";



export function Task() {
  const {listTodo, removeTodo} = useTodo()
  
  
  return (
    
    <Container>
        <TasksStatusArea>
        <TitleStatus>
        <img src={taskIcon} alt="Task" />
        <h1>To Do</h1>
      </TitleStatus>
      {listTodo.map((data, index)=>{
        if(data.status === "newtask"){
          return <TaskMap key={index} event={()=> removeTodo(index)} indice={index} data={data}/>
        }
            })}  
      </TasksStatusArea>

      <TasksStatusArea>
      <TitleStatus>
        <img src={timeIcon} alt="Progress" />
        <h1>In Progress</h1>
      </TitleStatus>
      {listTodo.map((data, index)=>{
        if(data.status === "inprogress"){
            return <TaskMap  key={index} event={()=> removeTodo(index)} indice={index} data={data}/>
        }
            })}
      </TasksStatusArea>

      <TasksStatusArea>
      <TitleStatus>
        <img src={doneIcon} alt="Done" />
        <h1>Done Today</h1>
      </TitleStatus>
      {listTodo.map((data, index)=>{
        if(data.status === "donetoday"){
          return <TaskMap  key={index} event={()=> removeTodo(index)} indice={index} data={data}/>
        } 
            })}
      </TasksStatusArea>
      
      
    </Container>
  );

  
}
