const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(`Count from Starter: ${count}`);
  };
  return (
    <>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn">
        Increment
      </button>
    </>
  );
};

export default ErrorExample;
