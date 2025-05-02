import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

function PokemonDetails() {
    const { id } = useParams();
    const { pokemon, evolution, loading } = usePokemonDetails(id);
    if (loading || !pokemon) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-black">Pokemon Explorer</h1>
        <p className="text-black">Discover stats, abilities, and more!</p>
      </header>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <div className="w-56 h-56 rounded-xl bg-gray-100 flex items-center justify-center border-4 border-white shadow">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="scale-200 max-w-[100%] max-h-[100%] transition-transform hover:scale-210" />
          </div>
          <h2 className="text-3xl font-bold text-blue-800 relative after:block after:w-12 after:h-1 after:bg-red-500 after:absolute after:-bottom-2 after:left-0">
            {pokemon.name.toUpperCase()}
          </h2>
        </div>

        {/* Stats */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 before:content-['•'] before:text-red-500 before:text-2xl">Base Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            {pokemon.stats.map((stat, i) => (
              <div key={i} className="bg-blue-100 border-l-4 border-blue-800 p-3 rounded-md hover:translate-x-1 transition">
                {stat.stat.name}: {stat.base_stat}
              </div>
            ))}
          </div>
        </section>

        {/* Abilities */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 before:content-['•'] before:text-red-500 before:text-2xl">Abilities</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {pokemon.abilities.map((ability, i) => (
              <span key={i} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm hover:bg-red-500 transition">
                {ability.ability.name}
              </span>
            ))}
          </div>
        </section>

        {/* Moves */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 before:content-['•'] before:text-red-500 before:text-2xl">Moves</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {pokemon.moves.map((move, i) => (
              <span key={i} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm hover:bg-red-500 transition">
                {move.move.name}
              </span>
            ))}
          </div>
        </section>

        {/* Evolution Chain */}
        <section>
          <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2 before:content-['•'] before:text-red-500 before:text-2xl">Evolution Chain</h3>
          <div className="flex flex-wrap md:flex-row items-center justify-center gap-4 mt-3 bg-blue-50 p-4 rounded-lg text-xl font-semibold">
          
            {evolution.map((stage, i) => (
              <React.Fragment key={i}>
                <div className="text-center min-w-[80px]">
                  <p>{stage.toUpperCase()}</p>
                </div>
                {i < evolution.length - 1 && (
                  <span className="text-red-500 font-bold text-xl hidden md:inline-block">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};


export default PokemonDetails;
