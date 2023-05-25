import { Router } from 'express';
import productController from '../database/controllers/productController';

const productRouter = Router();

productRouter.post('/products', productController.createProduct);

export default productRouter;