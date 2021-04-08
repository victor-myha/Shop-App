import './App.css';
import {Route,Redirect} from 'react-router-dom';
import Products from './components/Products';
import Details from './components/Details';
const App = () => {
 
  return (
    <div>
      <Route exact path='/' render={() => <Redirect to={'/products'}/>}/>
      <Route path='/products' render={()=><Products/>} />
      <Route path='/details/:productId?' render={()=><Details/>} />
    </div>
  );
}

export default App;
