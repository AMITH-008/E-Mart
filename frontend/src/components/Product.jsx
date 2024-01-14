import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
    //'mt-2 p-2 rounded h-200 shadow shadow-lg s'
  return (
    <Card style={{marginTop:'2rem', padding:'16px', borderRadius:'12%', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.2)'}}>
        <Link to={`/product/${product._id}`}>
            <Card.Img variant='top' src={product.image} />
        </Link>
        
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div" className='product-title'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <Rating value={product.rating} text={`${product.numReviews} ratings`} />
            </Card.Text>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product