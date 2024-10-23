import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav nav-underline justify-content-center px-2 py-4 bg-body-tertiary">
      <NavLink className="nav-link" to="/" exact>
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/courses">
        Courses
      </NavLink>
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
