import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET api/products/
// @access Public
export const getAllProducts = asyncHandler(async (request, response) => {
    const products = await Product.find();
    response.json(products);
});


// @desc Fetch a product by ID
// @route GET api/products/:productId
// @access Public
export const getProductById = asyncHandler( async (request, response) => {
    const product = await Product.findById(request.params.productId);
    if(product)
    {
        return response.json(product);
    }else {
        response.status(404);
        throw new Error('Resource Not Found');
    }
});