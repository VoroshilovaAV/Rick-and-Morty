import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export function Portal(children: React.PropsWithChildren<{ example?: string }>) {
  const [modalContainer] = useState(document.createElement('div'));
  useEffect(() => {
    let modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
      const tempEl = document.createElement('div');
      tempEl.id = 'modal-root';
      document.body.append(tempEl);
      modalRoot = tempEl;
    }

    modalRoot.appendChild(modalContainer);
    return function cleanup() {
      modalRoot?.removeChild(modalContainer);
    };
  }, [modalContainer]);

  return ReactDOM.createPortal(children, modalContainer);
}
