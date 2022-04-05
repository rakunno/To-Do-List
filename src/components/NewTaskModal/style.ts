import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  font-size: 1rem;
  color: var(--purple);
  font-weight: bold;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  grid-template-areas:
    "top top"
    "date hour"
    "resp status"
    ". button";
  .date {
    grid-area: date;
  }
  .hour {
    grid-area: hour;
  }
  .resp {
    grid-area: resp;
  }
  .status {
    grid-area: status;
  }
  .top {
    grid-area: top;
  }
  .button {
    grid-area: button;
  }
  h2 {
    text-align: center;
    font-size: 2.5rem;
  }
  input,
  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    margin-bottom: 20px;
  }
  button {
    font-size: 1.5rem;
    background-color: var(--blue);
    border: none;
    padding: 5px 0;
    border-radius: 0.75rem;
  }
`;
