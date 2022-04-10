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

type Props = () => null;
type State = { subscribers: Array<FormState> };

class Forms extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.setFormState = this.setFormState.bind(this);
    this.state = {
      subscribers: [],
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
          {this.state.subscribers.map((item: FormState, index: number) => {
            return <Subscriber item={item} key={index} />;
          })}
        </div>
      </>
    );
  }
}

export default Forms;
