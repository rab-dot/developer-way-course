import { useState } from "react";

export const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // С кастомными хуками тоже самое
  console.log(isModalOpen);
  return (
    <>
      <button onClick={() => setIsModalOpen((prev) => !prev)}>
        Я типо модальное окно
      </button>
      {isModalOpen ? <div>Открыто</div> : <div>Закрыто</div>}
    </>
  );
};
