import {
  Container,
  Contains,
  DisplayIcon,
  DisplayTask,
  DisplayTitle,
  DisplayTodo,
  EventArea,
  EventAreaContains,
  HeaderTask,
  InprogressArea,
  Paragraph,
  TaskDate,
  TaskDescription,
  TaskInprogress,
  TaskNewTask,
  TaskTitle,
} from "./style";

import taskPinkImg from "../../assets/taskpink.svg";
import timeImg from "../../assets/time.svg";
import doneImg from "../../assets/done.svg";
import { useTodo } from "../../contexts/TodoContext";

export function Dashboard() {
  const { listTodo } = useTodo();

  const inprogress = listTodo.filter(
    (response) => response.status === "inprogress"
  ).length;
  const done = listTodo.filter(
    (response) => response.status === "donetoday"
  ).length;

  return (
    <Container>
      <HeaderTask>
        <DisplayTodo color="var(--pink)">
          <DisplayIcon src={taskPinkImg} />
          <DisplayTitle>To Do</DisplayTitle>
          <DisplayTask>{listTodo.length}</DisplayTask>
        </DisplayTodo>
        <DisplayTodo color="var(--yellow)">
          <DisplayIcon src={timeImg} />
          <DisplayTitle>Inprogress</DisplayTitle>
          <DisplayTask>{inprogress}</DisplayTask>
        </DisplayTodo>
        <DisplayTodo color="var(--green)">
          <DisplayIcon src={doneImg} />
          <DisplayTitle>Done</DisplayTitle>
          <DisplayTask>{done}</DisplayTask>
        </DisplayTodo>
      </HeaderTask>
      <Contains>
        <InprogressArea>
          <Paragraph>Improgress</Paragraph>
          
          {listTodo.map((data, index) => {
            if (data.status === "inprogress") {
              return (
                <TaskInprogress key={index}>
                  <TaskTitle>{data.title}</TaskTitle>
                  <TaskDescription>{data.description}</TaskDescription>
                  <TaskDate>
                    {data.date} {data.responsable}
                  </TaskDate>
                </TaskInprogress>
              );
            }
          })}
        </InprogressArea>

        
        <EventArea>
          <Paragraph>Next Event</Paragraph>
          
          <EventAreaContains>
            {listTodo.map((data, index) => {
              if (data.status === "newtask") {
                return (
                  <TaskNewTask key={index}>
                    <TaskDate>
                      {data.date} As {data.hour}
                    </TaskDate>
                    <TaskTitle>{data.title}</TaskTitle>
                  </TaskNewTask>
                );
              }
            })}
          </EventAreaContains>
        </EventArea>
      </Contains>
    </Container>
  );
}
