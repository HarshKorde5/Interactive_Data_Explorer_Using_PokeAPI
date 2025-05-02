import React from "react";

import PokemonGrid from "./PokemonGrid";
import PokemonCard from "./PokemonCard";
import Loading from "../../../components/Loading";
import Pagination from "../../pagination/components/Pagination";
import PokemonSort from "../../pokemonFilter/components/PokemonSort";
import PokemonSearch from "../../pokemonFilter/components/PokemonSearch";
import PokemonFilter from "../../pokemonFilter/components/PokemonFilter";

import { usePokemonFilterContext } from "../../pokemonFilter/context/usePokemonFilterContext";
import usePaginationContext from "../../pagination/hooks/usePaginationContext";

function PokemonList() {

    const { loading, error } = usePokemonFilterContext();
    const { paginatedPokemons } = usePaginationContext();

    if (loading) return <div><Loading /></div>;
    if (error) return <div>{error}</div>;
  
    return (
        <>
            <div className="min-h-screen rounded-xl m-4 p-4 ">

                <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
                    {/* Pokemon Searching */}
                    <PokemonSearch />
                    {/* Pokemon Filter */}
                    <PokemonFilter />
                    {/* Pokemon Sort */}
                    <PokemonSort />
                </div>

                {/* Pokemon Grid */}
                <PokemonGrid>
                    {paginatedPokemons.map((pokemon) => (
                        // map each pokemon to its card(Card component rendering)
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </PokemonGrid>


                {/* Pagination implementation*/}
                <Pagination />
            </div>
        </>
    );
}

export default PokemonList;