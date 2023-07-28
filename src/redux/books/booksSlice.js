import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OXt5sEy2YNp9qOAVJdw3/books';

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (payload, thunkAPI) => {
  try {
    const response = await axios.post(url, {
      item_id: uuidv4(),
      title: payload.title,
      author: payload.author,
      category: 'Book',
    });
    thunkAPI.dispatch(fetchBooks());
    return response.payload;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const bookSlice = createSlice({
  name: 'bookstore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchBooks.fulfilled, (state, action) => (
        { ...state, isLoading: false, books: action.payload }))
      .addCase(fetchBooks.rejected, (state) => ({ ...state, isLoading: false, isError: true }))
      .addCase(removeBook.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(removeBook.fulfilled, (state) => ({ ...state, isLoading: false }))
      .addCase(removeBook.rejected, (state) => ({ ...state, isLoading: false, isError: true }));
  },
});

export default bookSlice.reducer;
