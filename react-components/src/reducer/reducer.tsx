import { createContext } from 'react';
import { ActionsType, GlobalStateType } from './types';

export const GlobalState = {
  searchValue: '',
  statusValue: '',
  genderValue: '',
  speciesValue: '',
};

export const AppContext = createContext<{
  state: GlobalStateType;
  dispatch: React.Dispatch<ActionsType>;
}>({ state: GlobalState, dispatch: () => null });

export const reducer = (state: GlobalStateType, action: ActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case 'SAVE_SIMPLE_VALUE':
      return { ...state, ...payload };
    default:
      return state;
  }
};
