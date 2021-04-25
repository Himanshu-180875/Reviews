import React, {Component} from 'react';
import Pagination from './pagination';
import ReviewStructure from './reviewStructure';

class ReviewsFetching extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            
          }
       
        
    }
    componentDidMount(){
        fetch(`http://www.i2ce.in/reviews/${this.props.match.params.product_id}/${this.props.match.params.viewer_id}`)
        .then(res=>res.json())
        .then(data => this.setState({
            reviews: data.reviews
        }))
    }
    

    render() { 
        return ( 
            <div>
           
            {this.state.reviews.length>0 ? (
               <div>
          
            <Pagination
            data={this.state.reviews}
            RenderComponent ={ReviewStructure}
            pageLimit={5}
            dataLimit={3} />
          
            </div>

            ) : (
               null
            )}
            
        
           
            </div>
         );
    }
}
 
export default ReviewsFetching;