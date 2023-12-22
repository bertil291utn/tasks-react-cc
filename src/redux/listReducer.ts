import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { List } from '../interfaces/List'

export interface listState {
  lists: Array<List>
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: listState = {
  lists: [],
  isLoading: 'idle',
  error: null,
}

export const fetchElements = createAsyncThunk('lists/fetchElements', async () => {
  try {
    const response = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements');
    return await response.json();
  } catch (error) {
    throw error;
  }
});

export const listsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchElements.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchElements.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.lists = action.payload;
      })
      .addCase(fetchElements.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.error = action.error.message ?? 'Error desconocido';
      });
  },
})



export default listsSlice.reducer