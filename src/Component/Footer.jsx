import React from "react";
import {Link} from 'react-router-dom'
import {Navbar, Nav, navlink,  Form, FormControl, Button, Container} from 'react-bootstrap'

const butnav = {
    marginBottom: "0px",
}
const Footer = () => {
    const name = "Srinika"; 

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
        <p style={butnav}>© Copyright <strong>Pradipta</strong>. All Rights Reserved </p>
        <p style={butnav}>Template by <a href="#login">Dipta</a></p>
        </Navbar.Text>
    </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Footer;