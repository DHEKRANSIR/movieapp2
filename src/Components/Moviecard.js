import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';


const Moviecard = ({movie}) => {
    
    return (
        <div className='card'>
<Card style={{ width:'18rem', height:'32rem', margin:'0'}}>
  <Card.Img style={{height:'70%', width:'100%'}}  src={movie.image} />
  <Card.Body>
    <div className='info'>
    <Card.Title style={{fontSize:'1.2rem', fontWeight:'bold'}}>{movie.Title}</Card.Title>
    <StarRatings 
          rating={movie.rating}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension='22px'
        />
    </div>
    <Link to={{pathname:'/Trailer', state: {movie:movie}}}>
    <button style={{fontSize:'20px', padding:'10px',border: 'none',
  borderRadius: '15px',boxShadow: '0 6px #999', fontWeight:'bolder', marginTop:'10px'}}>Details</button>
    </Link>
    

  </Card.Body>
</Card>
            
        </div>
    )
}

export default Moviecard
