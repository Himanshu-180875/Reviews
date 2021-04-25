import React from 'react'

function Ratings(props) {
   const starsTotal = 5;
   const starPercentage = (props.ratings / starsTotal) * 100;

   const starPercentageRounded = `${Math.round(starPercentage/10) *10}%`;
  
  

 
  return(
      <div className="Ratings">
     <div style={{'width': starPercentageRounded}} >
     
    </div>
      
    <img src="https://raw.githubusercontent.com/Himanshu-180875/OOPS-BT-CSE-405/master/stars.png" />
      </div>
  )
       
   }
   

   

    
  


export default Ratings;
