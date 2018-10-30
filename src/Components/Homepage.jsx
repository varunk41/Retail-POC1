import React, { Component, img } from 'react';
import Navigation from './Navigation';
import List from '../List';
import Gallery from './Gallery';



import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Gallery/>
         <List/>
      </div>
    );
  }
}
