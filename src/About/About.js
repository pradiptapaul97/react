import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import Footer from '../Component/Footer'
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function About(params) {
    const history = useHistory()

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

    const div1p1 =
    {
        fontSize: "20px",
        fontStyle: "italic",
        fontFamily: "inherit",
        paddingTop: "10px",
    }

    const icon = {
        color:"red",
        marginRight:"10px"
    }

    return(
        <>
        <Container style={{paddingTop:"50px", paddingBottom:"40px"}}>
            <h1 style={div1h1}>WELCOME TO DIPTA..</h1>
            <p style={div1p}></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. 
                malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                <Row>
                    <Col md="6" xs="12">
                        <img style={{width:"100%"}} src="img/about.png"/>
                    </Col>
                    <Col md="6" xs="12">
                        <h5 align="left">Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
                        <p align="left" style={div1p1}>Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident</p>
                        <p align="left">Consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat</p>
                        <p align="left"><CheckCircleOutlineIcon style={icon}/>Dolores quae porro consequatur aliquam, incidunt fugiat culpa.</p>
                        <p align="left"><CheckCircleOutlineIcon style={icon}/>Dolores quae porro consequatur aliquam, culpa esse aute nulla.</p>
                        <p align="left"><CheckCircleOutlineIcon style={icon}/>Dolores quae porro esse aute nulla. malis nulla duis fugiat</p>
                    </Col>
                </Row>
            </Container>
        <Footer></Footer>
        </>
    )
}

export default About