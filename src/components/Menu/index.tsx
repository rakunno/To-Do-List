import { Container, MenuImg, MenuList } from "./style";
import { Link } from "react-router-dom";

import dashboardLeftImg from "../../assets/dashboard-left.svg";
import taskImg from "../../assets/task.svg";
import calendar from "../../assets/calendar.svg";
import newtaskImg from "../../assets/addnewtask.svg";

interface Taskprops {
  onOpenNewTaskModal: () => void;
}

export function Menu({ onOpenNewTaskModal }: Taskprops) {
  return (
    <Container>
      <MenuList>
        <Link to={"/"}>
          <MenuImg src={dashboardLeftImg} alt="Dashboard" />
        </Link>
        <Link to={"/task"}>
          <MenuImg src={taskImg} alt="Task" />
        </Link>

        {/* <img src={calendar} alt="Calendar" /> */}
        <MenuImg
          src={newtaskImg}
          alt="Add New Task"
          onClick={onOpenNewTaskModal}
        />
      </MenuList>
    </Container>
  );
}
