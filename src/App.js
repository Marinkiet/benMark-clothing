import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import { auth } from './firebase/firebase.utils';
class  App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);

    })
  }
  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }
  render(){
  return (
 
    <div >
      <Header
      currentUser = {this.state.currentUser}/>
      <Routes>
         <Route  exact path="/" element={<HomePage/>}/>
         <Route path="/shop" element={<ShopPage/>}/>
         <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  )
}
}
export default App;
