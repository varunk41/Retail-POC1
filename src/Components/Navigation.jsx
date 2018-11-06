import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigation.css';

export default class Navigation  extends Component{
    render(){
        return(
            <Navbar expanded  collapseOnSelect style={{color: "blue"}}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">POC</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1} href="#">
              <Link to ="/">Home</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
              <Link to ="/details">Details</Link>
              </NavItem>
              <NavItem eventKey={3} href="#">
              <Link to ="/kylo">Kylo</Link>
              </NavItem>
              <NavItem eventKey={4} href="#">
              <Link to ="/chart">Chart</Link>
              </NavItem>
             
              
              <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={5.1}>Action</MenuItem>
                <MenuItem eventKey={5.2}>Another action</MenuItem>
                <MenuItem eventKey={5.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
      <NavItem eventKey={2} href="#">
      <Button bsStyle="default">  
      <Link to ="/forminput" style={{color:"blue"}}>ADD +</Link>
      </Button>
      </NavItem>
    </Nav>
          </Navbar>
        
        )
    }
}