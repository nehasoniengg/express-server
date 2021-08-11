import { Router } from 'express';
import { traineeRouter  } from './controllers/trainee';
import{userRouter} from './controllers/user';
export const router: Router = Router();
router.use('/trainee', traineeRouter);
router.use('/user',userRouter);

export default router;
