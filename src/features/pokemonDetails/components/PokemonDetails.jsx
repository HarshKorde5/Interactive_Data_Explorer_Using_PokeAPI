import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { usePokemonDetails } from "../hooks/usePokemonDetails";

function PokemonDetails() {
    const { id } = useParams();
    const { pokemon, evolution, loading } = usePokemonDetails(id);

    if (loading || !pokemon) return <Loading />;

    return (
        <div className="block p-6 text-black border-4 rounded-xl m-4 bg-gradient-to-r from-rose-500 to-lime-300">
            <h1 className="text-6xl m-2 font-bold capitalize">{pokemon.name}</h1>
            <img className="m-4 p-4" src={pokemon.sprites.front_default} alt={pokemon.name} />

            <h2 className="text-xl font-bold mt-4">Stats</h2>
            <ul>
                {pokemon.stats.map((stat) => (
                    <li key={stat.stat.name}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mt-4">Abilities</h2>
            <ul>
                {pokemon.abilities.map((a) => (
                    <li key={a.ability.name}>{a.ability.name}</li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mt-4">Moves</h2>
            <ul className="max-h-48 overflow-y-auto">
                {pokemon.moves.map((m) => (
                    <li key={m.move.name}>{m.move.name}</li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mt-4">Evolution Chain</h2>
            <p>{evolution.join(" -> ")}</p>
        </div>
    );
}

export default PokemonDetails;
