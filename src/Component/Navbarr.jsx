// import {Link} from 'react-router-dom'
// <Link className={classes.link} to={"/home"}>Home</Link>
// <Link className={classes.link} to={"/about"}>About</Link>
// <Link className={classes.link} to={"/services"}>Services</Link>
// <Link className={classes.link} to="/contact">Contact</Link>
//<Link className={classes.link} to={`/contact/${name}`}>Contact</Link>

import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'



export default function Navbarr({match}) {

const link = {
  color:"white",
  textDecoration: "none",
  fontStyle: "italic",
  fontSize:"25px",
  padding:"20px"
}

const navlink = {
  paddingRight: "0.6rem",
  paddingLeft: "0.6rem",
}
  
const name = "Srinika";
console.log({match});
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="#home"><img src="../../img/logo.png" style={{height:"60px", width:"60px"}}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className="ml-auto">
            <Nav.Link style={navlink}><Link style={link} to={"/home"}>Home</Link></Nav.Link>
            <Nav.Link style={navlink}><Link style={link} to={"/about"}>About</Link></Nav.Link>
            <Nav.Link style={navlink}><Link style={link} to={"/products"}>Products</Link></Nav.Link>
            <Nav.Link style={navlink}><Link style={link} to={"/portfolio"}>Portfolio</Link></Nav.Link>
            <Nav.Link style={navlink}><Link style={link} to={"/team"}>Team</Link></Nav.Link>
            <Nav.Link style={navlink}><Link style={link} to={"/contact"}>Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}