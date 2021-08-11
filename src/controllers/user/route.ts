
import * as express from 'express';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import {default as userController} from './controller';
import validation from '../trainee/validation'
import  validationHandler  from '../../libs/validationHandler';

export const  userRouter = express.Router();

userRouter.route('/login').post(userController.login);


userRouter.route('/me').get(validationHandler(validation.get),authMiddleWare('getUser','all'),userController.getUsers);
userRouter.route('/update').put(userController.updateUser);
userRouter.route('/del/:id').delete(userController.deleteUser);                       
export default userRouter;
