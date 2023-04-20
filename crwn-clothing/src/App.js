// routing
import { Routes, Route } from 'react-router-dom';

// import user provider
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { 
  createUserDocumentFromAuth, 
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from './store/user/user.action';

// import the routes
import Navigation from './Routes/navigation/navigation.component';
import Home from "./Routes/home/home.component";
import Authentication from './Routes/authentication/authentication.component';
import Shop from './Routes/shop/shop.component';
import Checkout from './Routes/checkout/checkout.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    // App returns the Routes
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index={true} element={<Home />}/> 
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  );
};

export default App;