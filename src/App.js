import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
function App() {
  return (
 
    <div >
      <Header/>
      <Routes>
         <Route  exact path="/" element={<HomePage/>}/>
         <Route   path="/shop" element={<ShopPage/>}/>
         <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
