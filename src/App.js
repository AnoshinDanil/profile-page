import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './pages/Login';
import Profile from './pages/Profile';

function requireAuth(nextState, replace) {
    const isAdmin = localStorage.getItem('isAdmin');
    if(isAdmin === "false") replace({ pathname: '' })
}

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/profile' component={Profile} onEnter={requireAuth}/>
      </Switch>
    </Router>
  );
}

export default App;
