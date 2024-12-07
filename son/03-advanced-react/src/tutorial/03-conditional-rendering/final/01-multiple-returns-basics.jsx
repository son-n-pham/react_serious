import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const loadingTime = 10000; // Time in milliseconds
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(loadingTime / 1000);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isLoading) return; // Exit early if not loading

    const timer = setInterval(() => {
      if (!isPaused) {
        setCountdown((prevCount) => {
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
  }, [isPaused, isLoading]);

  if (isLoading) {
    return (
      <>
        <h2>Loading... {countdown} seconds remaining</h2>
        <button onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={() => setCountdown(loadingTime / 1000)}>
          Restart Countdown
        </button>
      </>
    );
  }

  return <h2>My App</h2>;
};

export default MultipleReturnsBasics;
