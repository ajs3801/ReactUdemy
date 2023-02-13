import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.componenet";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // sign out button handler
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        {/* link to / */}
        <Link className="logo-container" to="/"> 
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          {/* link to /shop */}
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>

          {/* link to /auth */}
          {currentUser ? 
            (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            )
            :
            (
              <Link className="nav-link" to='/auth'>
              SIGN IN
              </Link>
            )
          }
          <CartIcon />
        </div>
          {isCartOpen && <CartDropdown />}
      </div>

      {/* outlet explanation in React Router: https://reactrouter.com/en/main/components/outlet */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;