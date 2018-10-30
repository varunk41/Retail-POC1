import React, { Component, img } from 'react';
import Navigation from './Components/Navigation';
import './App.css';
import List from './List';
import Gallery from './Components/Gallery';
import {Image} from 'react-bootstrap';
import Iframe from 'react-iframe';
import './zep.png'
import Details from './Components/Details';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';

class App extends Component {
  render() {
    return (
      <Router>
         <div>
        <Navigation/>
        <Route exact path ="/" component = {Gallery}/>
        <Route exact path ="/homepage" component ={Homepage}/>
         <Route exact path ="/details" component={Details}/>
      </div>
      </Router>
    );
  }
}

export default App;
