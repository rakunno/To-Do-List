import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { Container } from "./style";
import { useTodo } from '../../contexts/TodoContext';



interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Tasks {
  title: string;
  description: string;
  date: string;
  hour: string;
  responsable: string;
  status: string;
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {

  const initialValue: Tasks = {
    title: "",
    description: "",
    date: "",
    hour: "",
    responsable: "",
    status: "newtask",
  };
  const [task, setTask] = useState<Tasks>(initialValue);
  const {addTodo} = useTodo();



  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const data = JSON.stringify(task);
    addTodo(data);
    setTask(initialValue);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTask}>
        <div className="top">
          <h2 className="h2">Add New Task</h2>

          <label htmlFor="">Title</label>
          <input
            value={task.title}
            onChange={(event) => setTask((oldState) => ({...oldState, title: event.target.value}))
            }
          />

          <label htmlFor="">Description</label>
          <input
            value={task.description}
            onChange={(event) =>
              setTask((oldState) => ({
                ...oldState,
                description: event.target.value,
              }))
            }
          />
        </div>

        <div className="date">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={task.date}
            onChange={(event) =>
              setTask((oldState) => ({ ...oldState, date: event.target.value }))
            }
          />
        </div>

        <div className="hour">
          <label htmlFor="">Hour</label>
          <input
            type="time"
            value={task.hour}
            onChange={(event) =>
              setTask((oldState) => ({ ...oldState, hour: event.target.value }))
            }
          />
        </div>

        <div className="resp">
          <label htmlFor="">Responsable</label>
          <input
            value={task.responsable}
            onChange={(event) =>
              setTask((oldState) => ({
                ...oldState,
                responsable: event.target.value,
              }))
            }
          />
        </div>
        <div className="status">
          <label htmlFor="">Status</label>
          <select
            value={task.status}
            onChange={(event) =>
              setTask((oldState) => ({
                ...oldState,
                status: event.target.value,
              }))
            }
          >
            <option value="newtask">New Task</option>
            <option value="inprogress">In Progress</option>
            <option value="donetoday">Done Today</option>
          </select>
        </div>
        <button className="button" type="submit">
          Save
        </button>
      </Container>
    </Modal>
  );
}
