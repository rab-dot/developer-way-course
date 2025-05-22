import { useState } from "react";
import "./App.css";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";
import { Component1 } from "./Components1";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // С кастомными хуками тоже самое
  console.log(isModalOpen);
  return (
    <>
      <button onClick={() => setIsModalOpen((prev) => !prev)}>
        Я типо модальное окно
      </button>
      {isModalOpen ? <div>Открыто</div> : <div>Закрыто</div>}
      <Component1 />
      <Component2 />
      <Component3 />
    </>
  );
}

export default App;
