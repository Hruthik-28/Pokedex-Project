import React, { useState } from 'react'
import Search from '../Search/Search'
import PokemonList from '../PokemonList/PokemonList'
import PokemonDetails from '../Pokemondetails/PokemonDetails'

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='max-w-full mx-auto w-full h-full bg-slate-300'>
            <h1 className='text-center text-5xl font-mono mb-5 '>POKEDEX</h1> 
            <div className='w-full flex justify-center mb-5 sticky top-5'>
                <Search updateSearchTerm={setSearchTerm} />
            </div>
            <div className='w-full flex justify-center '>
                {(!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
            </div>

        </div>
    )
}

export default Pokedex
