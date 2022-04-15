import React from 'react';
import Form from './components/form/Form';
import Subscriber from './components/subscriber/Subscriber';

export interface FormState {
  name: string;
  surname: string;
  date: string;
  country: string;
  file: string;
  gender: string;
}

type State = { subscribers: Array<FormState>; counter: number };

class Forms extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);
    this.setFormState = this.setFormState.bind(this);
    this.state = {
      subscribers: [],
      counter: 0,
    };
  }

  setFormState(currentCard: FormState) {
    this.setState({ subscribers: [...this.state.subscribers, currentCard] });
  }

  render() {
    return (
      <>
        <h1>Create a subscriber card</h1>
        <Form setFormState={this.setFormState} />
        <div className="wrapper">
          {this.state.subscribers.map((item: FormState) => {
            this.setState({ counter: this.state.counter + 1 });
            return <Subscriber item={item} key={this.state.counter} />;
          })}
        </div>
      </>
    );
  }
}

export default Forms;
