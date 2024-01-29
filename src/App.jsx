import React, { useState } from "react";
import Modal from "./components/Modal.jsx";
import axios, { Axios } from "axios";
import { fetchPokemonData } from "../service/index.js";
import PokemonCard from "./PokemonCard.jsx";

function App() {
  // const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState();
  // const handleOpenModal = async () => {
  //   setModalOpen(true);
  //   const data = await fetchPokemonData();
  //   setData(data);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="App">
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={34} />
        <PokemonCard name={"rahul"} id={349} />
        <PokemonCard name={"rahul"} id={364} />
        <PokemonCard name={"rahul"} id={344} />
        <PokemonCard name={"rahul"} id={334} />
      </div>
      {/* Modal component */}
      {/* <Modal showModal={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
}

export default App;
