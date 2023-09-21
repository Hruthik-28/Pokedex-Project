import React from 'react'
import Search from '../Search/Search'
import PokemonList from '../PokemonList/PokemonList'

function Pokedex() {
    return (
        <div className='max-w-full mx-auto w-full h-full bg-slate-300'>
            <h1 className='text-center text-5xl font-mono mb-5 '>POKEDEX</h1> 
            <div className='w-full flex justify-center mb-5 sticky top-5'>
                <Search />
            </div>
            <div className='w-full flex justify-center '>
                <PokemonList />
            </div>

        </div>
    )
}

export default Pokedex
