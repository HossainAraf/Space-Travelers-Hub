// IMPORTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API
const APIurl = 'https://api.spacexdata.com/v4/rockets';

// ASYNC ACTIONS
const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(APIurl);
  const data = await response.json();
  return data;
});

// REDUCER
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: null,
    hasErrors: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        }));

        state.status = 'success';
        state.hasErrors = false;
      })
      .addCase(getRockets.rejected, (state) => {
        state.status = 'failed';
        state.hasErrors = true;
      });
  },
});

// SELECTORS
export default rocketsSlice.reducer;
export { getRockets };
