import express from 'express';
import products from '../data/products.js';
import Product from '../models/productModel.js';

const router = express.Router();


router.get('/', async (request, response) => {
    const productsList = await Product.find();
    response.json(products);
});

router.get('/:productId', (request, response) => {
    response.json(products.find(product => product._id === request.params.productId));
});

export default router;