import React from "react";

function Card({pokemon}){
    return (
        <>
            <div
            key={pokemon.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:scale-105 transition duration-300 transform cursor-pointer"
            >
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-35 h-30 mb-2 bg-gray-200 rounded-lg"
                />
                <h2 className="text-lg font-semibold capitalize text-gray-700">{pokemon.name}</h2>
                <p className="text-sm text-gray-500 mb-2">#{pokemon.id}</p>
                <div className="flex flex-wrap justify-center gap-1">
                    {pokemon.types.map((type, idx) => (
                    <span
                        key={idx}
                        className="bg-blue-200 text-blue-800 text-xs font-medium px-2 py-1 rounded-lg"
                    >
                        {type}
                    </span>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Card;