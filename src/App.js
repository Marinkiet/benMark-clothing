import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignupPage from './pages/sign-in-and-signup/sign-in-and-signup.components';

function App() {
  return (
 
    <div >
      <Header/>
      <Switch>
         <Route  exact path="/" component = {HomePage}/>
         <Route  path="/shop" component = {ShopPage}/>
         <Route path='/signin' component={SignInAndSignupPage}/>
      </Switch>
    </div>
  );
}

export default App;
