import { Router } from "express";
import { AddProduct } from "../controllers/Product.controllers.js";
const router = Router();

router.post('/Addproducts',AddProduct)

export default router;