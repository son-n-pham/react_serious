import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';
import { EventExample } from './EventExample';

const BookList = () => {
  const someValue = 'shakeAndBake';
  const getBook = (id) => {
    const searchedBook = books.find((book) => book.id === id);
    return searchedBook ? searchedBook : null;
  };
  const displayValue = () => console.log(someValue);
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        <EventExample />
        {books.map((book, index) => {
          // const { author, title, img, id } = book;
          // return <Book key={id} title={title} author={author} image={img} />;
          return (
            <Book
              key={book.id}
              number={index}
              {...book}
              getBook={getBook}
              displayValue={displayValue}
            />
          );
        })}{' '}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
