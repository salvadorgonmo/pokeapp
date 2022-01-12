import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'


export const App = () => {
  const [pokemons, setPokemons] = useState([])

  const getPokemonList = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10')
    console.log(response)
    setPokemons(response.data.results)
  }

  console.log('pokemons: ', pokemons)

  useEffect(() => {
    getPokemonList()
  }, [])

  return (
    <div>
      hello
    </div>
  )
}

export default App;