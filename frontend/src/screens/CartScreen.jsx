import {Link, useNavigate} from 'react-router-dom';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap';
import  { FaTrash } from 'react-icons/fa';
import Message from '../components/Message'
import { addToCart } from '../slices/cartSlice';
import { useState } from 'react';

const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const [deleteItem, setDeleteItem] = useState({});

    const {cartItems} = cart;

    const handleDeleteItem = () => {
        console.log("Handle Delete, e=> ", deleteItem);
    }

  return (
    <Row>
        <Col md={8}>
            <h1 style={{marginBottom: '20px'}}>Shopping Cart</h1>
            {
                cartItems.length === 0 ? (
                    <Message>
                        Your Cart is empty <Link to="/">Go Back</Link>
                    </Message>
                ): (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} rounded fluid />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={2}>
                                    <Form.Control 
                                        as='select'
                                        value={item.quantity}
                                        onChange={(e) => (
                                            dispatch(addToCart({
                                                ...item,
                                                quantity:Number(e.target.value)
                                            }))
                                        )}
                                    >
                                        {[...Array(item.countInStock).keys()].map(qty => (
                                            qty < 11 && (
                                            <option key={ qty+1 } value={ qty+1 }>
                                                { qty +1 }
                                            </option> )
                                        ))}
                                    </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type="button" variant='light' onClick={() => {
                                            setDeleteItem(item);
                                            handleDeleteItem();
                                        }}>
                                            <FaTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )
            }
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <h2>
                            Subtotal ({cartItems.reduce((a, cur)=> a + cur.quantity, 0)})&nbsp;items
                        </h2>
                        ${ cartItems.reduce((acc,cur) => acc + cur.quantity * cur.price, 0).toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type="button" color='primary' disabled={cartItems.length === 0}>Proceed to Chekout</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  )
}

export default CartScreen