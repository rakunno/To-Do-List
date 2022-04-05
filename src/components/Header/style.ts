import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  font-size: 30px;
  color: var(--purple);
  display: flex;
  justify-content: space-between;
  padding-left: 70px;
  .date {
    display: flex;
    align-items: center;
    margin-right: 2%;
    font-size: 20px;
  }
  @media (max-width: 425px) {
    height: 115px;
    flex-wrap: wrap;
  }
`;

export const HeaderContains = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderTitle = styled.h1`
  @media (max-width: 425px) {
    font-size: 35px;
  }
`;
export const HeaderImg = styled.img`
  height: 50px;
  margin-right: 15px;
`;
