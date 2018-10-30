import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import zep from '../zep.png';
import List from '../List';

export default class Gallery  extends Component{
    render(){
        return(
          <div> 
         <Image src = {zep} style ={{width:"1200px" ,height:"298px", paddingLeft:"40px"}}/>
         <List/>
         </div> 
        )
    }
}