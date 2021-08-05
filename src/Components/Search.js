import React from 'react'

function Search({searching,setSearch}) {
    return (
        <div className='searchbox'>
            <input type='text' 
            placeholder='search for movie...' 
            className='searchbar' 
            onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
    )
}

export default Search;
