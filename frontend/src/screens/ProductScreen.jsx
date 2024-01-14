import React from 'react'
import {Link, useParams} from 'react-router-dom'
import products from '../products'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import {FaArrowLeft} from 'react-icons/fa'

const ProductScreen = () => {

    const {id : productId} = useParams();
    const currentProduct = products.find(product => product._id === productId);
    console.log(currentProduct);
  return (
    <>
        <Link to='/' className='btn btn-light my-3'>
            <FaArrowLeft />
        </Link>
        <Row>
            <Col md={5}>
                <Image src={currentProduct.image} alt={currentProduct.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{currentProduct.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={currentProduct.rating} text={`${currentProduct.numReviews} ratings`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${currentProduct.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {currentProduct.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>
                                        ${currentProduct.price}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>
                                        {currentProduct.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                             disabled= {currentProduct.countInStock===0}
                             className='btn btn-primary'
                            >
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen