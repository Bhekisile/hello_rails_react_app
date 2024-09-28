import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetch', async () => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=faith',
      {
        headers: {
          'X-Api-Key': '5IxClj7l7PEht3AA8nJbiQ==CjzPZ7VSPNDaBiwc',
        },
      });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data[0];
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
        const newState = { ...state, greeting: action.payload, loading: false };
        return newState;
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
