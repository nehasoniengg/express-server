// import { Router } from 'express';
import * as express from 'express';
import { validationHandler } from '../../libs';
import { default as authMiddleWare } from '../../libs/routes/authMiddleWare';
import { default as TraineeController } from './controller';
import { default as validation } from './validation';

// const traineeRouter = new Route();

export const  traineeRouter = express.Router();

traineeRouter.route('/').get(authMiddleWare('trainee', 'all'), TraineeController.get)
                       .post(validationHandler(validation.create), TraineeController.create)
                       .put(authMiddleWare('head-trainer','write'), TraineeController.update)
                      .delete(validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;
