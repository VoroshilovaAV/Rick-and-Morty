import React, { useCallback, useEffect } from 'react';

import { saveCards, saveSearch } from '../../../../store/appSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/customHooks';
import { CharactersData } from '../../interfaces';

import './search.scss';

const Search = () => {
  const { genderValue, speciesValue, statusValue, currentPage, searchValue } = useAppSelector(
    (state) => state.app
  );
  const dispatch = useAppDispatch();

  const getData = useCallback(async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const filter = `status=${statusValue !== 'all' ? statusValue : ''}&gender=${
      genderValue !== 'all' ? genderValue : ''
    }&species=${speciesValue !== 'all' ? speciesValue : ''}&page=${currentPage}`;
    const base = searchValue !== '' ? `${api}/?name=${searchValue}&${filter}` : `${api}/?${filter}`;
    try {
      const response = await fetch(`${base}`);
      if (!response.ok) {
        throw Error('No data was found for this query');
      } else {
        const data: CharactersData = await response.json();
        dispatch(
          saveCards({
            info: {
              count: data.info.count,
              pages: data.info.pages,
              next: data.info.next,
              prev: data.info.prev,
            },
            results: data.results,
            error: '',
          })
        );
      }
    } catch (error) {
      dispatch(
        saveCards({
          info: {
            count: 0,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [],
          error: getErrorMessage(error),
        })
      );
    }
  }, [currentPage, dispatch, genderValue, searchValue, speciesValue, statusValue]);

  useEffect(() => {
    getData();
    return () => {
      searchValue;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genderValue, speciesValue, statusValue, currentPage]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch(saveSearch(inputValue));
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
          value={searchValue}
        />
        <button type="submit" className="search__button">
          &#128269;
        </button>
      </form>
    </div>
  );
};

export default Search;
