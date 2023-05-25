import { ServiceResponse } from 'src/types/ServiceResponses';
import { Product } from 'src/types/Product';
import ProductModel, { 
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../models/product.model';

const cProduct = async (product: ProductInputtableTypes): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create(product);
  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
};

const lProduct = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

export default {
  cProduct,
  lProduct,
};