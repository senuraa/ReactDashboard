import React from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import Users from './Users';
import CreateUser from './CreateUser';

const Dashboard = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <ul>
          <Link to='/dashboard/users'>Home</Link>
          <Link to='/dashboard/create-user'>Create User</Link>
          <Link to='/dashboard/logout'>Logout</Link>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path={'/dashboard'}>
            <Redirect to={'/dashboard/users'}/>
          </Route>
          <Route path={'/dashboard/users'}>
            <Users />
          </Route>
          <Route path={'/dashboard/create-user'}>
            <CreateUser />
          </Route>
          <Route path={'/dashboard/logout'}>
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
