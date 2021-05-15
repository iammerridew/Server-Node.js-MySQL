import { Router } from 'express';
import { index } from '../controller/index.controller';

const router = Router();

router.route('/').get(index);

export default router;
