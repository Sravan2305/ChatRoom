import './App.css'
import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';


function App() {

  return (
      <Router>
        <Switch>
            <Route path = '/' exact component = {LoginPage} />
            <Route path = '/chat' component = {HomePage} />
            <Route path = '/error' component = {ErrorPage}/>
          </Switch>
      </Router>

  );
}

export default App;
