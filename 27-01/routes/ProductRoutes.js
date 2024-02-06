import { Router } from "express";
import { AddProduct } from "../controllers/AddProduct.controllers.js";



const router = Router();

router.post('/Addproduct',AddProduct)


export default router;