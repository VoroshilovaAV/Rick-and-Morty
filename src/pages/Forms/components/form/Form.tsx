import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { FormState } from '../../Forms';
import ErrorMessage from '../error/ErrorMessage';
import { useAppDispatch, useAppSelector } from '../../../../store/customHooks';
import { saveId } from '../../../../store/appSlice';

import './form.scss';
import './switcher.scss';
import './input-file.scss';

type Props = { setFormState: (currentCard: FormState) => void };

const Form: React.FC<Props> = ({ setFormState }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm();
  const id = useAppSelector((state) => state.app.id);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = handleSubmit((data) => {
    const cardState = {
      name: data.name ?? '',
      surname: data.surname ?? '',
      date: data.date ?? '',
      country: data.country,
      file: URL.createObjectURL(data.file[0]) ?? '',
      gender: data.gender ? 'Women' : 'Man',
      id: id,
    };
    setFormState(cardState);
    reset();
    setMessage('ok');
    setTimeout(() => {
      setMessage('');
    }, 2500);
    setFile('');
    dispatch(saveId(id + 1));
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset className="forms">
          <label className="forms__name">
            Name:
            <br />
            <input
              data-testid="name"
              type="text"
              {...register('name', {
                required: true,
                minLength: 3,
                maxLength: 15,
                pattern: /^[a-z]+$/i,
              })}
            />
            <ErrorMessage validateData={errors.name} input="name" />
          </label>
          <label className="forms__surname">
            Surname:
            <br />
            <input
              type="text"
              data-testid="surname"
              {...register('surname', {
                required: true,
                minLength: 3,
                maxLength: 15,
                pattern: /^[a-z]+$/i,
              })}
            />
            {<ErrorMessage validateData={errors.surname} input="surname" />}
          </label>
          <label className="forms__date">
            Date of Birth:
            <br />
            <input
              type="date"
              data-testid="date"
              {...register('date', {
                required: true,
              })}
            />
            {<ErrorMessage validateData={errors.date} input="date" />}
          </label>
          <label htmlFor="input__country" className="forms__country">
            Country:
            <br />
          </label>
          <select
            id="input__country"
            data-testid="country"
            defaultValue="USA"
            {...register('country')}
          >
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Poland">Poland</option>
            <option value="UK">UK</option>
          </select>
          <br />
          <label
            htmlFor="forms__input"
            className={
              file
                ? 'forms__file_select'
                : errors.file !== undefined
                ? 'forms__file_red'
                : 'forms__file'
            }
          >
            {file ? 'Avatar selected' : 'Upload an avatar'}
            <input
              type="file"
              data-testid="file"
              id="forms__input"
              {...register('file', {
                required: true,
                onChange: () => setFile('file'),
              })}
            />
          </label>
          <span className="forms__text">Gender:</span>
          <div>
            <span>&nbsp;&nbsp;Man&nbsp;&nbsp;</span>
            <label className="forms__checkbox">
              <input type="checkbox" {...register('gender')} />
              <span className="forms__slider round"></span>
            </label>
            <span>Woman</span>
          </div>
          <br />
          <span>I agree to the processing of personal data:</span>
          <label className="forms__checkbox_last">
            <input
              type="checkbox"
              data-testid="agree"
              {...register('checkbox', { required: true })}
            />
            {<ErrorMessage validateData={errors.checkbox} input="agree" />}
          </label>
          <input
            type="submit"
            value="Submit"
            className="forms__submit"
            disabled={!isDirty || Object.keys(errors).length > 0}
          />
          {message === 'ok' ? (
            <p className="forms__name_ok">data saved successfully</p>
          ) : (
            <p className="forms__name_hide">hide</p>
          )}
        </fieldset>
      </form>
    </>
  );
};

export default Form;
