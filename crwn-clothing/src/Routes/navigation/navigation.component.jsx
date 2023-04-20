import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.componenet";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

// import for redux
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  // currentUser using redux
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  // sign out button handler
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        {/* link to / */}
        <LogoContainer to="/"> 
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          {/* link to /shop */}
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {/* link to /auth */}
          {currentUser ? 
            (
              <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
            )
            :
            (
              <NavLink to='/auth'>
              SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
          {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      {/* outlet explanation in React Router: https://reactrouter.com/en/main/components/outlet */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;