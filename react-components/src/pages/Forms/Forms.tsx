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
  id: number;
}

type State = { subscribers: Array<FormState> };

class Forms extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.setFormState = this.setFormState.bind(this);
    this.state = {
      subscribers: [],
    };
  }

  setFormState(currentCard: FormState) {
    this.setState({
      subscribers: [...this.state.subscribers, currentCard],
    });
  }

  render() {
    return (
      <>
        <h1>Create a subscriber card</h1>
        <Form setFormState={this.setFormState} />
        <div className="wrapper">
          {this.state.subscribers.map((item: FormState) => {
            return <Subscriber item={item} key={item.id} />;
          })}
        </div>
      </>
    );
  }
}

export default Forms;
