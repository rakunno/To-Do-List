import { useState } from "react";
import {
  Task,
  TaskTitle,
  TaskParagraph,
  TaskEdit,
  TaskEditDate,
  TaskEditImg,
  Line,
  DisplayVisible,
} from "./style";
import taskeditImg from "../../assets/taskedit.svg";
import { EditModal } from "../NewTaskModal/editModal";

interface Dados {
  title: string;
  date: string;
  description: string;
}
interface TaskMapProps {
  indice: number;
  data: Dados;
  event: () => void;
}

export const TaskMap = ({ data, event, indice }: TaskMapProps) => {
  const [isActive, setIsActive] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);

  const handleDelet = () => setIsActive(!isActive);
  function handleCloseEditModal() {
    setOpenEditModal(false);
  }

  return (
    <Task>
      <TaskTitle>{data.title}</TaskTitle>
      <TaskParagraph>{data.description}</TaskParagraph>
      <TaskEdit>
        <TaskEditDate>{data.date}</TaskEditDate>
        <TaskEditImg src={taskeditImg} alt="" onClick={handleDelet} />
      </TaskEdit>
      <Line>
        <DisplayVisible isActive={isActive}>
          <div
            onClick={() => {
              event();
              setIsActive(!isActive);
            }}
          >
            Delet
          </div>
          <div
            onClick={() => {
              setIsActive(!isActive), setOpenEditModal(!openEditModal);
            }}
          >
            Edit
          </div>
        </DisplayVisible>
      </Line>
      <EditModal
        indice={indice}
        isOpen={openEditModal}
        onRequestClose={handleCloseEditModal}
      />
    </Task>
  );
};
