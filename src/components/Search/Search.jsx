import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Search() {
    const [pokemonName, setPokemonName] = useState('')
    const [pokeId, setPokeId] = useState('')

    const searchPokemon = async() => {
        const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const pokemonData = await pokemonDataResponse.json()
        
        setPokeId(pokemonData.id)
    }

    useEffect(() => {
        searchPokemon()
    }, [pokemonName])

    return (
        <>
            <div className='flex gap-1 w-full justify-center items-center'>
                <input 
                    type="text"
                    placeholder='Pokemon name'
                    className='border-2 border-gray-400 rounded-sm outline-none w-3/4 py-2 p-3'
                    autoFocus 
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value.toLocaleLowerCase())}
                />

                <Link to={`/pokemon/${pokeId}`}>
                    <div 
                    className='w-10 h-10 border-2 border-slate-200-400 rounded-lg cursor-pointer flex justify-center items-center shadow-md bg-slate-400'
                    >
                        <FaSearch/>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default Search
