import React from "react";
import pokemonLogo from "./assets/pokemon-logo-png-1421.png";
import pokeball from "./assets/pokeball-16809.png";

export default function Header() {
  return (
    <nav className="bg-red-600 sticky top-0 ">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between items-center">
            <a className="flex" href="/">
              <img className="w-12 h-12" src={pokeball} alt="pokemonball" />
            </a>
            <a className="flex" href="/">
              <img
                className="w-24 h-24 ml-2"
                src={pokemonLogo}
                alt="pokemonLogo"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
