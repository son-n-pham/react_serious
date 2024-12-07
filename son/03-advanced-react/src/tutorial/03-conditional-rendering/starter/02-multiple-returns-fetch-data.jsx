import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isFetchError, setIsFetchError] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      console.log(response.ok);
      if (!response.ok) {
        setIsFetchError(true);
        return;
      }
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.log(error);
      setIsFetchError(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isFetchError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <>
      <h2>Fetch Data </h2>
      <h3>github user</h3>
      <img src={user.avatar_url} alt={user.login} />
      <h4>{user.name}</h4>
      <h5>Works At {user.company}</h5>
      <p>{user.bio}</p>

      <hr />
    </>
  );
};
export default MultipleReturnsFetchData;
