import React, { useCallback, useEffect } from 'react';

import { saveSearch } from '../../../../store/appSlice';
import useWindowDimensions, { useAppDispatch, useAppSelector } from '../../../../store/customHooks';
import { fetchCards } from '../../../../store/appSlice';

import './search.scss';

const Search = () => {
  const { genderValue, speciesValue, statusValue, currentPage, searchValue } = useAppSelector(
    (state) => state.app
  );
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  const getData = useCallback(async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const filter = `status=${statusValue !== 'all' ? statusValue : ''}&gender=${
      genderValue !== 'all' ? genderValue : ''
    }&species=${speciesValue !== 'all' ? speciesValue : ''}&page=${currentPage}`;
    const base = searchValue !== '' ? `${api}/?name=${searchValue}&${filter}` : `${api}/?${filter}`;
    dispatch(fetchCards(base));
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

  return (
    <div className={width <= 768 ? 'wrap__center' : 'wrap'}>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__term"
          placeholder="Search character"
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
