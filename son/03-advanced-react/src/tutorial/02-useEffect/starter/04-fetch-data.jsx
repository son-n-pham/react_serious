import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>fetch data example</h2>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>{' '}
            </li>
          );
        })}
      </ul>
      <hr />
    </>
  );
};
export default FetchData;
