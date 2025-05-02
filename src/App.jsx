
// import React from 'react';
// import { PaginationProvider } from './features/pagination/context/PaginationContext';
// import PokemonList from './features/pokemonList/components/PokemonList';
// import { PokemonProvider } from './features/pokemonList/context/usePokemonContext';
// import { PokemonFilterProvider } from './features/pokemonFilter/context/usePokemonFilterContext';

// function App() {
//   return (
//     <>
//       <PokemonProvider>
//         <PokemonFilterProvider>
//           <PaginationProvider>
//             <PokemonList />
//           </PaginationProvider>
//         </PokemonFilterProvider>
//       </PokemonProvider>
//     </>
//   );
// }

// export default App;



import React from 'react';
import { PaginationProvider } from './features/pagination/context/PaginationContext';
import PokemonList from './features/pokemonList/components/PokemonList';
import { PokemonProvider } from './features/pokemonList/context/usePokemonContext';
import { PokemonFilterProvider, usePokemonFilterContext } from './features/pokemonFilter/context/usePokemonFilterContext';

function PaginatedPokemonList() {
  const { filteredPokemons } = usePokemonFilterContext();

  return (
    <PaginationProvider data={filteredPokemons}>
      <PokemonList />
    </PaginationProvider>
  );
}

function App() {
  return (
    <PokemonProvider>
      <PokemonFilterProvider>
        <PaginatedPokemonList />
      </PokemonFilterProvider>
    </PokemonProvider>
  );
}

export default App;
