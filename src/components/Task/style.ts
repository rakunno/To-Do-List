import styled from "styled-components";

type DisplayVisibleProps = {
  isActive: boolean;
};

export const Container = styled.div`
  background: var(--ligth-blue);
  color: var(--purple);
  width: calc(100% - 70px);
  min-height: calc(100vh - 70px);
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Task = styled.div`
  font-size: 1.25rem;
  margin: 1rem 2rem;
  border-radius: 1.25rem;
  padding: 20px;
  background: #fff;
`;
export const TaskTitle = styled.h4`
  margin-bottom: 15px;
`;

export const TaskParagraph = styled.p`
  margin-bottom: 15px;
`;
export const TaskEdit = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TaskEditDate = styled.h5``;
export const TaskEditImg = styled.img`
  height: 30px;
  cursor: pointer;
`;

export const Line = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DisplayVisible = styled.div<DisplayVisibleProps>`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px 40px;
  gap: 15px;
  margin-top: -120px;
  margin-right: -70px;
  position: absolute;
  background: var(--blue);
  font-weight: 600;
  cursor: pointer;
`;
// export const Header = styled.div`
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     justify-content: center;
//     gap: 20px;
// `;

export const TitleStatus = styled.div`
  align-items: center;
  justify-content: center;
  gap: 20px;
  display: flex;
  margin: 40px 0;
  @media (max-width: 768px) {
    h1 {
      font-size: 25px;
    }
  }
`;
// export const TaskContainsArea = styled.div`
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// `;

export const TasksStatusArea = styled.div`
  width: 33.33%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
