import ProductSchema from "../modal/Product.schema.js";

export const AddProduct = async(req,res)=>{
    try{
        const {Name:name,Quantity:quantity, Prise:price,Image:image,Category:category} = req.body.productData;
        console.log(name,quantity,price,image,category)

        const product =  new ProductSchema({
            name,quantity,price,image,category
        })

        console.log(product ,"product hear")
        await product.save();

        return res.status(201).json({success:true ,message:"Product Successfully Created..."})
        
    }catch(error){
        return res.status(500).json({error,success:false})

    }
}