import { Router } from 'express';
import productController from '../database/controllers/productController';

const productRouter = Router();

productRouter.post('/products', productController.createProduct);
productRouter.get('/products', productController.listProducts);

export default productRouter;