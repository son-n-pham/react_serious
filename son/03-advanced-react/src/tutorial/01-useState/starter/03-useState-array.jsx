import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const clearItems = () => setPeople([]);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => removeItem(id)}>removeee</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clearItems}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
