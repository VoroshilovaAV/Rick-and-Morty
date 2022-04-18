import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from './Home';

const expectedData = {
  info: {
    count: 1,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
      },
      location: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/27'],
      url: 'https://rickandmortyapi.com/api/character/6',
      created: '2017-11-04T19:50:28.250Z',
    },
  ],
};

const api = 'https://rickandmortyapi.com/api/character?name=abadan';
function getCharacter() {
  return fetch(api)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => json);
}

describe('fetch request', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expectedData),
      } as Response;
      return Promise.resolve(fetchResponse);
    });
  });
  test('returns card data', async () => {
    const json = await getCharacter();
    expect(json).toMatchObject(expectedData);
  });
});

describe('Home page', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expectedData),
      } as Response;
      return Promise.resolve(fetchResponse);
    });
  });
  test('renders modal window', async () => {
    render(<Home />);
    userEvent.click(await screen.findByText(/Abadango/i));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
  test('renders preloader', async () => {
    render(<Home />);
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
    screen.debug();
  });
});
