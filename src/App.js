import './App.css';
import Product from './components/Product/ProductId'
import Viewer from './components/viewerid'
import ReviewsFetching from './components/reviewsFetching'
import moreRatings from './components/moreRatings.jsx'
import {Switch, Route} from 'react-router-dom';
import reviewStructure from './components/reviewStructure';


function App() {
  return (
    <switch>
    <Route exact path='/' component={Product}/>
    <Route exact path='/Product/:product_id/' component ={Viewer} />
    <Route exact path ='/Product/:product_id/Viewer/:viewer_id/' component={ReviewsFetching} />
    </switch>
  );
}

export default App;
