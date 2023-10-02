import Router from 'express';
import { ipInfoRouter } from './ip-info';

const appRouter = Router();
appRouter.use('/ip-info/', ipInfoRouter);

export default appRouter;
