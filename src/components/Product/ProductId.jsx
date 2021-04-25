import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    constructor(){
        super();

        this.state = { 
            Cards: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
          
       
        };
      
     
    }

    render() { 
      return(
         <div className="background-styling">
         <div className="Heading">To Continue, Please Select the Product Id
         </div>

        <div className="cards">{this.state.Cards.map(i => 
            <div key={i} className="cards-style">
            <h1 className="Numbers"><Link  to={`/Product/${i}`}>{i}</Link></h1>
            </div>
           
            )}
            </div>

        </div>
      )
}
}

 
export default Product;