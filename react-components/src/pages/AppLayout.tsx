import { NavLink, Outlet } from 'react-router-dom';

export default function AppLayout() {
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
