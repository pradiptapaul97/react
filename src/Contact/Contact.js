import React,{Fragment} from 'react'
import Footer from '../Component/Footer'
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Link} from 'react-router-dom'

function Contact(params) {

    const div1h1 = {
        fontStyle: "initial",
        fontFamily: "cursive",
        color:"#E91E63",
        paddingBottom:"10px"
    }

    const div1p =
    {
        borderTop: "4px dashed red",
        width:"5%",
        margin:"0px auto",
        paddingBottom:"20px"
    }

    const colh={
        //
    }

    const icon = {
        color:"red",
        marginRight:"10px"
    }

    const colp={
        marginLeft: "30px",
    }

    const cola = {
        textDecoration:"none",
        color:"black"
    }

    return(
        <>
            <Container style={{paddingTop:"50px", paddingBottom:"40px"}}>
            <h1 style={div1h1}>CONTACT US</h1>
            <p style={div1p}></p>
            <p style={{paddingBottom:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. 
                malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                <Row>
                    <Col md="6" xs="12" lg="6" style={{textAlign:"left"}}>
                        <h6 style={colh}><RoomIcon style={icon}/>ADDRESS</h6>
                        <p style={colp}>MN-12 Lincon Street, NewYork 12356, USA</p>
                        <h6 style={colh}><PhoneIcon style={icon}/>PHONE NUMBER</h6>
                        <p style={colp}><Link style={cola} href="">+1 2345 67890 12</Link>6</p>
                        <h6 style={colh}><MailOutlineIcon style={icon}/>EMAIL</h6>
                        <p style={colp}><Link style={cola} href="">name@website.com</Link>6</p>
                    </Col>
                    <Col md="6" xs="12" lg="6">
                        <Form>
                        <Form.Group controlId="formBasicPassword">
                            {/* <Form.Label>Name</Form.Label> */}
                            <Form.Control type="text" placeholder="Full Name" />
                        </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                {/* <Form.Label>Example textarea</Form.Label> */}
                                <Form.Control as="textarea"placeholder="Message" rows={10} style={{resize: "none"}} />
                            </Form.Group>
                            <p style={{textAlign: "right"}}><Button variant="danger" type="submit">
                                Submit
                            </Button>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        <Footer></Footer>
        </>
    )
}

export default Contact