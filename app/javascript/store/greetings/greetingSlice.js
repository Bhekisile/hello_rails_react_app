import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetch', async () => {
  try {
    const response = await fetch('/api/greetings/random');

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

const initialState = {
  greeting: '',
  error: '',
  loading: false,
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        return { ...state, greeting: action.payload.message, loading: false };
      })

      .addCase(fetchGreetings.rejected, (state) => {
        const newState = {
          ...state,
          error: 'Error 404. Failed to fetch',
          loading: false,
        };
        return newState;
      });
  },
});

export default greetingSlice.reducer;
