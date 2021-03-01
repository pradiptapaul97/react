import React from 'react'
import Footer from '../Component/Footer'
import {Row, Col, Container,Card,  Form, Button} from 'react-bootstrap'
import './Port.css';
import { CardTravel } from '@material-ui/icons';

function Portfolio(params) {

    
    const container = {
        paddingTop:"50px", 
        paddingBottom:"40px"
    }
    const col =
    {
        padding: "0px 0px",
        border: "none"
    }
    const card=
    {
        border:"none",
        padding:"0px",
    }
    const cardtext =
    {
        border:"1px solid white", 
        align: "center",
        background: "#00000085"
    }

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

    // const imgover = {
    //     padding:"5.25rem"
    // }

    return(
        <>
        <Container style={container}>
            <h1 style={div1h1}>OUR PORTFOLIO</h1>
            <p style={div1p}></p>
            <p style={{paddingBottom:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. 
                malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                <Row>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port1.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port2.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port3.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port4.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port5.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port6.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port7.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md="4" lg="3" style={col}>
                        <Card className=" text-white" style={card}>
                                <Card.Img src="img/port8.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Text style={cardtext}>
                                        CONTENT
                                    </Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        <Footer></Footer>
        </>
    )
}

export default Portfolio