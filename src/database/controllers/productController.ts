import { Request, Response } from 'express';
import mapStatusHTTP from '../../utils/mapStatusHTTP';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productService.cProduct({ name, price, orderId });
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  
  return res.status(201).json(serviceResponse.data);
};

const listProducts = async (req: Request, res: Response): Promise<Response> => {
  const serviceResponse = await productService.lProduct();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
};

export default {
  createProduct,
  listProducts,
};