import { Router } from 'express';
import appController from '../controllers/index';

const appRouter = Router();

appRouter.get('/', appController.index);

export default appRouter;
