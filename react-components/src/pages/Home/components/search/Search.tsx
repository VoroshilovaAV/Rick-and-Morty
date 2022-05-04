import React, { useCallback, useContext, useEffect } from 'react';
import { AppContext } from '../../../../reducer';
import { CharacterResult, CharactersData } from '../../interfaces';
import './search.scss';

type Props = {
  setHomeState(currentData: React.SetStateAction<CharacterResult[]>, errorMessage: string): void;
};

const Search: React.FC<Props> = ({ setHomeState }) => {
  const { state, dispatch } = useContext(AppContext);

  const getData = useCallback(async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const base = state.searchValue !== '' ? `${api}/?name=${state.searchValue}` : `${api}`;
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
  }, [setHomeState, state.searchValue]);

  useEffect(() => {
    getData();
    return () => {
      state.searchValue;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch({
      type: 'SAVE_SEARCH_VALUE',
      payload: {
        searchValue: inputValue,
      },
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    getData();
  };

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error);
  };

  return (
    <div className="wrap">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__term"
          placeholder="Search card"
          onChange={handleChange}
          value={state.searchValue}
        />
        <button type="submit" className="search__button">
          &#128269;
        </button>
      </form>
    </div>
  );
};

export default Search;
