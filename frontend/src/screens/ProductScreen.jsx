import {Link, useParams, useNavigate } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import {FaArrowLeft} from 'react-icons/fa'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import { useState } from 'react'
import { addToCart } from '../slices/cartSlice';
import  { useDispatch } from 'react-redux';

const ProductScreen = () => {

    const {id : productId} = useParams();
    const {data:currentProduct, isLoading, error } = useGetProductDetailsQuery(productId);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const addToCartHandler = (e) => {
        dispatch(addToCart({
            ... currentProduct, quantity
        }));
        navigate("/cart");
    }

  return (
    <>
        <Link to='/' className='btn btn-light my-3'>
            <FaArrowLeft />
        </Link>
        {
            isLoading?(
                <Loader />
            ) : error ? (
                <Message variant="danger">
                    {error?.message || error.error}
                </Message>
            ) : (
                <>
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
                                    {
                                        currentProduct.countInStock > 0 && 
                                        (<ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Quantity:
                                                </Col>
                                                <Col>
                                                    <Form.Control 
                                                        as='select'
                                                        value={quantity}
                                                        onChange={e => setQuantity(Number(e.target.value))}
                                                    >
                                                        {[...Array(currentProduct.countInStock).keys()].map(qty => (
                                                           qty < 11 && (
                                                            <option key={ qty+1 } value={ qty+1 }>
                                                                { qty +1 }
                                                            </option> )
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>)
                                    }
                                    <ListGroup.Item>
                                        <Button
                                        disabled= {currentProduct.countInStock===0}
                                        className='btn btn-primary'
                                        onClick={addToCartHandler}
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
    </>
  )
}

export default ProductScreen