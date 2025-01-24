import { NavLink } from "react-router-dom";
import clsx from "clsx";

import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector, userEmailSelector } from "../../redux/Auth/authSelectors";
import { logOutUser } from "../../redux/Auth/authOperations";

function Header() {
  const isAuth = useSelector(isAuthSelector);
  const userEmail = useSelector(userEmailSelector);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <header>
      <nav className={s.navbar}>
        <ul className={s.navbarList}>
          <li>
            <NavLink
              end
              to={"/"}
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
            >
              Home
            </NavLink>
          </li>
          {isAuth ? (
            <li>
              <button
                onClick={handleLogout}
                className={clsx(s.link, s.logoutButton)}
              >
                LogOut
              </button>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/register"}
                  className={({ isActive }) =>
                    clsx(s.link, isActive && s.active)
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    clsx(s.link, isActive && s.active)
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {isAuth && userEmail && <p className={s.statusEmail}>Profile: {userEmail}</p>}
      </nav>
    </header>
  );
}

export default Header;
