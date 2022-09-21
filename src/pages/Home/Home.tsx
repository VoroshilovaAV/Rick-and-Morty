import { useEffect } from 'react';

import Card from './components/card/Card';
import Search from './components/search/Search';
import FilterSwitcher from './components/filter/FilterSwitcher';
import { ReactComponent as WelcomeImg } from '../../assets/images/welcome.svg';
import { ReactComponent as ErrorImg } from '../../assets/images/error.svg';
import { PaginationContainer } from './components/pagination/PaginationContainer';
import useWindowDimensions, { useAppDispatch, useAppSelector } from '../../store/customHooks';
import { setIsLoaded } from '../../store/appSlice';

import preloader from '../../assets/images/preloader.gif';
import './home.scss';

const Home = () => {
  const { error, results, genderValue, speciesValue, statusValue, isLoaded } = useAppSelector(
    (state) => state.app
  );
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(setIsLoaded(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, results, genderValue, speciesValue, statusValue]);

  return (
    <>
      <WelcomeImg />
      {width <= 768 && <Search />}
      <fieldset className="filters">
        <p className="filter-text">Try filters:</p>
        <div className="wrapper__checkboxes">
          <FilterSwitcher />
        </div>
      </fieldset>
      {!isLoaded ? (
        <img
          src={preloader}
          alt="error image"
          className="preloader__img"
          data-testid="preloader"
        ></img>
      ) : error !== '' ? (
        <div className="error">
          <div className="error__img">
            <ErrorImg />{' '}
          </div>
          <div className="error__text">{error}</div>
        </div>
      ) : (
        <>
          <PaginationContainer />
          <div className="wrapper">
            {results.map((item) => (
              <Card
                id={item.id}
                key={item.id}
                created={item.created}
                image={item.image}
                name={item.name}
                status={item.status}
                species={item.species}
                type={item.type === '' ? 'unknown' : item.type}
                gender={item.gender}
              />
            ))}
          </div>
          <PaginationContainer />
        </>
      )}
    </>
  );
};

export default Home;
