import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const router = express.Router();


router.get('/', asyncHandler(async (request, response) => {
    const products = await Product.find();
    response.json(products);
}));

router.get('/:productId', asyncHandler( async (request, response) => {
    const product = await Product.findById(request.params.productId);
    if(product)
    {
        return response.json(product);
    }

    response.statue(404).json({message: "Product Not found"});
}));

export default router;