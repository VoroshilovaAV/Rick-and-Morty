import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { AppContext } from '../../../../reducer/reducer';

import './cardModal.scss';
import '../card/card.scss';

const CardModal = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const { created, image, name, status, species, type, gender } = state.currentCard;
  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'SAVE_CURRENT_CARD',
          payload: {
            currentCard: {
              id: data.id,
              created: data.created,
              image: data.image,
              name: data.name,
              status: data.status,
              species: data.species,
              type: data.type === '' ? 'unknown' : data.type,
              gender: data.gender,
            },
          },
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <h1>Card {id}</h1>
      <div className="wrapper">
        <button className="button__redirect" onClick={goHome}>
          &#8592; Back
        </button>
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
      </div>
    </>
  );
};

export default CardModal;
