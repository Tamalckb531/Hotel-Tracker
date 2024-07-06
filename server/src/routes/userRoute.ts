import express from 'express';
import { home, out } from '../controllers/user.controller';
import { verify } from '../middlewares/varifyUser';

const router = express.Router();

router.get('/home', verify, home);
router.get('/out', verify, out);

export default router;