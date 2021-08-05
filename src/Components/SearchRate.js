import React from 'react'
import StarRatings from 'react-star-ratings';
const SearchRate = ({rate,setRate}) => {
    
    const changeRating=( newRating) =>{
        setRate(newRating)}
    return (
        <div>
            <StarRatings
          rating={rate}
          starRatedColor="yellow"
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
          starEmptyColor='rgb(37, 37, 37)'
        />
        <button style={{padding:'10px', backgroundColor:'dimgray',borderRadius:'5px 5px',fontWeight:'bold',marginLeft:'30px'}} onClick={()=>{setRate(0)}}>Reset</button>
        </div>
    )
}

export default SearchRate
