import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function Books() {
  const { books, isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <>
      <ul className="listBooks">
        {Object.entries(books).map(([id, book]) => (
          <Book
            key={id}
            id={id}
            title={book[0].title}
            author={book[0].author}
            category={book[0].category}
          />
        ))}
      </ul>
      <BookForm />
    </>
  );
}

export default Books;
