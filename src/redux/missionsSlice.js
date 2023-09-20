import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
const APIurl = 'https://api.spacexdata.com/v3/missions';

// ASYNC ACTIONS
const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await fetch(APIurl);
  const data = await response.json();
  return data;
});
