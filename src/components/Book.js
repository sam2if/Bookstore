import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <div className="book">
        <p className="category">{category}</p>
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <div className="buttons">
          <Button btnName="comments-btn" btnValue="comments" />
          <div className="separate" />
          <Button
            type="button"
            onClick={() => dispatch(removeBook(id))}
            btnValue="Remove"
            btnName="remove"
          />
          <div className="separate" />
          <Button btnName="edit-btn" btnValue="Edit" />
        </div>
      </div>
      <div className="progress-sec">
        <div className="oval" />
        <div className="percentages">
          <h2>66%</h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="update-container">
        <div className="line" />
        <div className="column-chapter">
          <h5>CURRENT CHAPTER</h5>
          <p>Chapter 17</p>
          <Button btnName="update-btn" btnValue="UPDATE PROGRESS" />
        </div>
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
