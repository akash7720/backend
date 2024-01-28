import { Router } from "express";
import AuthRoutes from './Auth.routes'

const router = Router();

router.use('/auth', AuthRoutes);


export default router;