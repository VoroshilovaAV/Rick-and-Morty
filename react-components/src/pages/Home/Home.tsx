import { useEffect, useState } from 'react';

import Search from './components/search/Search';
import Card from './components/card/Card';
import FilterSwitcher from './components/filter/FilterSwitcher';
import { PaginationContainer } from './components/pagination/PaginationContainer';
import { useAppSelector } from '../../store/customHooks';

import preloader from '../../assets/images/preloader.gif';
import errorImg from '../../assets/images/error.png';
import './home.scss';

const Home = () => {
  const { error, results, genderValue, speciesValue, statusValue } = useAppSelector(
    (state) => state.app
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    setErrorMessage(error);
  }, [error, results, genderValue, speciesValue, statusValue]);

  return (
    <>
      <h1 data-testid="home-page"> Home page</h1>
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
      ) : errorMessage ? (
        <div className="error">
          <img src={errorImg} alt="error image" className="error__img" />
          <div className="error__text">{errorMessage}</div>
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
        </>
      )}
    </>
  );
};

export default Home;
