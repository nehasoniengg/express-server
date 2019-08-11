import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';
// import TraineeController from './controllers/trainee/controller';
export const router: Router = Router();
router.use('/trainee', traineeRouter);

export default router;
