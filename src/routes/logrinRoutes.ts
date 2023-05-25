import { Router } from 'express';
import validations from '../middlewares/loginValidations';
import loginCOntroller from '../database/controllers/loginCOntroller';

const loginRouter = Router();

loginRouter.post('/login', validations.loginValidations, loginCOntroller.handleLogin);

export default loginRouter;