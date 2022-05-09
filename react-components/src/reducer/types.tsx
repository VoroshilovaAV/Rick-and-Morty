export type GlobalStateType = {
  searchValue: string;
  statusValue: string;
  genderValue: string;
  speciesValue: string;
};

type searchValueType = {
  type: 'SAVE_SIMPLE_VALUE';
  payload: {
    searchValue: string;
  };
};

type StatusFilterType = {
  type: 'SAVE_SIMPLE_VALUE';
  payload: {
    statusValue: string;
  };
};

type GenderFilterType = {
  type: 'SAVE_SIMPLE_VALUE';
  payload: {
    genderValue: string;
  };
};

type SpeciesFilterType = {
  type: 'SAVE_SIMPLE_VALUE';
  payload: {
    speciesValue: string;
  };
};

export type ActionsType = searchValueType | StatusFilterType | GenderFilterType | SpeciesFilterType;
