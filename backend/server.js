import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productsRouter from './routes/productRoutes.js';
//configure dotenv for the express project
dotenv.config();
const port = process.env.PORT || 5050;

connectDB(); // Initialise MongoDB

const app = express();

app.use('/api/products', productsRouter);

app.get('/', (request, response) => {
    console.log(request.ip);
    console.log(request.hostname);
    console.log(request.ips);
    response.send("API is running");
});

// Endpoint for getting all products


app.listen(port, () => {
    console.log( `Server is running on port ${port}`);
})