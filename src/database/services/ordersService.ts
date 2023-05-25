import { ServiceResponse } from 'src/types/ServiceResponses';
import OrderModel, { OrderSequelizeModel } from '../models/order.model';

const lOrders = async (): Promise<ServiceResponse<OrderSequelizeModel[]>> => {
  const products = await OrderModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

export default {
  lOrders,
};