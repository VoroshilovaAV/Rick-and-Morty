import React, { LegacyRef } from 'react';
import './index.scss';
import './checkbox.scss';
import './input-file.scss';

export interface CardState {
  name: string;
  surname: string;
  date: Date;
  country: string;
  file: string;
  gender: string;
  checkbox: boolean;
}

type Props = { value: string | undefined };
type State = Array<CardState>;

class Forms extends React.Component<Props, State> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countryInput: LegacyRef<HTMLSelectElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  switcherInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.countryInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.switcherInput = React.createRef();
    this.fileInput = React.createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    alert('Отправленное имя: ' + this.nameInput.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1 data-testid="forms-page">Create a subscriber card</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="forms">
            <label className="forms__name">
              Name:
              <br />
              <input type="text" ref={this.nameInput} />
            </label>
            <br />
            <label className="forms__surname">
              Surname:
              <br />
              <input type="text" ref={this.surnameInput} />
            </label>
            <br />
            <label className="forms__date">
              Date of Birth:
              <br />
              <input type="date" ref={this.dateInput} />
            </label>
            <br />
            <label htmlFor="input__country" className="forms__country">
              Country:
              <br />
            </label>
            <select name="input__country" ref={this.countryInput}>
              <option value="usa">USA</option>
              <option value="russia">Russia</option>
              <option value="belarus">Belarus</option>
              <option value="ukraine">Ukraine</option>
              <option value="poland">Poland</option>
              <option value="uk">UK</option>
            </select>
            <br />
            <label htmlFor="forms__file__input" className="forms__file">
              Upload an avatar
              <input type="file" id="forms__file__input" ref={this.fileInput} />
            </label>
            <br />
            <span>Gender:</span>
            <div>
              <input type="radio" id="man" name="contact" value="man" />
              <label htmlFor="man" className="forms__radio__text">
                Man
              </label>
              <input type="radio" id="woman" name="contact" value="woman" />
              <label htmlFor="woman" className="forms__radio__text">
                Woman
              </label>
            </div>
            <br />
            <span className="forms__checkbox__text">
              I agree to the processing of personal data:
            </span>
            <label className="forms__checkbox">
              <input type="checkbox" ref={this.checkboxInput} />
              <span className="forms__slider round"></span>
            </label>
            <br />
            <input type="submit" value="Submit" className="forms__submit" />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Forms;
