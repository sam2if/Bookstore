import { configureStore } from '@reduxjs/toolkit';
import booksreducer from './books/booksSlice';
import categoryreducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksreducer,
    category: categoryreducer,

  },
});

export default store;
