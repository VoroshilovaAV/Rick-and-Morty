import { saveCurrentPage, saveGender, saveSpesies, saveStatus } from '../../../../store/appSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/customHooks';
import './filterSwitcher.scss';

const FilterSwitcher = () => {
  const { genderValue, speciesValue, statusValue } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="wrapper-btn__toggle">
        <div className="filter__text">by status</div>
        <select
          value={statusValue}
          onChange={(e) => {
            dispatch(saveStatus(e.target.value));
            dispatch(saveCurrentPage(1));
          }}
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
          value={genderValue}
          onChange={(e) => {
            dispatch(saveGender(e.target.value));
            dispatch(saveCurrentPage(1));
          }}
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
          value={speciesValue}
          onChange={(e) => {
            dispatch(saveSpesies(e.target.value));
            dispatch(saveCurrentPage(1));
          }}
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
