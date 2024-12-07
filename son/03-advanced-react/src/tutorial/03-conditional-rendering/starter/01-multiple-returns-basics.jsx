import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const loadingTime = 10000;
  const originalCountDown = loadingTime / 1000;
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [countDown, setCountDown] = useState(originalCountDown);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setInterval(() => {
      if (!isPaused) {
        setCountDown((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(timer);
            setIsLoading(false);
            return 0;
          }
          return prevCount - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isLoading, isPaused]); // eslint-disable-line

  const CountDownTimer = () => {
    return (
      <>
        <h5>Loading... {countDown} seconds remaining</h5>
        <button onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? 'Resume' : 'Pause'}{' '}
        </button>
        <button onClick={() => setCountDown(originalCountDown)}>
          Restart Countdown
        </button>
      </>
    );
  };

  return (
    <section>
      <h2>Multiple Returns Basics</h2>
      {isLoading ? <CountDownTimer /> : <h5>My App</h5>}
      <hr />
    </section>
  );
};
export default MultipleReturnsBasics;
