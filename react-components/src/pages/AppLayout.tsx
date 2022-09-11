import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from './Home/components/footer/Footer';

export default function AppLayout() {
  return (
    <>
      <header>
        <NavLink to="/" data-testid="home-link">
          Home
        </NavLink>
        <NavLink to="/forms" data-testid="forms-link">
          Forms
        </NavLink>
        <NavLink to="/about" data-testid="about-link">
          About app
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
