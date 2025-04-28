
import React from "react";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./Loading";
import Card from "./Card";

function ListCards() {
    
    const data = useLoaderData();

    return (
        <>
            <div className="min-h-screen rounded-xl m-4 p-4 bg-gradient-to-r from-red-400 to-blue-200">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Pokemon List</h1>

                <Suspense fallback={<Loading />}>
                    <Await resolve={data}>
                    {(pokemonList) => (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
                        {pokemonList.map((pokemon) => (
                            // Card Component
                            <Card pokemon = {pokemon}/>
                        ))}
                        </div>
                    )}
                    </Await>
                </Suspense>
            </div>
        </>
    );
}

export default ListCards;
