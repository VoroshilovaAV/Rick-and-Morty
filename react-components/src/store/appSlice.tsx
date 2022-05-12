import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CardsPayloadType,
  CurrentCardPayloadType,
  FormCardPayloadType,
  GlobalStateType,
} from './types';

export const GlobalState: GlobalStateType = {
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

const appSlice = createSlice({
  name: 'app',
  initialState: GlobalState,
  reducers: {
    saveSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    saveStatus(state, action: PayloadAction<string>) {
      state.statusValue = action.payload;
    },
    saveGender(state, action: PayloadAction<string>) {
      state.genderValue = action.payload;
    },
    saveSpesies(state, action: PayloadAction<string>) {
      state.speciesValue = action.payload;
    },
    saveCards(state, action: PayloadAction<CardsPayloadType>) {
      state.info = action.payload.info;
      state.results = action.payload.results;
      state.error = action.payload.error;
    },
    saveFormCards(state, action: PayloadAction<FormCardPayloadType>) {
      state.formCard = action.payload.formCard;
    },
    saveId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    saveCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    saveCurrentCard(state, action: PayloadAction<CurrentCardPayloadType>) {
      state.currentCard = action.payload.currentCard;
    },
  },
});

export const {
  saveSearch,
  saveStatus,
  saveGender,
  saveSpesies,
  saveCards,
  saveFormCards,
  saveId,
  saveCurrentPage,
  saveCurrentCard,
} = appSlice.actions;

export default appSlice.reducer;
