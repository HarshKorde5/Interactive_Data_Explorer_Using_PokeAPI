import { createRoot } from 'react-dom/client'
import './index.css'

  import Layout from './Layout.jsx'
import HomePage from './components/HomePage.jsx'
import ListCards from './components/ListCards.jsx'


import { pokemonLoader } from './utils/pokemonLoader.js'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<HomePage />} />

      <Route
        loader={pokemonLoader}
        path='/list-cards'
        element={<ListCards />}
        errorElement={<div>Something went wrong with PokeAPI!</div>}
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
