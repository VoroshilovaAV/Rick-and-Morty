import './subscriber.scss';
import { FormState } from '../../Forms';

const Subscriber = (props: { item: FormState }) => {
  return (
    <>
      <div className="wrapper">
        <div data-testid="subscriber" className="subscriber">
          <img className="subscriber__img" src={props.item.file} alt="avatar" />
          <div className="subscriber__info">
            <h4 className="subscriber__name">
              {props.item.name} {props.item.surname}
            </h4>
            <hr />
            <p className="subscriber__text">Date of Birth: {props.item.date}</p>
            <p className="subscriber__text">Country: {props.item.country}</p>
            <p className="subscriber__text">Gender: {props.item.gender}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscriber;
