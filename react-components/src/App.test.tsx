import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { Home } from './pages/Home/Home';

import { MemoryRouter } from 'react-router-dom';
import { mockLocalStorage } from './mocks/local-storage-mock';

const { setItemMock } = mockLocalStorage();

describe('test app', () => {
  test('renders home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homePageText = screen.getByText(/Home page/i);
    const searchBar = screen.getByPlaceholderText(/Search card/i);
    expect(homePageText).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
  });

  test('input event', () => {
    render(<Home />);
    const searchBar = screen.getByPlaceholderText(/Search card/i);
    expect(searchBar).toContainHTML('');
    fireEvent.input(searchBar, {
      target: { value: 'test123123' },
    });
    expect(searchBar).toContainHTML('test123123');
  });

  test('router', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('error page', () => {
    render(
      <MemoryRouter initialEntries={['/sdgdfgdg']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });

  test('expects something to be set in localStorage', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const searchBar = screen.getByPlaceholderText(/Search card/i);
    const aboutLink = screen.getByTestId('about-link');
    expect(searchBar).toContainHTML('');
    fireEvent.input(searchBar, {
      target: { value: 'testLS' },
    });
    userEvent.click(aboutLink);
    expect(setItemMock).toHaveBeenCalledWith('searchValue', '"testLS"');
  });
});
