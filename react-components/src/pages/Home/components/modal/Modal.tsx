import { Portal } from '../portal/Portal';
import { ICard } from '../card/Card';
import { ModalOverlay } from '../modalOverlay/ModalOverlay';
import { CardModal } from '../cardModal/CardModal';

import '../cardModal/cardModal.scss';

export function Modal(props: ICard) {
  return (
    <Portal>
      <div data-testid="modal" className="modal">
        <ModalOverlay />
        <CardModal
          created={props.created}
          image={props.image}
          name={props.name}
          status={props.status}
          species={props.species}
          type={props.type}
          gender={props.gender}
        />
        <div className="modal__wrapper">
          <button className="modal__close">&#10008;</button>
        </div>
      </div>
    </Portal>
  );
}
