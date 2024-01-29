import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PokemonCard from "./PokemonCard.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Searchbar from "./Searchbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Searchbar />
    <App />
    <PokemonCard />
    <Footer />
  </React.StrictMode>
);
