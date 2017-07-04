import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {
      BrowserRouter as Router,
      Route,
      Link
} from 'react-router-dom'

export default class ExampleNavbar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={this.props.baseUrl}>Drupal React</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    { /* <NavItem eventKey={1} href={this.props.baseUrl}>Home</NavItem> */ }
                     <LinkContainer to={this.props.baseUrl}>
                        <NavItem eventKey={1}>Home</NavItem>
                    </LinkContainer> 
                    <NavDropdown eventKey={2} title="Players" id="basic-nav-dropdown">
                        <LinkContainer to={this.props.baseUrl+'player/1'}>
                            <MenuItem eventKey={2.1}>First Player</MenuItem>
                        </LinkContainer>  
                        <MenuItem divider />
                        <LinkContainer to={this.props.baseUrl+'player/2'}>
                            <MenuItem eventKey={2.2}>Second Player</MenuItem>
                        </LinkContainer>  
                        <MenuItem divider />
                        <LinkContainer to={this.props.baseUrl+'player/3'}>
                            <MenuItem eventKey={2.3}>Third Player</MenuItem>
                        </LinkContainer>  
                    </NavDropdown>
                    <LinkContainer to={this.props.baseUrl+'player/1'}>
                        <NavItem eventKey={4}>First Player</NavItem>
                    </LinkContainer>    
                    <LinkContainer to={this.props.baseUrl+'player/2'}>
                        <NavItem eventKey={5}>Second Player</NavItem>
                    </LinkContainer>    
                    <LinkContainer to={this.props.baseUrl+'player/3'}>
                        <NavItem eventKey={6}>Third Player</NavItem>
                    </LinkContainer>    
                </Nav>        
            </Navbar>
            );          
    }
}