import React from 'react';
import { FormState } from '../../Forms';
import ErrorMessage from '../error/ErrorMessage';
import './form.scss';
import './switcher.scss';
import './input-file.scss';

type Props = { setFormState: (currentCard: FormState) => void };
type State = {
  country: string;
  file: string;
  validateData: Array<string>;
  isDisabled: boolean;
  message: string;
};

export default class Form extends React.Component<Props, State> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  genderInput: React.RefObject<HTMLInputElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.form = React.createRef();
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.genderInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.state = {
      country: 'USA',
      file: '',
      validateData: [],
      isDisabled: true,
      message: '',
    };
  }

  async handleChange(
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) {
    const name = event.target.name;
    if (name == 'country') {
      const value = event.target.value;
      await this.setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    this.state.validateData.length !== 0
      ? await this.validate()
      : this.setState({ isDisabled: false });
  }

  async handleChangeImg(event: React.ChangeEvent<HTMLInputElement>) {
    const imgFile = event.target.files;
    await this.setState({ file: imgFile ? URL.createObjectURL(imgFile[0]) : '' });
    if (this.state.validateData.length !== 0) await this.validate();
  }

  async handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    await this.validate();
    if (this.state.validateData.length !== 0) {
      this.setState({ isDisabled: true });
    } else {
      const CardState = {
        name: this.nameInput.current?.value ? this.nameInput.current?.value : '',
        surname: this.surnameInput.current?.value ? this.surnameInput.current?.value : '',
        date: this.dateInput.current?.value ? this.dateInput.current?.value : '',
        country: this.state.country,
        file: this.state.file,
        gender: this.genderInput.current?.checked ? 'Women' : 'Man',
      };
      this.form.current?.reset();
      this.setState({ message: 'ok' });
      setTimeout(() => {
        this.setState({ message: '' });
      }, 2500);
      this.props.setFormState(CardState);
      this.setState({ file: '' });
    }
  }

  isNotValidString(testString: string | undefined) {
    if (testString)
      return testString.length < 3 || testString.length > 15 || !/^[a-zA-Z]+$/.test(testString);
  }

  async validate() {
    const errors = [];
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
    const inputDate = Date.parse(this.dateInput.current?.value || '');
    this.setState({ validateData: [] });
    if (this.isNotValidString(this.nameInput.current?.value) || this.nameInput.current?.value == '')
      errors.push('name');
    if (
      this.isNotValidString(this.surnameInput.current?.value) ||
      this.surnameInput.current?.value == ''
    )
      errors.push('surname');
    if (
      this.dateInput.current?.value == '' ||
      inputDate > today ||
      inputDate < new Date('1900-01-01').valueOf()
    )
      errors.push('date');
    if (!this.checkboxInput.current?.checked) errors.push('agree');
    if (this.state.file == '') errors.push('file');
    await this.setState({ validateData: errors });
    if (this.state.validateData.length == 0) this.setState({ isDisabled: false });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} ref={this.form}>
          <fieldset className="forms">
            <label className="forms__name">
              Name:
              <br />
              <input type="text" ref={this.nameInput} onChange={this.handleChange} />
              <ErrorMessage validateData={this.state.validateData} input="name" />
            </label>
            <label className="forms__surname">
              Surname:
              <br />
              <input type="text" ref={this.surnameInput} onChange={this.handleChange} />
              <ErrorMessage validateData={this.state.validateData} input="surname" />
            </label>
            <label className="forms__date">
              Date of Birth:
              <br />
              <input type="date" ref={this.dateInput} onChange={this.handleChange} />
              <ErrorMessage validateData={this.state.validateData} input="date" />
            </label>
            <label htmlFor="input__country" className="forms__country">
              Country:
              <br />
            </label>
            <select id="input__country" name="country" onChange={this.handleChange}>
              <option value="USA">USA</option>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Poland">Poland</option>
              <option value="UK">UK</option>
            </select>
            <br />
            <label
              htmlFor="forms__file__input"
              className={
                this.state.file
                  ? 'forms__file_select'
                  : this.state.validateData.includes('file')
                  ? 'forms__file_red'
                  : 'forms__file'
              }
            >
              {this.state.file ? 'Avatar selected' : 'Upload an avatar'}
              <input type="file" id="forms__file__input" onChange={this.handleChangeImg} />
            </label>
            <span className="forms__text">Gender:</span>
            <div>
              <span>&nbsp;&nbsp;Man&nbsp;&nbsp;</span>
              <label className="forms__checkbox">
                <input type="checkbox" ref={this.genderInput} onChange={this.handleChange} />
                <span className="forms__slider round"></span>
              </label>
              <span>Woman</span>
            </div>
            <br />
            <span>I agree to the processing of personal data:</span>
            <label className="forms__checkbox_last">
              <input type="checkbox" ref={this.checkboxInput} onChange={this.handleChange} />
              <ErrorMessage validateData={this.state.validateData} input="agree" />
            </label>
            <input
              type="submit"
              value="Submit"
              className="forms__submit"
              disabled={this.state.isDisabled}
            />
            {this.state.message.includes('ok') ? (
              <p className="forms__name_ok">data saved successfully</p>
            ) : (
              <p className="forms__name_hide">hide</p>
            )}
          </fieldset>
        </form>
      </>
    );
  }
}
