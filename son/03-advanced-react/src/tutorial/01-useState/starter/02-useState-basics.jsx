import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>useState basics</h2>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;
