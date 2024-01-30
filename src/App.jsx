import React, { useEffect, useState } from "react";
import Modal from "./components/Modal.jsx";
import { fetchPokemonData } from "../service/index.js";
import PokemonCard from "./PokemonCard.jsx";
import Button from "./components/Button.jsx";
import Header from "./Header.jsx";
import Searchbar from "./Searchbar.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!loading &&
          data?.results?.map(({ name, url }) => (
            <PokemonCard name={name} url={url} key={name} />
          ))}
      </div>
      {loading && (
        <h1 className="font-medium text-3xl flex justify-center">Loading...</h1>
      )}

      <div className="flex justify-center gap-3">
        {data?.previous && <Button label={"Prev"} onClick={onPrevClick} />}
        {data?.next && <Button label={"Next"} onClick={onNextClick} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
