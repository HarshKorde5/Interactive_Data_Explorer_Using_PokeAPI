import React from "react";

import PokemonGrid from "./PokemonGrid";
import PokemonCard from "./PokemonCard";
import Loading from "../../../components/Loading";
import Pagination from "../../pagination/components/Pagination";
import PokemonSort from "../../pokemonFilter/components/PokemonSort";
import PokemonSearch from "../../pokemonFilter/components/PokemonSearch";
import PokemonFilter from "../../pokemonFilter/components/PokemonFilter";
import PokemonFavorite from "../../favorite/components/PokemonFavorite";

import { usePokemonFilterContext } from "../../pokemonFilter/context/usePokemonFilterContext";
import usePaginationContext from "../../pagination/hooks/usePaginationContext";

function PokemonList() {

    const { loading, error } = usePokemonFilterContext();
    const { paginatedItems } = usePaginationContext();

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
                    {/* Pokemon Favorite */}
                    <PokemonFavorite />

                </div>

                {/* Pokemon Grid */}
                <PokemonGrid>
                    {paginatedItems.map((pokemon) => (
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