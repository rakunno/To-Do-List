import { Container, HeaderContains, HeaderImg, HeaderTitle } from "./style";
import _ from "lodash";
import dashboardImg from "../../assets/dashboard.svg";
import { useLocation } from "react-router-dom";

export function Header() {
  setInterval(myTimer, 1000);

  function myTimer() {
    const date = new Date();
    const data = document.querySelector(".date") as HTMLDivElement;
    let dateFormat = new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(date);
    data.innerHTML = dateFormat;
    return dateFormat;
  }
  const location = useLocation();
  const title = _.capitalize(location.pathname.replace("/", "") || "Dashboard");
  return (
    <Container>
      <HeaderContains>
        <HeaderImg src={dashboardImg} alt={title} />
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContains>
      <div className="date"></div>
    </Container>
  );
}
