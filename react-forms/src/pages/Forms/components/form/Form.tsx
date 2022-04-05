import React, { LegacyRef } from 'react';
import './form.scss';
import './switcher.scss';
import './input-file.scss';
import { FormState } from '../../Forms';

type Props = { value: undefined };

class Form extends React.Component<Props, FormState> {
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
    this.handleChangeImg = this.handleChangeImg.bind(this);
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
      gender: 'man',
      validateData: [''],
      isDisabled: true,
    };
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    const name = event.target.name;
    let value = event.target.value;
    if (name == 'gender') {
      value = this.genderInput.current?.checked ? 'women' : 'man';
    }
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      isDisabled: false,
    }));
  }

  handleChangeImg(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const imgFile = event.target.files;
    console.log(imgFile ? URL.createObjectURL(imgFile[0]) : '');
    this.setState({ file: imgFile ? URL.createObjectURL(imgFile[0]) : '' });
  }

  async handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    await this.validate();
    console.log(this.state);
  }

  isNotValidString(testString: string) {
    return testString.length < 3 || testString.length > 15 || !/^[a-zA-Z]+$/.test(testString);
  }

  validate() {
    const errors = [];
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
    const inputDate = Date.parse(this.state.date);
    this.setState({ validateData: [''] });
    if (this.isNotValidString(this.state.name)) errors.push('name');
    if (this.isNotValidString(this.state.surname)) errors.push('surname');
    if (this.state.date == '' || inputDate > today || inputDate < new Date('1900-01-01').valueOf())
      errors.push('date');
    if (this.state.country == '') errors.push('country');
    if (!this.checkboxInput.current?.checked) errors.push('checkbox');
    if (this.state.file == '') errors.push('file');
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
                <p className="forms__name_error">enter a valid name</p>
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
                <p className="forms__name_error">enter a valid surname</p>
              ) : (
                <p className="forms__name_hide">hide</p>
              )}
            </label>
            <label className="forms__date">
              Date of Birth:
              <br />
              <input type="date" name="date" ref={this.dateInput} onChange={this.handleChange} />
              {this.state.validateData.includes('date') ? (
                <p className="forms__name_error">enter a valid date</p>
              ) : (
                <p className="forms__name_hide">hide</p>
              )}
            </label>
            <label htmlFor="input__country" className="forms__country">
              Country:
              <br />
            </label>
            <select
              id="input__country"
              name="country"
              onChange={this.handleChange}
              ref={this.countryInput}
            >
              <option value="usa"> USA</option>
              <option value="russia">Russia</option>
              <option value="belarus">Belarus</option>
              <option value="ukraine">Ukraine</option>
              <option value="poland">Poland</option>
              <option value="uk">UK</option>
            </select>
            {this.state.validateData.includes('country') ? (
              <p className="forms__name_error">enter a country</p>
            ) : (
              <p className="forms__name_hide">hide</p>
            )}
            <label
              htmlFor="forms__file__input"
              className={this.state.file ? 'forms__file_select' : 'forms__file'}
            >
              {this.state.file ? 'Avatar selected' : 'Upload an avatar'}
              <input
                type="file"
                name="file"
                id="forms__file__input"
                onChange={this.handleChangeImg}
                ref={this.fileInput}
              />
            </label>
            <span className="forms__text">Gender:</span>
            <div>
              <span>&nbsp;&nbsp;Man&nbsp;&nbsp;</span>
              <label className="forms__checkbox">
                <input
                  name="gender"
                  type="checkbox"
                  ref={this.genderInput}
                  onChange={this.handleChange}
                />
                <span className="forms__slider round"></span>
              </label>
              <span>Woman</span>
            </div>
            <br />
            <span>I agree to the processing of personal data:</span>
            <label className="forms__checkbox_last">
              <input
                type="checkbox"
                name="checkbox"
                ref={this.checkboxInput}
                onChange={this.handleChange}
              />
              {this.state.validateData.includes('checkbox') ? (
                <p className="forms__name_error">click here</p>
              ) : (
                <p className="forms__name_hide">hide</p>
              )}
            </label>
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
