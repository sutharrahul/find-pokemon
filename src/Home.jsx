import React, { useEffect, useState } from "react";
import Modal from "./components/Modal.jsx";
import { fetchPokemonData } from "./service/index.js";
import PokeListCard from "./PokeListCard.jsx";
import Button from "./components/Button.jsx";
import Header from "./Header.jsx";
import Searchbar from "./Searchbar.jsx";
import Footer from "./Footer.jsx";
import PokeModalCard from "./components/PokeModalCard.jsx";
import Loading from "./Loading.jsx";

function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [currentCardData, setCurrentCardData] = useState();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    getData(url);
  }, []);

  async function getData(url) {
    if (loading) return;
    setLoading(true);
    const data = await fetchPokemonData(url);
    setData(data);
    setLoading(false);
  }
  function onNextClick() {
    if (data?.next) getData(data?.next);
  }
  function onPrevClick() {
    if (data?.previous) getData(data?.previous);
  }
  function onCardClose() {
    setCurrentCardData(null);
  }

  return (
    <div className="Home mb-0">
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {!loading &&
          data?.results?.map(({ name, url }) => (
            <PokeListCard
              name={name}
              url={url}
              key={name}
              setModalData={setCurrentCardData}
            />
          ))}
      </div>
      {loading && <Loading />}
      {currentCardData && (
        <Modal onClose={onCardClose}>
          <PokeModalCard data={currentCardData} />
        </Modal>
      )}
      <div className="flex justify-center gap-3">
        {data?.previous && <Button label={"Prev"} onClick={onPrevClick} />}
        {data?.next && <Button label={"Next"} onClick={onNextClick} />}
      </div>
    </div>
  );
}

export default Home;
