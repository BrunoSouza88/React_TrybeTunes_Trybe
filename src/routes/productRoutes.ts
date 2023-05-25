import { Router } from 'express';
import productController from '../database/controllers/productController';
import productsValidations from '../middlewares/productsValidations';

const productRouter = Router();

productRouter.post(
  '/products',
  productsValidations.nameValidations,
  productsValidations.priceValidations,
  productController.createProduct,
);
productRouter.get('/products', productController.listProducts);

export default productRouter;