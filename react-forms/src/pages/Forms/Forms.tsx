import React from 'react';
import Form from './components/form/Form';

export interface FormState {
  name: string;
  surname: string;
  date: string;
  country: string;
  file: string;
  gender: string;
  validateData: Array<string>;
  isDisabled: boolean;
}

class Forms extends React.Component {
  state = { cards: [] };

  setFormState(currentCard: FormState) {
    return this.setState({ cards: [...this.state.cards, currentCard] });
  }

  render() {
    return (
      <>
        <h1 data-testid="forms-page">Create a subscriber card</h1>
        <Form value={undefined} />
      </>
    );
  }
}

export default Forms;
