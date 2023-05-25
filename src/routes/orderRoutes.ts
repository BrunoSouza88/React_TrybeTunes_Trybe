import { Router } from 'express';
import ordersController from '../database/controllers/ordersController';

const ordersRouter = Router();

ordersRouter.get('/orders', ordersController.listOrders);

export default ordersRouter;