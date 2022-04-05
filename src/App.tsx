import { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { NewTaskModal } from "./components/NewTaskModal";
import { TodoContextProvider } from "./contexts/TodoContext";
import { MainRoute } from "./MainRoutes";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");
function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }
  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <>
      <TodoContextProvider>
        <Header />
        <Menu onOpenNewTaskModal={handleOpenNewTaskModal} />

        <MainRoute />
        <NewTaskModal
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewTaskModal}
        />

        <GlobalStyle />
      </TodoContextProvider>
    </>
  );
}

export default App;
