var R=Object.defineProperty,H=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var I=(a,n,r)=>n in a?R(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r,h=(a,n)=>{for(var r in n||(n={}))B.call(n,r)&&I(a,r,n[r]);if(D)for(var r of D(n))J.call(n,r)&&I(a,r,n[r]);return a},u=(a,n)=>H(a,$(n));import{s as l,j as S,u as q,_ as V,L as E,r as g,M as f,a as W,W as G,R as K,b as _,B as Q}from"./vendor.74abce36.js";const U=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function r(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(o){if(o.ep)return;o.ep=!0;const d=r(o);fetch(o.href,d)}};U();const X=l.div`
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
  @media(max-width: 425px) {
        height: 115px;
        flex-wrap: wrap;
    }
`,Y=l.div`
    display: flex;
    align-items: center;
`,Z=l.h1`
    @media(max-width: 425px) {
     font-size: 35px;
    }
`,ee=l.img`
    height: 50px;
    margin-right: 15px;`;var te="/assets/dashboard.293441b9.svg";const e=S.exports.jsx,i=S.exports.jsxs,ne=S.exports.Fragment;function ae(){setInterval(a,1e3);function a(){const t=new Date,o=document.querySelector(".date");let d=new Intl.DateTimeFormat("pt-BR",{dateStyle:"medium",timeStyle:"medium"}).format(t);return o.innerHTML=d,d}const n=q(),r=V.capitalize(n.pathname.replace("/","")||"Dashboard");return i(X,{children:[i(Y,{children:[e(ee,{src:te,alt:r}),e(Z,{children:r})]}),e("div",{className:"date"})]})}const re=l.div`
    width: 70px;
`,ie=l.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`,v=l.img`
    cursor: pointer;
    width: 50px;
`;var oe="/assets/dashboard-left.706eb509.svg",O="/assets/task.34ad006c.svg",se="/assets/addnewtask.f86ead72.svg";function le({onOpenNewTaskModal:a}){return e(re,{children:i(ie,{children:[e(E,{to:"/",children:e(v,{src:oe,alt:"Dashboard"})}),e(E,{to:"/task",children:e(v,{src:O,alt:"Task"})}),e(v,{src:se,alt:"Add New Task",onClick:a})]})})}const j=l.form`
    display: grid;
    font-size: 1rem;
    color: var(--purple);
    font-weight: bold;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    grid-template-areas:
    'top top'
    'date hour'
    'resp status'
    '. button'
    ;
    .date{
        grid-area: date;
    }
    .hour {
        grid-area: hour;
    }.resp{
        grid-area: resp;
    }
    .status{
        grid-area: status;
    }
    .top {
        grid-area: top;
    }
    .button{
        grid-area: button;
    }
    h2{
    text-align: center;
    font-size: 2.5rem;
    }
    input, select{
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
`,z=g.exports.createContext({}),de=({children:a})=>{const[n,r]=g.exports.useState([]);g.exports.useEffect(()=>{var c;const p=JSON.parse((c=localStorage.getItem("dados"))!=null?c:"[]");r(p)},[]);const t=p=>{const c=JSON.parse(p),s=[...n,c];localStorage.setItem("dados",JSON.stringify(s)),r(s)},o=p=>{n.splice(p,1),r([...n]),localStorage.setItem("dados",JSON.stringify(n))},d=(p,c)=>{const s=[...n];s.splice(c,1,p),r(s),localStorage.setItem("dados",JSON.stringify(s))};return e(z.Provider,{value:{listTodo:n,addTodo:t,removeTodo:o,editTodo:d},children:a})},x=()=>g.exports.useContext(z);function ce({isOpen:a,onRequestClose:n}){const r={title:"",description:"",date:"",hour:"",responsable:"",status:"newtask"},[t,o]=g.exports.useState(r),{addTodo:d}=x();function p(c){c.preventDefault();const s=JSON.stringify(t);d(s),o(r),n()}return e(f,{isOpen:a,onRequestClose:n,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:i(j,{onSubmit:p,children:[i("div",{className:"top",children:[e("h2",{className:"h2",children:"Add New Task"}),e("label",{htmlFor:"",children:"Title"}),e("input",{value:t.title,onChange:c=>o(s=>u(h({},s),{title:c.target.value}))}),e("label",{htmlFor:"",children:"Description"}),e("input",{value:t.description,onChange:c=>o(s=>u(h({},s),{description:c.target.value}))})]}),i("div",{className:"date",children:[e("label",{htmlFor:"",children:"Date"}),e("input",{type:"date",value:t.date,onChange:c=>o(s=>u(h({},s),{date:c.target.value}))})]}),i("div",{className:"hour",children:[e("label",{htmlFor:"",children:"Hour"}),e("input",{type:"time",value:t.hour,onChange:c=>o(s=>u(h({},s),{hour:c.target.value}))})]}),i("div",{className:"resp",children:[e("label",{htmlFor:"",children:"Responsable"}),e("input",{value:t.responsable,onChange:c=>o(s=>u(h({},s),{responsable:c.target.value}))})]}),i("div",{className:"status",children:[e("label",{htmlFor:"",children:"Status"}),i("select",{value:t.status,onChange:c=>o(s=>u(h({},s),{status:c.target.value})),children:[e("option",{value:"newtask",children:"New Task"}),e("option",{value:"inprogress",children:"In Progress"}),e("option",{value:"donetoday",children:"Done Today"})]})]}),e("button",{className:"button",type:"submit",children:"Save"})]})})}const pe=l.div`
    background: var(--ligth-blue);
    color: var(--purple);
    width: calc(100% - 70px);
    display: flex;
    flex-direction: column; 
    min-height: calc(100vh - 70px);
`,he=l.div`
    display: flex;
    flex-wrap: wrap;
`,ue=l.div`
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
`,b=l.div`
    width: 350px;
    height: 100px;
    background-color: #fff;
    box-shadow:  1px 5px 10px var(--blue);
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    color: ${a=>{var n;return(n=a.color)!=null?n:a.color}};
    font-weight: 900;

    @media(max-width: 1024px) {
        width: 250px;
        height: 100px;
    }
    @media(max-width: 768px) {
       width: 80%;
       height: 60px;
    }
   
`,w=l.img`
    height: 35px;
`,k=l.p`
    font-size: 23px;
`,y=l.h1`
`,me=l.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 20px;
`,ge=l.div`
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
`,F=l.h3`
    word-wrap: break-word;
    
`,fe=l.p`
    font-size: 17px;
`,M=l.span`
    font-weight: bold;
`,xe=l.div`
padding: 15px;
width: 30%;
@media(max-width: 768px) {
    width: 100%;
}
`,ve=l.div`
width: 70%;
padding: 15px;
@media(max-width: 768px) {
    width: 100%;
}
`,be=l.div`
display: flex;
flex-wrap: wrap;
gap: 15px;
`,A=l.p`
font-weight: 700;
font-size: 20px;
margin-bottom: 20px;
`;var we="/assets/taskpink.7e565d0e.svg",L="/assets/time.7ad0d929.svg",P="/assets/done.30c53c90.svg";function ke(){const{listTodo:a}=x(),n=a.filter(t=>t.status==="inprogress").length,r=a.filter(t=>t.status==="donetoday").length;return i(pe,{children:[i(ue,{children:[i(b,{color:"var(--pink)",children:[e(w,{src:we}),e(k,{children:"To Do"}),e(y,{children:a.length})]}),i(b,{color:"var(--yellow)",children:[e(w,{src:L}),e(k,{children:"Inprogress"}),e(y,{children:n})]}),i(b,{color:"var(--green)",children:[e(w,{src:P}),e(k,{children:"Done"}),e(y,{children:r})]})]}),i(he,{children:[i(xe,{children:[e(A,{children:"Improgress"}),a.map((t,o)=>{if(t.status==="inprogress")return i(me,{children:[e(F,{children:t.title}),e(fe,{children:t.description}),i(M,{children:[t.date," ",t.responsable]})]},o)})]}),i(ve,{children:[e(A,{children:"Next Event"}),e(be,{children:a.map((t,o)=>{if(t.status==="newtask")return i(ge,{children:[i(M,{children:[t.date," As ",t.hour]}),e(F,{children:t.title})]},o)})})]})]})]})}const ye=l.div`
  background: var(--ligth-blue);
  color: var(--purple);
  width: calc(100% - 70px);
  min-height: calc(100vh - 70px);
  display: flex;
  gap: 20px;
  @media(max-width: 768px) {
      flex-wrap: wrap;
    }
`,Te=l.div`
  font-size: 1.25rem;
  margin: 1rem 2rem;
  border-radius: 1.25rem;
  padding: 20px;
  background: #fff;
`,Ne=l.h4`
  margin-bottom: 15px;
`,Ce=l.p`
  margin-bottom: 15px;
`,Se=l.div`
  display: flex;
  justify-content: space-between;
`,De=l.h5`
`,Ie=l.img`
  height: 30px;
  cursor: pointer;
`,Ee=l.div`
  display: flex;
  justify-content: flex-end;
`,Fe=l.div`
  display: ${a=>a.isActive?"flex":"none"};
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
`,T=l.div`
    align-items: center;
    justify-content: center;
    gap: 20px;
    display: flex;
    margin: 40px 0;
    @media(max-width:768px) {
      h1{
        font-size: 25px;
      }
    }
`,N=l.div`
    width: 33.33%;
    @media(max-width: 768px) {
      width: 100%;
    }
`;var Me="/assets/taskedit.f7ec1224.svg";function Ae({isOpen:a,onRequestClose:n,indice:r}){f.setAppElement("#root");const{listTodo:t,editTodo:o}=x(),[d,p]=g.exports.useState(t[r]);function c(s){s.preventDefault(),o(d,r),n()}return e(f,{isOpen:a,onRequestClose:n,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:i(j,{onSubmit:c,children:[i("div",{className:"top",children:[e("h2",{className:"h2",children:"Add New Task"}),e("label",{htmlFor:"",children:"Title"}),e("input",{value:d.title,onChange:s=>p(m=>u(h({},m),{title:s.target.value}))}),e("label",{htmlFor:"",children:"Description"}),e("input",{value:d.description,onChange:s=>p(m=>u(h({},m),{description:s.target.value}))})]}),i("div",{className:"date",children:[e("label",{htmlFor:"",children:"Date"}),e("input",{type:"date",value:d.date,onChange:s=>p(m=>u(h({},m),{date:s.target.value}))})]}),i("div",{className:"hour",children:[e("label",{htmlFor:"",children:"Hour"}),e("input",{type:"time",value:d.hour,onChange:s=>p(m=>u(h({},m),{hour:s.target.value}))})]}),i("div",{className:"resp",children:[e("label",{htmlFor:"",children:"Responsable"}),e("input",{value:d.responsable,onChange:s=>p(m=>u(h({},m),{responsable:s.target.value}))})]}),i("div",{className:"status",children:[e("label",{htmlFor:"",children:"Status"}),i("select",{value:d.status,onChange:s=>p(m=>u(h({},m),{status:s.target.value})),children:[e("option",{value:"newtask",children:"New Task"}),e("option",{value:"inprogress",children:"In Progress"}),e("option",{value:"donetoday",children:"Done Today"})]})]}),e("button",{className:"button",type:"submit",children:"Save"})]})})}const C=({data:a,event:n,indice:r})=>{const[t,o]=g.exports.useState(!1),[d,p]=g.exports.useState(!1),c=()=>o(!t);function s(){p(!1)}return i(Te,{children:[e(Ne,{children:a.title}),e(Ce,{children:a.description}),i(Se,{children:[e(De,{children:a.date}),e(Ie,{src:Me,alt:"",onClick:c})]}),e(Ee,{children:i(Fe,{isActive:t,children:[e("div",{onClick:()=>{n(),o(!t)},children:"Delet"}),e("div",{onClick:()=>{o(!t),p(!d)},children:"Edit"})]})}),e(Ae,{indice:r,isOpen:d,onRequestClose:s})]})};function Oe(){const{listTodo:a,removeTodo:n}=x();return i(ye,{children:[i(N,{children:[i(T,{children:[e("img",{src:O,alt:"Task"}),e("h1",{children:"To Do"})]}),a.map((r,t)=>{if(r.status==="newtask")return e(C,{event:()=>n(t),indice:t,data:r},t)})]}),i(N,{children:[i(T,{children:[e("img",{src:L,alt:"Progress"}),e("h1",{children:"In Progress"})]}),a.map((r,t)=>{if(r.status==="inprogress")return e(C,{event:()=>n(t),indice:t,data:r},t)})]}),i(N,{children:[i(T,{children:[e("img",{src:P,alt:"Done"}),e("h1",{children:"Done Today"})]}),a.map((r,t)=>{if(r.status==="donetoday")return e(C,{event:()=>n(t),indice:t,data:r},t)})]})]})}function je(){return W([{path:"/",element:e(ke,{})},{path:"/task",element:e(Oe,{})}])}const ze=G`
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

`;f.setAppElement("#root");function Le(){const[a,n]=g.exports.useState(!1);function r(){n(!0)}function t(){n(!1)}return e(ne,{children:i(de,{children:[e(ae,{}),e(le,{onOpenNewTaskModal:r}),e(je,{}),e(ce,{isOpen:a,onRequestClose:t}),e(ze,{})]})})}K.render(e(_.StrictMode,{children:e(Q,{children:e(Le,{})})}),document.getElementById("root"));
