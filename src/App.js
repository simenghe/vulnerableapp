import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './components/Navbar'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'

class App extends Component {
  state = {

  }
  render() {
    return (
      <BrowserRouter>
        <div className="None">
          <Navbar/>
          <Switch>
            <Route path = '/' component ={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
