import{Router} from 'express'
import{Login,Register}from "../controllers/Use.controllers.js"
import{Payment}from"../controllers/Use.controllers.js"
import{Cart}from"../controllers/Use.controllers.js"



const router  = Router();


router.get('/login', Login)
router.get('/register', Register )

router.get('/payment', Payment)
router.get('/cart', Cart)

   
export default router; 