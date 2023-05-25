import express from 'express';
import productRouter from './routes/productRoutes';
import ordersRouter from './routes/orderRoutes';
import loginRouter from './routes/logrinRoutes';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(ordersRouter);
app.use(loginRouter);

export default app;
