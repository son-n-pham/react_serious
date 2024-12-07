import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read Books',
  });
  const showJohn = () => {
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'To Scream At The Computer',
    });
  };
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoy To: {person.hobby}</h3>
      <button type="button" className="btn" onClick={showJohn}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
