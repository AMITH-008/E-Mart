import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productsRouter from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//configure dotenv for the express project
dotenv.config();
const port = process.env.PORT || 5050;

connectDB(); // Initialise MongoDB

const app = express();



app.get('/', (request, response) => {
    response.send("API is running");
});

// Endpoint for getting all products
app.use('/api/products', productsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log( `Server is running on port ${port}`);
})