import { useEffect } from 'react';

import Search from './components/search/Search';
import Card from './components/card/Card';
import FilterSwitcher from './components/filter/FilterSwitcher';
import { PaginationContainer } from './components/pagination/PaginationContainer';
import { useAppDispatch, useAppSelector } from '../../store/customHooks';
import { setIsLoaded } from '../../store/appSlice';

import preloader from '../../assets/images/preloader.gif';
import errorImg from '../../assets/images/error.png';
import welcomeImg from '../../assets/images/welcome.png';
import './home.scss';

const Home = () => {
  const { error, results, genderValue, speciesValue, statusValue, isLoaded } = useAppSelector(
    (state) => state.app
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoaded(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, results, genderValue, speciesValue, statusValue]);

  return (
    <>
      <img src={welcomeImg} alt="welcome image" className="welcome__img"></img>
      <Search />
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
          <img src={errorImg} alt="error image" className="error__img" />
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
