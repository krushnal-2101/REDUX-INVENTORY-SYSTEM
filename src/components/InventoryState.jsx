    import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";




const InventoryState = () => {
    const products = useSelector((state)=> state.products.products)

    const totalProduct = products ? products.length : 0 ;

    const totalValuation = products ? 
    products.reduce((acc, curr) => {
        return (acc += curr.price * curr.qty)
    }, 0)
    : 0;


    const hightStock = products
    ? products.filter((prod) => prod.qty <= 10).length
    : 0;

    const lowStock = products
    ? products.filter((prod)=> prod.qty >= 10).length
    : 0;


    return (
        <Container>
            <Row className="mt-4 mb-4">
                <Col md={3}>
                    <Card className="shadow">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>All Product</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="shadow">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>All Product</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="shadow">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>All Product</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="shadow">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>All Product</Card.Title>
                            <Card.Text>
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default InventoryState