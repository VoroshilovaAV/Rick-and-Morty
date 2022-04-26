import React, { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { CharacterResult, CharactersData } from '../../interfaces';
import './search.scss';

type Props = {
  setHomeState(currentData: React.SetStateAction<CharacterResult[]>, errorMessage: string): void;
};

const Search: React.FC<Props> = ({ setHomeState }) => {
  const [value, setValue] = useState(calculateValue);

  const refValue = useRef('');
  refValue.current = value;

  function calculateValue() {
    const currentValue = localStorage.getItem('searchValue') || null;
    return currentValue !== null ? JSON.parse(currentValue) : '';
  }

  const getData = useCallback(async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const base = value !== '' ? `${api}/?name=${value}` : `${api}`;
    try {
      const response = await fetch(`${base}`);
      if (!response.ok) {
        throw Error('No data was found for this query');
      } else {
        const data: CharactersData = await response.json();
        setHomeState(data.results, '');
      }
    } catch (error) {
      setHomeState([], getErrorMessage(error));
    }
  }, [setHomeState, value]);

  useEffect(() => {
    if (localStorage.getItem('searchValue')) {
      setValue(JSON.parse(localStorage.getItem('searchValue') || ''));
    }
    getData();
    return () => {
      localStorage.setItem('searchValue', JSON.stringify(refValue.current));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    getData();
  }

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

  return (
    <div className="wrap">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__term"
          placeholder="Search card"
          onChange={handleChange}
          value={value}
        />
        <button type="submit" className="search__button">
          &#128269;
        </button>
      </form>
    </div>
  );
};

export default Search;
