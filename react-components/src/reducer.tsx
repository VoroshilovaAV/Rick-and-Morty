import { createContext } from 'react';

export type GlobalStateType = {
  searchValue: string;
};

export const GlobalState = {
  searchValue: '',
};

export const AppContext = createContext<{
  state: GlobalStateType;
  // когда типов будет больше, то поменять на что-то вроде type SearchActions = searchValueType | searchAType | searchBType;
  dispatch: React.Dispatch<searchValueType>;
}>({ state: GlobalState, dispatch: () => null });

type searchValueType = {
  type: 'SAVE_SEARCH_VALUE';
  payload: {
    searchValue: string;
  };
};

export const reducer = (state: GlobalStateType, action: searchValueType) => {
  const { type, payload } = action;
  switch (type) {
    case 'SAVE_SEARCH_VALUE':
      return { ...state, ...payload };
    default:
      return state;
  }
};
