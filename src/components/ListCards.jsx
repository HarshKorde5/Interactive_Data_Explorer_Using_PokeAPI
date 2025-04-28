
import React, { useEffect, useState } from "react";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./Loading";
import Card from "./Card";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import axios from "axios";
function ListCards() {

    const data = useLoaderData();

    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/type/");
                setTypes(response.data.results);
            } catch (error) {
                console.log("Failed to fetch types:", error);
            }
        };

        fetchTypes();
    }, []);

    const filteredPokemons = (pokemonList) => {
        return pokemonList
            .filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter((pokemon) =>
                typeFilter === "all" || pokemon.types.includes(typeFilter)
            );
    };


    return (
        <>
            <div className="min-h-screen rounded-xl m-4 p-4 ">
                {/* Search and Filter */}
                <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4">

                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                    <FilterBar typeFilter={typeFilter} onTypeChange={setTypeFilter} types={types} />
                </div>
                <Suspense fallback={<Loading />}>
                    <Await resolve={data}>
                        {(pokemonList) => {
                            const filteredList = filteredPokemons(pokemonList);

                            if (filteredList.length === 0) {
                                return <div className="text-center text-xl text-black">No Pokémon found</div>;
                            }
                            return (
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
                                    {filteredList.map((pokemon) => (
                                        // Card Component
                                        <Card key={pokemon.id} pokemon={pokemon} />
                                    ))}
                                </div>
                            );
                        }}
                    </Await>
                </Suspense>
            </div>
        </>
    );
}

export default ListCards;
