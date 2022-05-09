import { useContext } from 'react';
import { AppContext } from '../../../../reducer/reducer';
import './filterSwitcher.scss';

const FilterSwitcher = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <div className="wrapper-btn__toggle">
        <div className="filter__text">by status</div>
        <select
          value={state.statusValue}
          onChange={(e) =>
            dispatch({
              type: 'SAVE_STATUS',
              payload: {
                statusValue: e.target.value,
              },
            })
          }
        >
          <option value="all">all</option>
          <option value="alive">alive</option>
          <option value="dead">dead</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="wrapper-btn__toggle">
        <div className="filter__text">by gender</div>
        <select
          value={state.genderValue}
          onChange={(e) =>
            dispatch({
              type: 'SAVE_GENDER',
              payload: {
                genderValue: e.target.value,
              },
            })
          }
        >
          <option value="all">all</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="genderless">genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="wrapper-btn__toggle">
        <div className="filter__text">by species</div>
        <select
          value={state.speciesValue}
          onChange={(e) =>
            dispatch({
              type: 'SAVE_SPECIES',
              payload: {
                speciesValue: e.target.value,
              },
            })
          }
        >
          <option value="all">all</option>
          <option value="human">human</option>
          <option value="alien">alien</option>
          <option value="humanoid">humanoid</option>
          <option value="poopybutthole">poopybutthole</option>
          <option value="mythological">mythological</option>
          <option value="Unknown">unknown</option>
          <option value="animal">animal</option>
          <option value="disease">disease</option>
          <option value="robot">robot</option>
          <option value="cronenberg">cronenberg</option>
        </select>
      </div>
    </>
  );
};

export default FilterSwitcher;
