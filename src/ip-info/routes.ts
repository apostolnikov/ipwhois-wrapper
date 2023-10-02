import Router from 'express';
import { ipInfoController } from '.';

const router = Router();
router.get('/:ip', ipInfoController.getIpInfo);

export default router;
