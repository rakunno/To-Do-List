import styled from "styled-components";

export const Container = styled.div`
    background: var(--ligth-blue);
    color: var(--purple);
    width: calc(100% - 70px);
    display: flex;
    flex-direction: column; 
    min-height: calc(100vh - 70px);
`;
export const Contains = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const HeaderTask = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 70px;
    margin: 30px 0;
    
    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;
export const DisplayTodo = styled.div`
    width: 350px;
    height: 100px;
    background-color: #fff;
    box-shadow:  1px 5px 10px var(--blue);
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    color: ${(props) => (props.color ?? props.color)};
    font-weight: 900;

    @media(max-width: 1024px) {
        width: 250px;
        height: 100px;
    }
    @media(max-width: 768px) {
       width: 80%;
       height: 60px;
    }
   
`;
export const DisplayIcon = styled.img`
    height: 35px;
`;
export const DisplayTitle = styled.p`
    font-size: 23px;
`;
export const DisplayTask = styled.h1`
`; 

export const TaskInprogress = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 20px;
`;
export const TaskNewTask = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 20px;
    @media (max-width: 1440px) {
        width:32%;
    }
    @media (max-width: 1024px) {
        width:48%;
    }
   
    @media(max-width: 768px) {
            width: 100%;
    }
`;
export const TaskTitle = styled.h3`
    word-wrap: break-word;
    
`;

export const TaskDescription = styled.p`
    font-size: 17px;
`;
export const TaskDate = styled.span`
    font-weight: bold;
`;


export const InprogressArea = styled.div`
padding: 15px;
width: 30%;
@media(max-width: 768px) {
    width: 100%;
}
`;

export const EventArea = styled.div`
width: 70%;
padding: 15px;
@media(max-width: 768px) {
    width: 100%;
}
`; 

export const EventAreaContains = styled.div`
display: flex;
flex-wrap: wrap;
gap: 15px;
`;
export const Paragraph = styled.p`
font-weight: 700;
font-size: 20px;
margin-bottom: 20px;
`;