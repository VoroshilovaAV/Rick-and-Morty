import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../reducer/reducer';
import Form from './components/form/Form';
import Subscriber from './components/subscriber/Subscriber';

export interface FormState {
  name: string;
  surname: string;
  date: string;
  country: string;
  file: string;
  gender: string;
  id: number;
}

const Forms = () => {
  const { state, dispatch } = useContext(AppContext);
  const [subscribers, setSubscribers] = useState<Array<FormState>>([]);

  const setFormState = (currentCard: FormState) => {
    setSubscribers([...subscribers, currentCard]);
  };

  useEffect(() => {
    if (state.FormCard.length !== 0 && subscribers.length === 0) {
      setSubscribers([...subscribers, ...state.FormCard]);
    }
    if (subscribers.length !== 0) {
      dispatch({
        type: 'SAVE_FORM_CARDS',
        payload: {
          FormCard: subscribers,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribers]);

  return (
    <>
      <h1>Create a subscriber card</h1>
      <Form setFormState={setFormState} />
      <div className="wrapper">
        {state.FormCard.map((item: FormState) => {
          return <Subscriber item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Forms;
