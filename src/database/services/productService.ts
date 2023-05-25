import { ServiceResponse } from 'src/types/ServiceResponses';
import { Product } from 'src/types/Product';
import ProductModel, { ProductInputtableTypes } from '../models/product.model';

const cProduct = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
};

export default {
  cProduct,
};