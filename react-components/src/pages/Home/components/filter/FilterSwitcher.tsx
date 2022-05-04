import './filterSwitcher.scss';

type Props = { text: string };

const FilterSwitcher = (props: Props) => {
  return (
    <>
      <div className="wrapper-btn__toggle">
        <div className="filter__text">{props.text}</div>
        <div>
          <label className="filter__checkbox">
            <input type="checkbox" />
            <span className="filter__slider round"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterSwitcher;
