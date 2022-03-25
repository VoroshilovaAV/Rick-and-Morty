import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class AppLayout extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
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
