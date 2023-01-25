import { Routes, Route, Outlet} from 'react-router-dom';

import Navigation from './Routes/navigation/navigation.component';
import Home from "./Routes/home/home.component";

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
      </Route>
    </Routes>
  );
};
export default App;