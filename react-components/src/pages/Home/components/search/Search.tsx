import React, { useCallback, useContext, useEffect } from 'react';
import { AppContext } from '../../../../reducer/reducer';
import { CharactersData } from '../../interfaces';
import './search.scss';

const Search = () => {
  const { state, dispatch } = useContext(AppContext);

  const getData = useCallback(async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const filter = `status=${state.statusValue !== 'all' ? state.statusValue : ''}&gender=${
      state.genderValue !== 'all' ? state.genderValue : ''
    }&species=${state.speciesValue !== 'all' ? state.speciesValue : ''}`;
    const base =
      state.searchValue !== ''
        ? `${api}/?name=${state.searchValue}&${filter}`
        : `${api}/?${filter}`;
    try {
      const response = await fetch(`${base}`);
      if (!response.ok) {
        throw Error('No data was found for this query');
      } else {
        const data: CharactersData = await response.json();
        dispatch({
          type: 'SAVE_VALUE',
          payload: {
            info: {
              count: data.info.count,
              pages: data.info.pages,
              next: data.info.next,
              prev: data.info.prev,
            },
            results: data.results,
            error: '',
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'SAVE_VALUE',
        payload: {
          info: {
            count: 0,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [],
          error: getErrorMessage(error),
        },
      });
    }
  }, [dispatch, state]);

  useEffect(() => {
    getData();
    return () => {
      state.searchValue;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.genderValue, state.speciesValue, state.statusValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch({
      type: 'SAVE_VALUE',
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
