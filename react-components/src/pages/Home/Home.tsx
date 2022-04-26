import React, { useState } from 'react';

import Search from './components/search/Search';
import { Card } from './components/card/Card';
import { CharacterResult } from './interfaces';

import preloader from '../../assets/images/preloader.gif';
import error from '../../assets/images/error.png';
import './home.scss';

export function Home() {
  const [data, setData] = useState<Array<CharacterResult>>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function setHomeState(
    currentData: React.SetStateAction<CharacterResult[]>,
    errorMessage: string
  ) {
    setData(currentData);
    setIsLoaded(true);
    setErrorMessage(errorMessage);
  }

  return (
    <>
      <h1 data-testid="home-page">Home page</h1>
      <Search setHomeState={setHomeState} />
      {!isLoaded ? (
        <img
          src={preloader}
          alt="error image"
          className="preloader__img"
          data-testid="preloader"
        ></img>
      ) : errorMessage ? (
        <div className="error">
          <img src={error} alt="error image" className="error__img" />
          <div className="error__text">{errorMessage}</div>
        </div>
      ) : (
        <div className="wrapper">
          {data.map((item) => (
            <Card
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
      )}
    </>
  );
}
