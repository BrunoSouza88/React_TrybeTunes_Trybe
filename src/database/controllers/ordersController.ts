import { Request, Response } from 'express';
import mapStatusHTTP from '../../utils/mapStatusHTTP';
import ordersService from '../services/ordersService';

const listOrders = async (_req: Request, res: Response): Promise<Response> => {
  const serviceResponse = await ordersService.lOrders();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
};

export default {
  listOrders,
};