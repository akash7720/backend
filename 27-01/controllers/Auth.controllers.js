import UserSchema from "../modal/User.schema.js";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try{
      const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
         return res.send("All fields are requried.")
    }

    if(password != confirmPassword){
      return res.json( "Password and confirm password not matched.")
    }

    const isEmailExist = await UserSchema.find({email:email})
  
    if(isEmailExist.length){
      return res.send("Email is Exist") 
    }
     
    const hashedPassword = await bcrypt.hashSync(password,10)
     console.log(hashedPassword,"Password")
    const user = new UserSchema({
        name: name,
        email: email,
        password: hashedPassword
        
    })
    
    await user.save()
    return res.json({message:'User stored successfully.' ,success:true})
   // res.send(isEmailExist)

    }catch(error){
      return res.status(500).json({error })
    }
  }

    



export const login = async (req, res) => {
     try{
      const {email ,password} = req.body.loginData;
     if(!email || !password) {
      return res.status(401).json({ success:false, massage:"Email & password both are required."}) 
     }

     const user = await UserSchema.findOne({email:email})
     if (!user){
       return res.status(404).json({success:false, massage:"User not exists."})
     }

    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
       return res.status(404).json({success:false,message:"password is incorrect"})
    }

     return res.status(200).json({success:true ,message:"Login successfull."})

     }catch(error){
      return res.status(500).json({success:false, error:error })
     }
}
