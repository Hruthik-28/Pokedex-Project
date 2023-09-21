import Pokemon from '../pokemon/Pokemon'
import usePokemonList from '../../hooks/usePokemonList'

function PokemonList() {
    const [pokemonListState, setPokemonListState] = usePokemonList()

    return (
        <div>
            <h2 className='text-3xl text-center mb-5'>Pokemon List</h2>
            <div className='max-w-screen-2xl flex flex-wrap justify-center gap-3 sm:gap-5 items-center text-center mb-7 sm:flex-row flex-row'>
            {
                (pokemonListState.isLoading) ? "Data loading.....": 
                pokemonListState.pokemonList.map((poke) => <Pokemon name={poke.name} image={poke.image} key={poke.id} id={poke.id}/>)
                
            }
            </div>
            <div className='flex justify-center items-center gap-5'>
                <button
                className='border-2 border-gray-200 rounded-lg px-5 py-2 text-xl mb-5 hover:bg-slate-100'
                disabled={!pokemonListState.prevPokedexURL}
                onClick={() => {
                    const urlToSet = pokemonListState.prevPokedexURL
                    setPokemonListState({
                        ...pokemonListState, 
                        pokedexURL: urlToSet
                    })
                }}
                >
                    Prev
                </button>

                <button 
                className='border-2 border-gray-200 rounded-lg px-5 py-2 text-xl mb-5 hover:bg-slate-100'
                disabled={!pokemonListState.nextPokedexURL}
                onClick={() => {
                    const urlToSet = pokemonListState.nextPokedexURL
                    setPokemonListState({
                        ...pokemonListState, 
                        pokedexURL: urlToSet
                    })
                }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default PokemonList
