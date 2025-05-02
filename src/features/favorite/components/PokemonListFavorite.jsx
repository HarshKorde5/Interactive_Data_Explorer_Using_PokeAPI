
import React, { useEffect, useState } from "react";
import { PaginationProvider } from "../../pagination/context/PaginationContext";
import PokemonCard from "../../pokemonList/components/PokemonCard";
import PokemonGrid from "../../pokemonList/components/PokemonGrid";
import Pagination from "../../pagination/components/Pagination";
import usePaginationContext from "../../pagination/hooks/usePaginationContext";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function PaginatedFavoriteList() {
    const { paginatedItems } = usePaginationContext();

    return (
        <div className="mt-4">
            <PokemonGrid>
                {paginatedItems.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </PokemonGrid>
            <Pagination />
        </div>
    );
}

function PokemonListFavorite() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/list-pokemons');
    }
    useEffect(() => {
        const stored = localStorage.getItem("favoritePokemons");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setFavorites(parsed);
                }
            } catch (err) {
                console.error("Failed to parse favorites from localStorage:", err);
            }
        }
    }, []);

    return (
        <div className="min-h-screen rounded-xl ml-4 mb-4 mr-4 p-4">
            <div className="text-white rounded-xl text-center text-3xl font-bold">
                Your Favorite Pokémons Collection!
                <Button
                    variant="outlined"
                    size="md"
                    className="ml-5 rounded-lg "
                    onClick={handleClick}
                >
                    Back
                </Button>
            </div>

            <PaginationProvider data={favorites}>
                <PaginatedFavoriteList />
            </PaginationProvider>
        </div>
    );
}

export default PokemonListFavorite;
