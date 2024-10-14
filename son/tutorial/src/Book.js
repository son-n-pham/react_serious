import React from 'react';

const Book = ({
  title,
  author,
  img,
  id,
  number,
  getBook,
  displayValue,
  children,
}) => {
  const [showTitle, setShowTitle] = React.useState(false);

  const handleDisplayValueClick = () => {
    displayValue();
    console.log(title);
  };

  return (
    <article className="book">
      <span className="number"># {number + 1}</span>
      {children}
      {showTitle && <Title title={title} />}
      <Author author={author} />
      <button onClick={() => setShowTitle(!showTitle)}>
        {showTitle ? 'Hide title' : 'Show title'}
      </button>
      <button onClick={handleDisplayValueClick}>DisplayValue</button>
      <Image img={img} />
      <button onClick={() => console.log(getBook(id))}>Get Book</button>
    </article>
  );
};

const Image = ({ img }) => {
  return <img src={img} alt="" />;
};

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Author = ({ author }) => {
  return (
    <>
      <h4>{author}</h4>
      <p>{1 + 1}</p>
    </>
  );
};

export default Book;
