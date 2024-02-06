import UserSchema from "../modal/User.schema.js";


export const register = async  (req, res) => {
const{name,email,password,confirmpassword} =(req.body);
if(!name || !email || !password || !confirmpassword){
     return res.send("All Fields are Required")
}

const isEmailIsExist = await UserSchema.find({ email:email})

if(isEmailIsExist.length){
    return res.send("Email is exist.")
}

if(password  != confirmpassword){
    return res.send("password and confirmpassword is not matched")
}

const User = new UserSchema ({
    name:name,
    email:email,
    password:password,
    
})
 await User.save()

res.send("user stored successfully")

}