import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
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
          <Link className="nav-link" to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>

      {/* outlet explanation in React Router: https://reactrouter.com/en/main/components/outlet */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;