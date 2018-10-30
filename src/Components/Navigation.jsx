import React, {Component} from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigation.css';

export default class Navigation  extends Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
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
              
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
      <NavItem eventKey={2} href="#">
      <Button bsStyle="success">ADD +</Button>
      </NavItem>
    </Nav>
          </Navbar>
        
        )
    }
}