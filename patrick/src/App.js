import React from 'react';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './auth/Login';
import Users from './users/Users';


function App(props) {
  function logout() {
    localStorage.removeItem('jwt');
    props.history.push('/login');
  }

  return (
    <div className="App">
      <header>
        <NavLink to = '/login'>Login</NavLink>
        <NavLink to = '/users'>Users</NavLink>
        <button type = 'button' onClick = {logout}>Logout</button>
      </header>
      <Route
        path = '/login'
        component = {Login}
      />

      <Route 
        path = '/users'
        component = {Users}
      />
    </div>
  );
}

export default withRouter(App);
