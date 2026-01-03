import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const ProductForm = () => {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        qty: "",
        category: "",
    });

    // const updateState = useSelector((state) => state.product.updateState);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className="p-4 shadow m-2">
                            <h3> +{updateState ? "update Product data" : "Add Product"}</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Product name"
                                        value={product.name}
                                        onChange={(e) => handlechange("name", e)} 
                                        required />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>PRICE</Form.Label>
                                    <Form.Control 
                                        type="number"
                                        placeholder="Product Price "
                                        value={product.price}
                                        onChange={(e) => handlechange("price", e)} 
                                        required />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>QUANTITY</Form.Label>
                                    <Form.Control 
                                        type="number"
                                        placeholder="Product Quantity "
                                        value={product.qty}
                                        onChange={(e) => handlechange("qty", e)} 
                                        required />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>CATEGORY</Form.Label>
                                    <Form.Control 
                                        type="number"
                                        placeholder="Product Category "
                                        value={product.category}
                                        onChange={(e) => handlechange("category", e)} 
                                        required />
                                </Form.Group>
                                <div className='text-center'>
                                    <Button className="btn btn-success" type="submit">
                                        {update ? "update" : "Add Product"}
                                    </Button>
                                </div>
                            </Form> 
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductForm;