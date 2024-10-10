import React from 'react';
import ReactDOM from 'react-dom/client';

const book = {
  title:
    'Amazon FBA Mastery: Your 5-Days Beginner To Expert Guide In Selling Highly Profitable Private Label Products On Amazon (Business And Money Series)',
  img: './img/book1.jpg',
  author: 'Michael Ezeanaka',
};

const BookList = () => {
  return (
    <>
      <Book title={book.title} author={book.author} img={book.img} />
      <Book title={book.title} author={book.author} img={book.img} />
      <Book title={book.title} author={book.author} img={book.img} />
      <Book title={book.title} author={book.author} img={book.img} />
    </>
  );
};

const Book = ({ tittle, author, img }) => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
