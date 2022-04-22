import { useState } from 'react';
import { CardModal } from '../cardModal/CardModal';
import Modal from '../modal/Modal';
import './card.scss';

export interface ICard {
  created: string;
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export function Card(props: ICard) {
  const [isModalShown, setModal] = useState(false);

  return (
    <>
      <button className="card-button" onClick={() => setModal(!isModalShown)}>
        {isModalShown && (
          <Modal>
            <CardModal
              created={props.created}
              image={props.image}
              name={props.name}
              status={props.status}
              species={props.species}
              type={props.type}
              gender={props.gender}
            />
          </Modal>
        )}
        <div data-testid="card-component" className="card">
          <div className="card__title">
            <h3>{props.name}</h3>
            <hr />
          </div>
          <div className="card__content">
            <img className="card__img" src={props.image} alt="card image" />
            <ul>
              <li>Gender: {props.gender}</li>
              <li>Species: {props.species}</li>
              <li>Status: {props.status}</li>
            </ul>
          </div>
        </div>
      </button>
    </>
  );
}
