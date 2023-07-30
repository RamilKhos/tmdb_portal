import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularFilms: [],
};

export const filmsSlice = createSlice({
  name: 'PopularFIlms',
  initialState,
  reducers: {},
});

// export const {} = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
