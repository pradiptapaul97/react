import React,{Fragment} from 'react'
import {products} from './Products.json'
import {useParams,Redirect,Link} from "react-router-dom"
import {Row, Container, Col, Card, Button} from 'react-bootstrap'
import Footer from '../Component/Footer'


export default function ProductDetails({match}) {

    const {detail} = useParams();

    let productDetails = products.find(({id})=>id === match.params.detail)

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
    
    return(
        <>
        <Container style={productcontainer}>
            <Row>
        {productDetails ? (productDetails.subproduct.map((d)=>(
                <Col xs={6} md={4} style={productcol}>
                    <Card>
                        <Card.Img variant="top" src={d.image} style={productimg} />
                        <Card.Body>
                            <Card.Title>{d.name}</Card.Title>
                            <Card.Text>
                            {d.subdescription}
                            </Card.Text>
                            <Link to={`${match.url}/${d.id}`}><Button variant="primary">View Details </Button></Link>
                        </Card.Body>
                    </Card>
                </Col>

        ))) : (<Redirect to="/home"/>)}
        </Row>
        </Container>
        <Footer></Footer>
        </>
    )
}