import { useEffect, useState } from 'react';
import { saveFormCards } from '../../store/appSlice';
import { useAppDispatch, useAppSelector } from '../../store/customHooks';
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
  const [subscribers, setSubscribers] = useState<Array<FormState>>([]);
  const formCard = useAppSelector((state) => state.app.formCard);
  const dispatch = useAppDispatch();

  const setFormState = (currentCard: FormState) => {
    setSubscribers([...subscribers, currentCard]);
  };

  useEffect(() => {
    if (formCard.length !== 0 && subscribers.length === 0) {
      setSubscribers([...subscribers, ...formCard]);
    }
    if (subscribers.length !== 0) {
      dispatch(saveFormCards({ formCard: subscribers }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribers]);

  return (
    <>
      <h1>Create a subscriber card</h1>
      <Form setFormState={setFormState} />
      <div className="wrapper">
        {formCard.map((item: FormState) => {
          return <Subscriber item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Forms;
