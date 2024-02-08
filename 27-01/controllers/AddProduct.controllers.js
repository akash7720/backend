
import ProductSchema from "../modal/Product.schema.js";

export const AddProduct = async (req,res) => {
     try {
          const { Name,Price,Image,Category,Quantity } = req.body.producteData;
        console.log( Name,Price,Image,Category,Quantity )

        const product=new ProductSchema({
          Name :Name,Price:Price,Image:Image,Category:Category,Quantity:Quantity

        })
        console.log(product, "product here");

        await product.save();

        return res.status(201).json({ success: true, message: "Product successfully created." })

     } catch (error) {
          return res.status(500).json({error, success:false})
        
     }
}


