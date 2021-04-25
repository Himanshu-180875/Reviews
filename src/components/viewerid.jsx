import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Viewer extends Component {
    constructor(){
        super();

        this.state = { 
            Cards: [1,2,3,4,5,6,7,8,9,10],
          
       
        };
      
     
    }

    render() { 
      return(
         <div className="viewer-backround">
         <div className="Heading">To Continue, Please Select the Viewer Id
         </div>

        <div className="cards">{this.state.Cards.map(i => 
            <div key={i} className="cards-style">
            <h1 className="Numbers"><Link  to={`/Product/${this.props.match.params.product_id}/Viewer/${i}`}>{i}</Link></h1>
            </div>
           
            )}
            </div>

        </div>
      )
}
}

 
export default Viewer;