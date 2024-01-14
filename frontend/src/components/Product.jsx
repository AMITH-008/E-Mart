import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Card className='mt-2 p-2 rounded h-200'>
        <Link to={`/product/${product._id}`}>
            <Card.Img variant='top' src={product.image} />
        </Link>
        
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product