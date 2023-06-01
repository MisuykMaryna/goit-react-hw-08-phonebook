import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, {payload}) => {
      state.query = payload;
    }
      }
  },
);

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

