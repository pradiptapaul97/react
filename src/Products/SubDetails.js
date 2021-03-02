import React,{Fragment} from 'react'
import {products} from './Products.json'
import {Redirect,Link} from "react-router-dom"
import Footer from '../Component/Footer'
import {Row, Container, Col, Card, Button} from 'react-bootstrap'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FunctionsIcon from '@material-ui/icons/Functions';

export default function ProductDetails({match}) {

    let productDetails = products.find(({id})=>id === match.params.det)

    let pdetails = productDetails.subproduct.find(({id})=>id === match.params.subdetail)

    const desp = {
        padding: "50px 30px",
        backgroundColor: "#f1f1f1",
    }

    const fdiv = {

    }

    const icncol = {
        padding: "6px",
        border: "1px solid black",
        textDecoration:"none", 
        color:"#919090",
        borderRadius: "11px",
        verticalAlign: "top",
    }

    const cont = {
        padding: "50px 20px",
    }

    const cola = {
        textDecoration:"none",
        color:"#919090"
    }

    const imag = {
        width:"60%",
    }

    if(pdetails)
    {
    return(
        <>
        <Container style={cont}>
            <Row>
                <Col xs={12} md={6} style={fdiv}>
                        <img style={imag} src={pdetails.image}/>
                </Col>
                <Col xs={12} md={6}>
                    <div style={desp}>
                    <h1>{pdetails.name} </h1>
                    <p>{pdetails.subdescription} </p>
                    <p>RATING : {pdetails.rating}/5 </p>
                    <p>PRICE : {pdetails.price} </p>
                    <p><Button style={{width: "100%"}} variant="success">Add To Cart</Button></p>
                    <p><Button style={{width: "100%"}} variant="success">Buy Now</Button></p>
                        <Row>
                        <Col md="3" xs="3" style={{paddingBottom: "20px"}}><Link style={icncol} href=""><TwitterIcon style={{verticalAlign: "bottom"}}/></Link></Col>
                        <Col md="3" xs="3" style={{paddingBottom: "20px"}}><Link style={icncol} href=""><FacebookIcon style={{verticalAlign: "bottom"}}/></Link></Col>
                        <Col md="3" xs="3" style={{paddingBottom: "20px"}}><Link style={icncol} href=""><FunctionsIcon style={{verticalAlign: "bottom"}}/></Link></Col>
                        <Col md="3" xs="3" style={{paddingBottom: "20px"}}><Link style={icncol} href=""><LinkedInIcon style={{verticalAlign: "bottom"}}/></Link></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </>
    )
    }
    return(
        <Redirect to="/home"/>
    )
}