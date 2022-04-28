import { useState } from 'react';
import Form from './components/form/Form';
import { Subscriber } from './components/subscriber/Subscriber';

export interface FormState {
  name: string;
  surname: string;
  date: string;
  country: string;
  file: string;
  gender: string;
  id: number;
}

export function Forms() {
  const [subscribers, setSubscribers] = useState<Array<FormState>>([]);

  function setFormState(currentCard: FormState) {
    setSubscribers([...subscribers, currentCard]);
  }

  return (
    <>
      <h1>Create a subscriber card</h1>
      <Form setFormState={setFormState} />
      <div className="wrapper">
        {subscribers.map((item: FormState) => {
          return <Subscriber item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
