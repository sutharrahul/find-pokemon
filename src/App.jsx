import React, { useState } from "react";
import Modal from "./components/Modal.jsx";
import axios, { Axios } from "axios";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">React Modal with Tailwind CSS</h1>

      {/* Button to open the modal */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>

      {/* Modal component */}
      <Modal showModal={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
