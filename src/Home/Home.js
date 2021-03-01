import React from 'react'
import Footer from '../Component/Footer'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Slider from 'react-slick'

function Home(params) {

    const div = {
        backgroundImage: `url("img/home1.jpg")` ,
        padding: "150px 0px"
    }

    const div1 = {
        padding: "60px 0px"
    }

    const container = {
        maxWidth:"1000px"
    }

    const content = {
        textAlign:"right"
    }

    const h1 = {
        fontSize: "4.5rem",
        fontStyle: "italic",
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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
      };

    const slideimg = {
        width:"100%",
    }

    const slider = {
        paddingBottom:"100px"
    }
    return(
        <>
        <div style={div}>
        <Container style={container}>
        <Row>
            <Col xs={6}></Col>
            <Col xs={6} style={content}>
                <h1 style={h1}>CREATIVE</h1>
                <p style={{fontSize: "30px",fontStyle: "italic"}}>We create the opportunities!</p>
                <p style={{padding: "20px 0px",fontStyle: "italic"}}><Button variant="primary">Get STarted</Button></p>
            </Col>
        </Row>
        </Container>
        </div>
        <div style={div1}>
        <Container>
            <h1 style={div1h1}>CLIENTS</h1>
            <p style={div1p}></p>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, 
                incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure 
                minim illum fore</p>
        </Container>
        </div>
        <Container style={slider}>
        <Slider {...settings} >
            <div>
                <img style={slideimg} src="img/port1.jpg" alt="Card image"/>
            </div>
            <div>
                <img style={slideimg} src="img/port2.jpg" alt="Card image"/>
            </div>
            <div>
                <img style={slideimg} src="img/port3.jpg" alt="Card image"/>
            </div>
            <div>
                <img style={slideimg} src="img/port4.jpg" alt="Card image"/>
            </div>
            <div>
                <img style={slideimg} src="img/port5.jpg" alt="Card image"/>
            </div>
            <div>
                <img style={slideimg} src="img/port6.jpg" alt="Card image"/>
            </div>
            </Slider>
        
        </Container>
        <Footer></Footer>
        </>
    )
}

export default Home;