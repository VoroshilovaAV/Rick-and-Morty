import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from '../../App';
import Forms from './Forms';

const createCard = (name: string, surname: string, date: string, country: string) => {
  global.URL.createObjectURL = jest.fn();
  userEvent.type(screen.getByTestId('name'), name);
  userEvent.type(screen.getByTestId('surname'), surname);
  fireEvent.change(screen.getByTestId('date'), { target: { value: date } });
  fireEvent.change(screen.getByTestId('country'), { target: { value: country } });
  const file = new File(['test'], 'test.png', { type: 'image/png' });
  fireEvent.change(screen.getByTestId('file'), file);
  userEvent.click(screen.getByTestId('agree'));
  userEvent.click(screen.getByDisplayValue('Submit'));
};

describe('Forms page', () => {
  test('renders header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const formsLink = screen.getByTestId('forms-link');
    userEvent.click(formsLink);
    const formsHeader = screen.getByText(/Create a subscriber card/i);
    expect(formsHeader).toBeInTheDocument();
  });

  test('showing validation errors', () => {
    render(<Forms />);
    const nameInput = screen.getByTestId('name');
    expect(nameInput).toContainHTML('');
    fireEvent.input(nameInput, {
      target: { value: 'test123123' },
    });
    userEvent.click(screen.getByDisplayValue('Submit'));
    const nameError = screen.getByText(/enter a valid name/i);
    expect(nameError).toBeInTheDocument();
  });

  test('reset after create card', async () => {
    render(<Forms />);
    createCard('John', 'Smith', '1986-04-20', 'Russia');
    const name: HTMLInputElement = await screen.findByTestId('name');
    const surname: HTMLInputElement = await screen.findByTestId('surname');
    const date: HTMLInputElement = await screen.findByTestId('date');
    const country: HTMLInputElement = await screen.findByTestId('country');
    const file: HTMLInputElement = await screen.findByTestId('file');
    expect(name.value).toBe('');
    expect(surname.value).toBe('');
    expect(date.value).toBe('');
    expect(country.value).toBe('USA');
    expect(file.value).toBe('');
  });
});
