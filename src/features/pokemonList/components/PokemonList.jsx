import React from "react";
import Pagination from "../../pagination/components/Pagination";
import PokemonGrid from "./PokemonGrid";
import { usePokemonContext } from "../context/usePokemonContext";
import PokemonCard from "./PokemonCard";
import Loading from "../../../Loading";

function PokemonList() {

    const { pokemons, loading, error } = usePokemonContext();

    const totalCount = 150;

    if (loading) return <div><Loading /></div>;
    if (error) return <div>{error}</div>;
    if (!pokemons.length) return <div>No Pokemon found.</div>;


    return (
        <>
            <div className="min-h-screen rounded-xl m-4 p-4 ">

                <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
                    {/* <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
                    {/* <FilterBar typeFilter={typeFilter} onTypeChange={setTypeFilter} types={types} /> */}
                </div>

                {/* Pokemon Grid */}
                <PokemonGrid>
                    {pokemons.map((pokemon) => (
                        // map each pokemon to its card(Card component rendering)
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </PokemonGrid>


                {/* Pagination implementation*/}
                <Pagination total={totalCount} />
            </div>
        </>
    );
}

export default PokemonList;