import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {loading && <div>Loading</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
