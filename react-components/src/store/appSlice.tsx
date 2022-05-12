import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

import { CharactersData } from '../pages/Home/interfaces';
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
  isLoaded: false,
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

export const fetchCards = createAsyncThunk(
  'app/fetchCards',
  async (base: string, { rejectWithValue }) => {
    try {
      const response = await fetch(base);
      if (!response.ok) {
        throw Error('No data was found for this query');
      }
      const data: CharactersData = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchCard = createAsyncThunk(
  'app/fetchCard',
  async (base: string, { rejectWithValue }) => {
    try {
      const response = await fetch(base);
      if (!response.ok) {
        throw Error('No data was found for this query');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

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
    setIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
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
      state.currentCard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.isLoaded = true;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      if (action.payload) state.info = action.payload.info;
      if (action.payload) state.results = action.payload.results;
      state.error = '';
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.error = 'No data was found for this query';
    });
    builder.addCase(fetchCard.pending, (state) => {
      state.isLoaded = true;
    });
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.currentCard = action.payload;
      state.currentCard.type = action.payload.type !== '' ? action.payload.type : 'Unknown';
      state.error = '';
    });
    builder.addCase(fetchCard.rejected, (state) => {
      state.error = 'No data was found for this query';
      const navigate = useNavigate();
      navigate('/');
    });
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
  setIsLoaded,
} = appSlice.actions;

export default appSlice.reducer;
