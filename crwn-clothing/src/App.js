import { Routes, Route } from 'react-router-dom'; // routing

// import the routes
import Navigation from './Routes/navigation/navigation.component';
import Home from "./Routes/home/home.component";
import Authentication from './Routes/authentication/authentication.component';
import Shop from './Routes/shop/shop.component';
import Checkout from './Routes/checkout/checkout.component';

const App = () => {
  return (
    // App returns the Routes
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index={true} element={<Home />}/> 
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;