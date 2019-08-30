
import * as express from 'express';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import {default as userController} from './controller';


export const  userRouter = express.Router();
userRouter.route('/login').post(userController.login);
//userRouter.route('/me').get(authMiddleWare('getUser','all'),userController.getUser);
userRouter.route('/me').get(userController.getUser);
userRouter.route('/update').put(userController.updateUser);
userRouter.route('/del/:id').delete(userController.deleteUser);                       
export default userRouter;
