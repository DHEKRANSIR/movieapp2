import React from 'react'
import { Card } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';


const Moviecard = ({movie}) => {
    const {Title,image,rating,description}= movie
    return (
        <div className='card'>
<Card style={{ width:'16rem', height:'24rem', margin:'0'}}>
  <Card.Img style={{height:'80%', width:'100%'}}  src={image} />
  <Card.Body>
    <div className='info'>
    <Card.Title style={{fontSize:'1.2rem', fontWeight:'bold'}}>{Title}</Card.Title>
    <StarRatings 
          rating={rating}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension='22px'
        />
    </div>
    <div className='overview'><p style={{fontSize:'0.7rem'}}>{description}</p></div>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Moviecard
