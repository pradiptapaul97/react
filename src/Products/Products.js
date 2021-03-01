import React from 'react'
import {products} from './Products.json'
import {Link} from 'react-router-dom'
import {Row, Container, Col, Card, Button} from 'react-bootstrap'
import Footer from '../Component/Footer'


export default function Products({match}) {

    const productcontainer = 
    {
        padding: "60px 0px"
    };

    const productimg = 
    {
        height: "250px",
    }

    const productcol = 
    {
        paddingBottom: "20px",
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
        paddingBottom:"30px"
    }

    return(
        <>
        <Container style={productcontainer}>
        <h1 style={div1h1}>OUR Products</h1>
        <p style={div1p}></p>
        <Row>
            {products.map((d,index)=>(
                    <Col xs={6} md={4} style={productcol}>
                        <Card>
                            <Card.Img variant="top" src={d.image} style={productimg} />
                            <Card.Body>
                                <Card.Title>{d.name}</Card.Title>
                                <Card.Text>
                                {d.subdescription}
                                </Card.Text>
                                <Link to={`${match.url}/${d.id}`}><Button variant="primary"> View Products </Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>

            ))}
        </Row>
        </Container>
        <Footer></Footer>
        </>
    )
}