import React, { LegacyRef } from 'react';
import './form.scss';
import './switcher.scss';
import './input-file.scss';

type Props = { value: undefined };
type State = {
  name: string;
  surname: string;
  date: string;
  country: string;
  file: string;
  gender: string;
  validateData: Array<string>;
  isDisabled: boolean;
};

class Form extends React.Component<Props, State> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countryInput: LegacyRef<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  genderInput: React.RefObject<HTMLInputElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.form = React.createRef();
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.countryInput = React.createRef();
    this.fileInput = React.createRef();
    this.genderInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.state = {
      name: '',
      surname: '',
      date: '',
      country: '',
      file: '',
      gender: '',
      validateData: [''],
      isDisabled: true,
    };
  }

  async handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    await this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      isDisabled: false,
    }));
  }

  async handleSubmit(event: { preventDefault: () => void }) {
    await this.validate();
    event.preventDefault();
    console.log(this.state);
  }

  isNotValidString(testString: string) {
    return testString.length < 3 || testString.length > 15 || !/^[a-zA-Z]+$/.test(testString);
  }

  validate() {
    const errors = [];
    this.setState({ validateData: [''] });
    if (this.isNotValidString(this.state.name)) {
      errors.push('name');
    }
    if (this.isNotValidString(this.state.surname)) {
      errors.push('surname');
    }
    this.setState({ validateData: errors });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} ref={this.form}>
          <fieldset className="forms">
            <label className="forms__name">
              Name:
              <br />
              <input type="text" ref={this.nameInput} name="name" onChange={this.handleChange} />
              {this.state.validateData.includes('name') ? (
                <p className="forms__name_error">please enter a valid name</p>
              ) : (
                <p className="forms__name_hide">hide</p>
              )}
            </label>
            <label className="forms__surname">
              Surname:
              <br />
              <input
                type="text"
                ref={this.surnameInput}
                name="surname"
                onChange={this.handleChange}
              />
              {this.state.validateData.includes('surname') ? (
                <p className="forms__name_error">please enter a valid surname</p>
              ) : (
                <p className="forms__name_hide">hide</p>
              )}
            </label>
            <label className="forms__date">
              Date of Birth:
              <br />
              <input type="date" name="date" ref={this.dateInput} />
            </label>
            <br />
            <label htmlFor="input__country" className="forms__country">
              Country:
              <br />
            </label>
            <select id="input__country" ref={this.countryInput}>
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
              <span>&nbsp;&nbsp;Man&nbsp;&nbsp;</span>
              <label className="forms__checkbox">
                <input type="checkbox" ref={this.genderInput} />
                <span className="forms__slider round"></span>
              </label>
              <span>Woman</span>
            </div>
            <br />
            <span>I agree to the processing of personal data:</span>
            <label className="forms__checkbox_last">
              <input type="checkbox" ref={this.checkboxInput} />
            </label>
            <br />
            <input
              type="submit"
              value="Submit"
              className="forms__submit"
              disabled={this.state.isDisabled}
            />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
