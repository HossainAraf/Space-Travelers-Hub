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
  reducers: {
    joinMission: (state, action) => {
      const updatedMissions = state.missions.map((mission) => (
        mission.id === action.payload ? { ...mission, joined: true } : mission));
      state.missions = updatedMissions;
    },
    leaveMission: (state, action) => {
      const updatedMissions = state.missions.map((mission) => (
        mission.id === action.payload ? { ...mission, joined: false } : mission));
      state.missions = updatedMissions;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.missions = action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        }));
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
const { joinMission, leaveMission } = missionsSlice.actions;
export { getMissions, joinMission, leaveMission };
export default missionsSlice.reducer;
