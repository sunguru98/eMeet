import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Signin from './pages/Signin'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </Fragment>
  );
}

export default App;
