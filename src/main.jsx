import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './components/Layout.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import PokemonListFavorite from './features/favorite/components/PokemonListFavorite.jsx'
import PokemonDetails from './features/pokemonDetails/components/PokemonDetails.jsx'
import PokemonCompare from './features/pokemonCompare/components/PokemonCompare.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />

      <Route
        path='/list-pokemons'
        element={<App />}
      />
      <Route
        path='/list-favorites'
        element={<PokemonListFavorite />}
      />
      <Route
        path="/pokemon-details/:id"
        element={<PokemonDetails />}
      />

      <Route
        path="/compare-random"
        element={<PokemonCompare />}
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
