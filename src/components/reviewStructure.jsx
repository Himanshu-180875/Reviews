import React,{Component} from 'react'
import Ratings from './ratings'

class reviewStructure extends Component {
  constructor(props){
    super(props);
    this.state = { 
      open:true
     }
     this.toggle=this.toggle.bind(this);

  }
  toggle(){
    this.setState({
     
      open:!this.state.open
    })
    
  }
  
  render() { 
    const { title,comment, usefulness,friend, reviewer, ratings} = this.props.data;
    
    return (
      <div className="row">
      <div className="column">
        <div className={this.state.open? "card": "card1"}>
        <div className="title">{title}</div>
        <span class="dot"></span>
        {friend? <div className="name">{reviewer.name}</div> : <div className="name">Anonymous</div>}
        <div className="comment">"{comment}"</div>
        <div className="usefulness"><span>Usefullness:</span> {usefulness}</div>
        
      <Ratings ratings={ratings.Overall} />
      <button className="More" onClick={this.toggle}>More</button>
      {!this.state.open ?
        <div  class="flip-card-back">
        <div className="other-ratings">
        <div className="Ratings-name">Delivery Time
        </div> 
       
        <Ratings ratings={ratings.delivery_time} />
      
        </div>
       
      
        <div className="other-ratings"><div className="Ratings-name">Discount and offers</div> 
        <Ratings ratings={ratings.discounts_and_offers} />
        </div>
        <div className="other-ratings"><div className="Ratings-name">Matches Description</div> 
        <Ratings ratings={ratings.matches_description} />
        </div>
        <div className="other-ratings"><div className="Ratings-name">Matches Photo</div> 
        <Ratings ratings={ratings.matches_photo} />
        </div>
        <div className="other-ratings"><div className="Ratings-name">Packaging</div> 
        <Ratings ratings={ratings.packaging} />
        </div>
        <div className="other-ratings"><div className="Ratings-name">Price</div> 
        <Ratings ratings={ratings.price} />
        </div>


        </div>
       
        :null
      }
     

     
      </div>
           
        </div>
     
  
        </div>
        
        
    )
  }
}
export default reviewStructure;
 

   
    

   



