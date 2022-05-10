import { createContext } from 'react';
import { ActionsType, GlobalStateType } from './types';

export const GlobalState = {
  searchValue: '',
  statusValue: '',
  genderValue: '',
  speciesValue: '',
  info: {
    count: 0,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [],
  error: '',
  formCard: [],
  id: 0,
  currentPage: 1,
  currentCard: {
    id: 0,
    created: '',
    image: '',
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  },
};

export const AppContext = createContext<{
  state: GlobalStateType;
  dispatch: React.Dispatch<ActionsType>;
}>({ state: GlobalState, dispatch: () => null });

export const reducer = (state: GlobalStateType, action: ActionsType) => {
  const { type, payload } = action;
  switch (type) {
    case 'SAVE_SEARCH':
      return { ...state, ...payload };
    case 'SAVE_STATUS':
      return { ...state, ...payload };
    case 'SAVE_GENDER':
      return { ...state, ...payload };
    case 'SAVE_SPECIES':
      return { ...state, ...payload };
    case 'SAVE_CARDS':
      return { ...state, ...payload };
    case 'SAVE_FORM_CARDS':
      return { ...state, ...payload };
    case 'SAVE_ID':
      return { ...state, ...payload };
    case 'SAVE_CURRENT_PAGE':
      return { ...state, ...payload };
    case 'SAVE_CURRENT_CARD':
      return { ...state, ...payload };
    default:
      return state;
  }
};
