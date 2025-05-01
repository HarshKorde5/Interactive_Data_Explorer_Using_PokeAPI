
import React from 'react';
import { PaginationProvider } from './features/pagination/context/PaginationContext';
import PokemonList from './features/pokemonList/components/PokemonList';
import { PokemonProvider } from './features/pokemonList/context/usePokemonContext';

function App() {
  return (
    <>

      <PaginationProvider>
        <PokemonProvider>
          <PokemonList />
        </PokemonProvider>
      </PaginationProvider>
    </>
  );
}

export default App;
