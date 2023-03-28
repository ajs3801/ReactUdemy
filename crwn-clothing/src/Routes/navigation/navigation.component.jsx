import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.componenet";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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