import React from 'react'
import Moviecard from './Moviecard'
const Movielist = ({Movies,searching,rate}) => {
    const filter=()=>{
        if (rate>0 && searching.trim()){
            return (Movies.filter((movie)=>movie.Title.toLowerCase().includes(searching.toLowerCase()) && movie.rating===rate))
        }
        if (rate>0){
            return(Movies.filter((movie)=>movie.rating===rate))
        }
        if(searching.trim()){
            return(Movies.filter((movie)=>movie.Title.toLowerCase().includes(searching.toLowerCase())))
        }
        return (Movies)

    }
    console.log(filter())
    return (
        <div className='container'>
            {filter().map((movie,i) => {
                return(
                    <div key={i}>
                        <Moviecard movie={movie}/>
                    </div>
            )})}
        </div>
        )}

export default Movielist
