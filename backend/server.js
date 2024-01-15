import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';

//configure dotenv for the express project
dotenv.config();
const port = process.env.PORT || 5050;

const app = express();


app.get('/', (request, response) => {
    console.log(request.ip);
    console.log(request.hostname);
    console.log(request.ips);
    response.send("API is running");
});

// Endpoint for getting all products
app.get('/api/products', (request, response) => {
    response.json(products);
});

app.get('/api/products/:productId', (request, response) => {
    response.json(products.find(product => product._id === request.params.productId));
})

app.listen(port, () => {
    console.log( `Server is running on port ${port}`);
})