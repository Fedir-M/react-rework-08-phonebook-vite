import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import s from './Header.module.css';

function Header() {
  return (
    <header>
        <nav className={s.navbar}>
        <ul className={s.navbarList}>
            <li>
            <NavLink end to={'/'} className={({ isActive }) => clsx(s.link, isActive && s.active)}>Home</NavLink>
            </li>
            <li>
            <NavLink to={'/register'} className={({ isActive }) => clsx(s.link, isActive && s.active)}>Register</NavLink>
            </li>
            <li>
            <NavLink to={'/login'} className={({ isActive }) => clsx(s.link, isActive && s.active)}>Login</NavLink>
            </li>
        </ul>
        <p to={'/isStatus'} className={s.statusEmail}>Profile: martynoff@ukr.net</p>
         </nav>
        </header>
  )
}

export default Header