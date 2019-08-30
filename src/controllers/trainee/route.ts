
import * as express from 'express';
import { validationHandler } from '../../libs';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import { default as TraineeController, traineeController } from './controller';
import { default as validation } from './validation';

export const  traineeRouter = express.Router();

 traineeRouter.route('/').get(validationHandler(validation.get), authMiddleWare('getUser','read'), traineeController.get)

//traineeRouter.route('/').get(validationHandler(validation.get),traineeController.get)
                       .post(validationHandler(validation.create), authMiddleWare('getUser','read'), traineeController.create)
                      .put(authMiddleWare('head-trainer','write'), traineeController.update)
                      // .put(validationHandler(validation.update), traineeController.update);
traineeRouter.route('/:id').delete(validationHandler(validation.delete), traineeController.delete);

export default traineeRouter;
