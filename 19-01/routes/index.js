import{Router} from 'express';
import UserRoutes from './User.routes.js'
import Payment  from './User.routes.js'
import Cart  from './User.routes.js'

const router = Router();

router.use('/auth',UserRoutes)

router.use('/payment',Payment)

router.use('/cart',Cart)

   
export default router;