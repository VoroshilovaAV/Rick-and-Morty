import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useWindowDimensions from '../store/customHooks';
import { Footer } from './Home/components/footer/Footer';
import Search from './Home/components/search/Search';

export default function AppLayout() {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <>
      {location.pathname === '/' && width >= 768 ? (
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
      ) : (
        <header className="header__center">
          <NavLink className="header-menu__item" to="/" data-testid="home-link">
            Home
          </NavLink>
          <NavLink className="header-menu__item" to="/forms" data-testid="forms-link">
            Forms
          </NavLink>
          <NavLink className="header-menu__item" to="/about" data-testid="about-link">
            About app
          </NavLink>
        </header>
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
