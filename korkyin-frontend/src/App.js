import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import UserSignup from './UserSignup';
import EmployerSignup from './EmployerSignup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup/user" component={UserSignup} />
        <Route path="/signup/employer" component={EmployerSignup} />
      </Switch>
    </Router>
  );
}

export default App;
