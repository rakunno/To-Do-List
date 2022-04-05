import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --purple: #6C6CEA;
    --ligth-blue: #aff6ff;
    --blue: #1ff6ff;
    --yellow: #FFCE5B;
    --green: #58BA6E;
    --pink: #FB8694;
    --pink-ligth: #FFE6EA;

    
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {    
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    
}
#root {
    display: flex;
    flex-wrap: wrap;
}


.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 576px;
    background:  var(--ligth-blue);
    padding: 3rem;
    position: relative;
    border-radius: 2rem;
    border: none;
}

`;