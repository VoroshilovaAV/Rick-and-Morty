import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from './Home/components/footer/Footer';
import Search from './Home/components/search/Search';

export default function AppLayout() {
  return (
    <>
      <header>
        <div className="header-blank"></div>
        <div className="header-menu">
          <NavLink className="header-menu__item" to="/" data-testid="home-link">
            Home
          </NavLink>
          <NavLink className="header-menu__item" to="/forms" data-testid="forms-link">
            Forms
          </NavLink>
          <NavLink className="header-menu__item" to="/about" data-testid="about-link">
            About app
          </NavLink>
        </div>
        <Search />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
