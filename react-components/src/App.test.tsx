import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from './pages/Home/Home';

describe('test app', () => {
  test('renders home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homePageText = screen.getByText(/Home page/i);
    const searchBar = screen.getByPlaceholderText(/Search card/i);
    const cardDate = screen.getByText(/24.03.2022/i);
    expect(homePageText).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
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

  test('renders cards', () => {
    render(<Home />);
    const cardCount = screen.getAllByTestId(/card-component/i);
    const totalCards = 6;
    expect(cardCount).toHaveLength(totalCards);
  });
});
