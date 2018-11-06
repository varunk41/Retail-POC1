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
import Forminput from './Components/Forminput';
import KyloDemo from './Components/KyloDemo';
import Chart from './Components/Chart';
class App extends Component {
  render() {
    return (
      <Router>
            <div>
                    <Navigation/>
                    <Route exact path ="/" component = {Gallery}/>
                    <Route exact path ="/homepage" component ={Homepage}/>
                    <Route exact path ="/details" component={Details}/>
                    <Route exact path ="/forminput" component={Forminput}/>
                    <Route exact path ="/kylo" component={KyloDemo}/>
                    <Route exact path ="/chart" component={Chart}/>
            </div>
      </Router>
    );
  }
}

export default App;
