import axios from "axios";

export async function fetchPokemonData(apiUrl) {
  const res = await axios.get(apiUrl);
  return res.data;
}

// function fetchPokemonData() {
//   new Promise((resolve, reject) => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/")
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
