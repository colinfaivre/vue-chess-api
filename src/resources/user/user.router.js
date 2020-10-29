import { Router } from 'express';
import { me, updateMe, getMany } from './user.controllers';

const router = Router();

router.get('/', me);
router.put('/', updateMe);
router.get('/all', getMany);

export default router;
