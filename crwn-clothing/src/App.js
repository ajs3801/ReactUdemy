import { Routes, Route } from 'react-router-dom'; // routing

// import the routes
import Navigation from './Routes/navigation/navigation.component';
import Home from "./Routes/home/home.component";
import Authentication from './Routes/authentication/authentication.component';
import Shop from './Routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index={true} element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  );
};

export default App;