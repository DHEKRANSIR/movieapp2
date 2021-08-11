import React from 'react'
import Moviedata from './Moviedata'
import ReactPlayer from 'react-player'

const Trailer = (props) => {
    
    const film = props.location.state.movie;
    return (
   <div style={{textAlign:'center', backgroundColor:'beige', boxShadow:'0px 0px 2px 2px rgb(156, 154, 154) ', padding:'20px', marginBottom:'30px'}}>
       <h1>Description</h1>
       <div >
       <p style={{fontWeight:'bold'}}>{film.description}</p>
       <ReactPlayer style={{marginLeft:'120px'}} url={film.Trailer}/></div>
       <button onClick={()=>props.history.goBack()}>Go Back</button>
   </div>
    )
}
export default Trailer
