import { useState } from 'react';
import data from './data';
import Person from './components/Person';

const App = () => {
  const [people, setPeople] = useState(data);
  const clearList = () => setPeople([]);
  const removePerson = (id) =>
    setPeople(people.filter((person) => person.id !== id));
  return (
    <>
      <h2>Birthday Reminder - Starter</h2>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => (
        <>
          <Person key={person.id} {...person} />
          <button onClick={() => removePerson(person.id)}>Remove</button>
        </>
      ))}
      <button onClick={clearList} className="btn">
        Clear All
      </button>
    </>
  );
};
export default App;
