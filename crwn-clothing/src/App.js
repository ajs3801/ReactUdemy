import { Routes, Route } from 'react-router-dom';

import Navigation from './Routes/navigation/navigation.component';
import Home from "./Routes/home/home.component";
import Authentication from './Routes/authentication/authentication.component';

const Shop = () => {
  return (
    <h1>I am the shop</h1>
  );
};

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