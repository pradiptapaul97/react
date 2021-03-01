import React, {Fragment} from 'react'
import Footer from '../Component/Footer'
import {Row, Col, Container, Card, Form, Button} from 'react-bootstrap'
import { BorderBottom } from '@material-ui/icons'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FunctionsIcon from '@material-ui/icons/Functions';

function Team(params) {

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

    const cartbody = {
        border:"none"
    }

    const cart = {
        border:"none",
    }

    const row={
        padding:"40px 0px",
    }

    const cartimgp = {
        borderTop: "4px solid red",
        marginBottom:"0px"
    }

    const icncol = {
        padding: "6px",
        border: "1px solid black",
        textDecoration:"none", 
        color:"#919090",
        borderRadius: "11px",
        verticalAlign: "top",
    }

    return(
        <>
        <Container style={{paddingTop:"50px", paddingBottom:"40px"}}>
            <h1 style={div1h1}>OUR TEAM</h1>
            <p style={div1p}></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. 
                malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                <Row style={row}>
                    <Col md="3">
                        <Card style={cart}>
                            <Card.Img variant="top" src="img/team1.jpg" />
                            <p style={cartimgp}></p>
                            <Card.Body style={cartbody}>
                                <Card.Title style={{color:"red", marginBottom:"0px"}}>James Smith</Card.Title>
                                <Card.Text style={{color:"red"}}>
                                Chief Executive Officer
                                </Card.Text>
                                <Row>
                                    <Col md="3"><a style={icncol} href=""><TwitterIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FacebookIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FunctionsIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><LinkedInIcon/></a></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card style={cart}>
                            <Card.Img variant="top" src="img/team2.jpg" />
                            <p style={cartimgp}></p>
                            <Card.Body style={cartbody}>
                                <Card.Title style={{color:"red", marginBottom:"0px"}}>Michell Kellon</Card.Title>
                                <Card.Text style={{color:"red"}}>
                                Technical Manager
                                </Card.Text>
                                <Row>
                                    <Col md="3"><a style={icncol} href=""><TwitterIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FacebookIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FunctionsIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><LinkedInIcon/></a></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card style={cart}>
                            <Card.Img variant="top" src="img/team3.jpg" />
                            <p style={cartimgp}></p>
                            <Card.Body style={cartbody}>
                                <Card.Title style={{color:"red", marginBottom:"0px"}}>French Lincon</Card.Title>
                                <Card.Text style={{color:"red"}}>
                                Financial Manager
                                </Card.Text>
                                <Row>
                                    <Col md="3"><a style={icncol} href=""><TwitterIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FacebookIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FunctionsIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><LinkedInIcon/></a></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card style={cart}>
                            <Card.Img variant="top" src="img/team4.jpg" />
                            <p style={cartimgp}></p>
                            <Card.Body style={cartbody}>
                                <Card.Title style={{color:"red", marginBottom:"0px"}}>Amanda Jepson</Card.Title>
                                <Card.Text style={{color:"red"}}>
                                Accountant
                                </Card.Text>
                                <Row>
                                    <Col md="3"><a style={icncol} href=""><TwitterIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FacebookIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><FunctionsIcon/></a></Col>
                                    <Col md="3"><a style={icncol} href=""><LinkedInIcon/></a></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        <Footer></Footer>
        </>
    )
}

export default Team