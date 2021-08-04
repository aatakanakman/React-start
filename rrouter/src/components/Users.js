import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Error404 from "../components/Error404";

import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import User from "./User";

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const { path, url } = useRouteMatch();



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
            <NavLink activeClassName= "active" to={`${url}/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component = {User}> 
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
