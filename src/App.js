import './App.css';
import {NavLink,Route,Redirect} from 'react-router-dom';
import Products from './components/Products';
import Details from './components/Details';
import style from './components/Products.module.css';
import logo from './img/Garmonia.png';
const App = () => {
 
  return (
    <div>
      <NavLink to={'/products'}><h1 className={style.headerName}><img className={style.logoImg} src={logo}/></h1></NavLink>
      <hr/>
      <Route exact path='/' render={() => <Redirect to={'/products'}/>}/>
      <Route path='/products' render={()=><Products/>} />
      <Route path='/details/:productId?' render={()=><Details/>} />
    </div>
  );
}

export default App;
