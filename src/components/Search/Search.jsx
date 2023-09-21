import useDebounce from "../../hooks/useDebounce"

function Search({updateSearchTerm}) {
    const deBounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        <>
            <div className='flex gap-1 w-full justify-center items-center'>
                <input 
                    type="text"
                    placeholder='Pokemon name'
                    className='border-2 border-gray-400 rounded-sm outline-none w-3/4 py-2 p-3'
                    autoFocus 
                    onChange={deBounceUpdateSearch}
                />

            </div>
        </>
    )
}

export default Search
