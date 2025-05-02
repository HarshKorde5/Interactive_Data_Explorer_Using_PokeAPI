import React, { useState } from "react";
import Button from "../../../components/Button";
import { usePokemonDetails } from "../../pokemonDetails/hooks/usePokemonDetails";

function PokemonCompare() {
    const [randomId, setRandomId] = useState(null);
    const { pokemon, evolution, loading } = usePokemonDetails(randomId);

    const handleGetRandomPokemon = () => {
        const id = Math.floor(Math.random() * 150) + 1;
        setRandomId(id);
    };

    //   return (
    //     <div className="p-6">
    //       <button
    //         onClick={handleGetRandomPokemon}
    //         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    //       >
    //         Get Random Pokémon
    //       </button>

    //       {loading && <p className="mt-4">Loading...</p>}

    //       {pokemon && (
    //         <div className="mt-6 bg-white p-6 rounded shadow">
    //           <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
    //           <img
    //             src={pokemon.sprites.front_default}
    //             alt={pokemon.name}
    //             className="w-24 h-24 mt-2"
    //           />

    //           <h3 className="mt-4 font-semibold">Base Stats:</h3>
    //           <ul className="grid grid-cols-2 gap-2">
    //             {pokemon.stats.map((stat, idx) => (
    //               <li key={idx}>
    //                 {stat.stat.name}: {stat.base_stat}
    //               </li>
    //             ))}
    //           </ul>

    //           <h3 className="mt-4 font-semibold">Evolution Chain:</h3>
    //           <ul className="flex gap-2 flex-wrap">
    //             {evolution.map((name, idx) => (
    //               <li key={idx} className="bg-gray-200 px-3 py-1 rounded">
    //                 {name}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //     </div>
    //   );
    // };

    // export default RandomPokemonViewer;

    return (
        <>
            <div
                className="flex m-2 p-2 items-center justify-center text-black font-semibold text-4xl bg-green-100 rounded-lg shadow-xl"
            >
                Compare Pokemons!
            </div>
            <div className="flex bg-gray-600 gap-2 overflow-auto flex-col md:flex-row min-h-screen">
                {/* Left Side */}
                <div className="flex items-center justify-center w-full md:w-1/2 overflow-auto bg-blue-100 p-6 rounded-lg">

                    <Button
                        variant="outlined"
                        size="lg"
                        className="bg-green-400 font-bold rounded-xl"
                        onClick={handleGetRandomPokemon}
                    >
                        Get a random Pokemon!
                    </Button>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center w-full md:w-1/2 overflow-auto bg-blue-100 p-6 rounded-lg">

                    <Button
                        variant="outlined"
                        size="lg"
                        className="bg-green-400 font-bold rounded-xl"
                        onClick={handleGetRandomPokemon}
                    >
                        Get a random Pokemon!
                    </Button>

                </div>
            </div>

        </>
    );
}

export default PokemonCompare;