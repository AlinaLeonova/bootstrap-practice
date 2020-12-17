import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home, About, Contacts } from './pages/';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />

          <Route />

        </Switch>
      </Router>
    </>
  )
}

export default App