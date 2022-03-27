import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class AppLayout extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/" data-testid="home-link">
            Home
          </NavLink>
          <NavLink to="/about" data-testid="about-link">
            About us
          </NavLink>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>RSS 2022</footer>
      </>
    );
  }
}

export default AppLayout;
