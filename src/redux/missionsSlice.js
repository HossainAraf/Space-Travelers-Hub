// IMPORTS
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
const APIurl = 'https://api.spacexdata.com/v3/missions';

// ASYNC ACTIONS
const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await fetch(APIurl);
  const data = await response.json();
  return data;
});

// REDUCER
const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: null,
    hasErrors: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.status = 'success';
        state.hasErrors = false;
      })
      .addCase(getMissions.rejected, (state) => {
        state.status = 'failed';
        state.hasErrors = true;
      });
  },
});

// SELECTORS
export default missionsSlice.reducer;
export { getMissions };
