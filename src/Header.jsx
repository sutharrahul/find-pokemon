import React from "react";
import pokemonLogo from "./assets/pokemon-logo-png-1421.png";
import pokeball from "./assets/pokeball-16809.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-red-600 sticky top-0 ">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-11">
          <div className="flex justify-between items-center">
            <a className="flex" href="/">
              <img className="w-10 h-10" src={pokeball} alt="pokemonball" />
            </a>
            <a className="flex" href="/">
              <img className=" h-20 ml-2" src={pokemonLogo} alt="pokemonLogo" />
            </a>
            <ul className="flex justify-between gap-6 ml-6 text-lg font-semibold text-slate-50">
              <Link to="/">
                <li className="transition hover:-translate-y-1 hover:scale-110 duration-300">
                  Home
                </li>
              </Link>
              <Link to="Search">
                <li className="flex transition hover:-translate-y-0 hover:scale-110 duration-300">
                  Search
                  <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
