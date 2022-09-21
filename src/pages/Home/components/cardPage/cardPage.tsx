import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../store/customHooks';
import { fetchCard } from '../../../../store/appSlice';

import preloader from '../../../../assets/images/preloader.gif';
import './cardPage.scss';
import '../card/card.scss';

const CardModal = () => {
  const navigate = useNavigate();
  const { currentCard, isLoaded } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { created, image, name, status, species, type, gender } = currentCard;
  const goHome = () => {
    navigate('/');
  };

  const getCard = useCallback(async () => {
    const base = `https://rickandmortyapi.com/api/character/${id}`;
    dispatch(fetchCard(base));
  }, [dispatch, id]);

  useEffect(() => {
    getCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <header className="header__fullCard">
        <h1>Card {id}</h1>
      </header>
      <div className="wrapper">
        <button className="button__redirect" onClick={goHome}>
          &#8592; Back
        </button>
        {!isLoaded ? (
          <img
            src={preloader}
            alt="error image"
            className="preloader__img"
            data-testid="preloader"
          ></img>
        ) : (
          <>
            <div className="card__title">
              <h3>{name}</h3>
              <hr />
            </div>
            <div className="card__content">
              <img className="card__img" src={image} alt="card image" />
              <ul>
                <li>Gender: {gender}</li>
                <li>Species: {species}</li>
                <li>Status: {status}</li>
                <li>Type: {type}</li>
                <li>Created: {created}</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CardModal;
